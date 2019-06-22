// https://ethanschoonover.com/solarized/
const solarized = {
  base03: "#002b36",
  base02: "#073642",
  base01: "#586e75",
  base00: "#657b83",
  base0: "#839496",
  base1: "#93a1a1",
  base2: "#eee8d5",
  base3: "#fdf6e3",
  yellow: "#b58900",
  orange: "#cb4b16",
  red: "#dc322f",
  magenta: "#d33682",
  violet: "#6c71c4",
  blue: "#268bd2",
  cyan: "#2aa198",
  green: "#859900"
};

export default {
  color: {
    background: solarized.base3,
    hightlight: solarized.base2,
    comment: solarized.base1,
    text: solarized.base00,
    header: solarized.base01,
    accent: solarized.blue,
    hover: solarized.cyan
  },
  font: {
    size: "16px",
    scale: 1.5,
    family: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ]
  },
  line: {
    height: 1.5,
    width: {
      view: "960px",
      text: 42
    }
  }
};
