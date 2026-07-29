/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", panel: "var(--panel)", line: "var(--line)",
        lineStrong: "var(--line-strong)", text: "var(--text)",
        muted: "var(--muted)", faint: "var(--faint)",
        accent: "var(--accent)", accentSoft: "var(--accent-soft)",
        chip: "var(--chip)",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      maxWidth: { shell: "1120px" },
    },
  },
  plugins: [],
}

