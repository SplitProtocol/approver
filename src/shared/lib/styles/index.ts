import { createStitches } from "@stitches/react";

import { setupFonts } from "./fonts";
import { setupStyles } from "./global";

export const media = {
  toWideMobile: "only screen and (max-width: 560px)",
  toTablet: "only screen and (max-width: 768px)",
  toWideTablet: "only screen and (max-width: 960px)",
  toLaptop: "only screen and (max-width: 1120px)",
};

export const { styled, getCssText, keyframes, createTheme, css } = createStitches({
  theme: {
    colors: {
      background: "#0A0A0A",
      accent: "#F29212",
      block: "#191919",
      blockSecondary: "#2E2D2C",
      border: "#615447",
      borderSecondary: "rgba(97, 84, 71, 0.50)",
      borderTertiary: "#4D4B49",
      text: "#E5E5E5",
      textGray: "rgba(229, 229, 229, 0.7)",
      textGrayDark: "rgba(229, 229, 229, 0.5)",
      textDark: "#191919",
    },
    shadows: {},
    fonts: {
      roboto: "Roboto, sans-serif",
    },
    fontSizes: {
      little: "11px",
      small: "12px",
      smallMedium: "13px",
      smallLarge: "14px",
      default: "15px",
      defaultLarge: "16px",
      medium: "18px",
      large: "20px",
      largeMedium: "22px",
      titleSmall: "24px",
      titleMediumSmall: "25px",
      titleMedium: "28px",
      titleMediumLarge: "30px",
      titleLarge: "32px",
      titleExtraLarge: "35px",
      big: "40px",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    letterSpacings: {},
    transitions: {
      default: "0.2s ease-in-out",
      long: "0.3s ease-in-out",
    },
    radii: {
      default: "8px",
      medium: "14px",
      large: "30px",
    },
    zIndices: {},
  },
  media,
});

export const setupGlobalStyles = () => {
  setupFonts();
  setupStyles();
};
