import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Visit from './pages/Visit'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  )
}
