// ThemeSwitcher.jsx
// DEV TOOL — remove before launch

import { useState, useEffect } from "react";

const THEMES = {
  "Original": {
    "--cream":      "#f9f4ec",
    "--parchment":  "#f0e8d8",
    "--bark":       "#3d2b1f",
    "--bark-mid":   "#5c3d28",
    "--gold":       "#c8891a",
    "--gold-light": "#e8a93a",
    "--sage":       "#5a6b4a",
    "--sage-light": "#7a8f68",
    "--terra":      "#b85c38",
    "--moss":       "#3a4c2e",
    "--text":       "#2a1e14",
    "--text-mid":   "#5a4535",
    "--text-light": "#8a7060",
  },
  "Golden Hour": {
    "--cream":      "#fffbf0",
    "--parchment":  "#fff3d4",
    "--bark":       "#4a2800",
    "--bark-mid":   "#6b3a00",
    "--gold":       "#e8920a",
    "--gold-light": "#f5b020",
    "--sage":       "#6b7a2a",
    "--sage-light": "#8a9c3a",
    "--terra":      "#d94a18",
    "--moss":       "#3a4a10",
    "--text":       "#2a1800",
    "--text-mid":   "#5a3a00",
    "--text-light": "#8a6a30",
  },
  "Summer Red": {
    "--cream":      "#fffbf0",
    "--parchment":  "#fff3d4",
    "--bark":       "#4a2800",
    "--bark-mid":   "#6b3a00",
    "--gold":       "#f2c4b0",
    "--gold-light": "#d44060",
    "--sage":       "#8a1a0a",
    "--sage-light": "#b02a14",
    "--terra":      "#d94a18",
    "--moss":       "#5a0a00",
    "--text":       "#2a1800",
    "--text-mid":   "#5a3a00",
    "--text-light": "#8a6a30",
  },
};

export default function ThemeSwitcher() {
  const [active, setActive] = useState("Original");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const theme = THEMES[active];
    const root = document.documentElement;
    Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [active]);

  return (
    <div style={{
      position: "fixed",
      bottom: "1.5rem",
      right: "1.5rem",
      zIndex: 9999,
      fontFamily: "system-ui, sans-serif",
      fontSize: "0.78rem",
    }}>
      {!collapsed ? (
        <div style={{
          background: "rgba(20,12,6,0.92)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(232,169,58,0.35)",
          borderRadius: "6px",
          padding: "1rem 1.1rem",
          minWidth: "190px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
          }}>
            <span style={{
              color: "rgba(232,169,58,0.9)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 600,
              fontSize: "0.68rem",
            }}>
              🎨 Theme Preview
            </span>
            <button
              onClick={() => setCollapsed(true)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(240,232,216,0.4)", fontSize: "1rem", lineHeight: 1,
                padding: "0 0 0 0.5rem",
              }}
            >×</button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {Object.keys(THEMES).map(name => (
              <button
                key={name}
                onClick={() => setActive(name)}
                style={{
                  background: active === name ? "rgba(232,169,58,0.18)" : "transparent",
                  border: active === name
                    ? "1px solid rgba(232,169,58,0.6)"
                    : "1px solid rgba(240,232,216,0.1)",
                  borderRadius: "4px",
                  color: active === name ? "#e8a93a" : "rgba(240,232,216,0.65)",
                  cursor: "pointer",
                  padding: "0.45rem 0.75rem",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: "0.78rem",
                  fontWeight: active === name ? 600 : 400,
                  letterSpacing: "0.04em",
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{
                  width: "10px", height: "10px", borderRadius: "50%",
                  background: THEMES[name]["--gold"],
                  border: `2px solid ${THEMES[name]["--sage"]}`,
                  flexShrink: 0,
                }} />
                {name}
                {active === name && (
                  <span style={{ marginLeft: "auto", fontSize: "0.65rem", opacity: 0.8 }}>✓</span>
                )}
              </button>
            ))}
          </div>

          <div style={{
            marginTop: "0.85rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid rgba(240,232,216,0.08)",
            color: "rgba(240,232,216,0.3)",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            Dev only · remove before launch
          </div>
        </div>
      ) : (
        <button
          onClick={() => setCollapsed(false)}
          style={{
            background: "rgba(20,12,6,0.92)",
            border: "1px solid rgba(232,169,58,0.35)",
            borderRadius: "6px",
            color: "rgba(232,169,58,0.9)",
            cursor: "pointer",
            padding: "0.6rem 1rem",
            fontFamily: "inherit",
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          🎨 Themes
        </button>
      )}
    </div>
  );
}