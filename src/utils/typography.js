import Typography from "typography";

import theme from "./theme";

const typography = new Typography({
  baseFontSize: theme.font.size,
  baseLineHeight: theme.line.height,
  scaleRatio: theme.font.scale,
  headerFontFamily: theme.font.family,
  bodyFontFamily: theme.font.family,
  bodyColor: theme.color.text,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    // main
    h1: scale(2),
    h2: scale(1.5),
    h3: scale(1),
    h4: scale(0.5),
    h5: scale(0),
    h6: scale(-0.5),
    p: scale(0),
    body: {
      background: theme.color.background
    },
    "::-moz-selection": {
      background: theme.color.hightlight
    },
    "::selection": {
      background: theme.color.hightlight
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: "normal",
      color: theme.color.header
    },
    // link
    a: {
      textDecoration: `none`,
      color: theme.color.accent
    },
    "a:hover": {
      textDecoration: `underline`
    },
    // border
    header: scale(1),
    footer: scale(-0.5)
  })
});

export const { scale, rhythm, options } = typography;
export default typography;
