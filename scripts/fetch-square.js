/**
 * Runs before `vite build`. Pulls the "New Arrivals 2026" category and
 * "Featured" category from the Square Catalog API and writes:
 *   src/data/varieties.json  — list of new arrival names
 *   src/data/featured.json   — full detail for the featured cultivar
 *
 * If SQUARE_ACCESS_TOKEN is not set, the script exits cleanly and the
 * existing placeholder data files are used unchanged.
 *
 * Square setup required (one-time, done with Scott):
 *   1. Create a category called "New Arrivals 2026" — drag items into it
 *   2. Create a category called "Featured" — put exactly one item in it
 *   3. On the featured item, add custom attributes: award, growth, style
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '../src/data')

if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true })

const TOKEN = process.env.SQUARE_ACCESS_TOKEN

if (!TOKEN) {
  console.log('ℹ  SQUARE_ACCESS_TOKEN not set — using existing placeholder data.')
  process.exit(0)
}

const BASE = 'https://connect.squareup.com/v2'
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
  'Square-Version': '2024-01-18',
}

async function fetchAll(path) {
  const objects = []
  let cursor = null
  do {
    const url = `${BASE}${path}${cursor ? `&cursor=${cursor}` : ''}`
    const res = await fetch(url, { headers })
    if (!res.ok) throw new Error(`Square API ${path} → ${res.status} ${await res.text()}`)
    const data = await res.json()
    objects.push(...(data.objects || []))
    cursor = data.cursor ?? null
  } while (cursor)
  return objects
}

async function run() {
  const objects = await fetchAll('/catalog/list?types=ITEM,CATEGORY,IMAGE')

  const categories = objects.filter(o => o.type === 'CATEGORY')
  const items      = objects.filter(o => o.type === 'ITEM')
  const images     = objects.filter(o => o.type === 'IMAGE')

  const imageMap = Object.fromEntries(
    images.map(img => [img.id, img.image_data?.url])
  )

  const findCat = name =>
    categories.find(c => c.category_data?.name?.toLowerCase() === name.toLowerCase())

  const newArrivalsCat = findCat('New Arrivals 2026')
  const featuredCat    = findCat('Featured')

  if (!newArrivalsCat) console.warn('⚠  No "New Arrivals 2026" category found in Square.')
  if (!featuredCat)    console.warn('⚠  No "Featured" category found in Square.')

  const inCategory = (item, cat) =>
    cat && item.item_data?.categories?.some(c => c.id === cat.id)

  // New arrivals
  const newItems = items.filter(i => inCategory(i, newArrivalsCat))
  if (newItems.length > 0) {
    const varieties = newItems.map(i => ({ name: i.item_data.name }))
    writeFileSync(join(dataDir, 'varieties.json'), JSON.stringify(varieties, null, 2))
    console.log(`✓ Wrote ${varieties.length} new arrivals to varieties.json`)
  } else {
    console.log('ℹ  No new arrivals found — varieties.json unchanged.')
  }

  // Featured cultivar
  const featuredItem = items.find(i => inCategory(i, featuredCat))
  if (featuredItem) {
    const d   = featuredItem.item_data
    const img = d.image_ids?.[0]
    const attrs = d.custom_attribute_values ?? {}
    const featured = {
      name:        d.name,
      description: d.description ?? '',
      image_url:   img ? imageMap[img] ?? '' : '',
      image_alt:   `${d.name} daylily`,
      award:       attrs.award?.string_value  ?? '',
      growth:      attrs.growth?.string_value ?? '',
      style:       attrs.style?.string_value  ?? '',
      // TODO: Replace with direct Square item URL once Scott's store is configured
      square_url:  '#',
    }
    writeFileSync(join(dataDir, 'featured.json'), JSON.stringify(featured, null, 2))
    console.log(`✓ Wrote featured cultivar: ${featured.name}`)
  } else {
    console.log('ℹ  No featured item found — featured.json unchanged.')
  }
}

run().catch(err => {
  console.error('Square fetch failed:', err.message)
  process.exit(1)
})
