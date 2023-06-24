import { globalCss } from "@stitches/react";

export const setupFonts = globalCss({
  "@font-face": [
    {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 300,
      src: 'local("Roboto"), url("/assets/fonts/Roboto/Light/RobotoLight.woff2") format("woff2"), url("/assets/fonts/Roboto/Light/RobotoLight.woff") format("woff")',
    },
    {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: 'local("Roboto"), url("/assets/fonts/Roboto/Regular/RobotoRegular.woff2") format("woff2"), url("/assets/fonts/Roboto/Regular/RobotoRegular.woff") format("woff")',
    },
    {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 500,
      src: 'local("Roboto"), url("/assets/fonts/Roboto/Medium/RobotoMedium.woff2") format("woff2"), url("/assets/fonts/Roboto/Medium/RobotoMedium.woff") format("woff")',
    },
    {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 700,
      src: 'local("Roboto"), url("/assets/fonts/Roboto/Bold/RobotoBold.woff2") format("woff2"), url("/assets/fonts/Roboto/Bold/RobotoBold.woff") format("woff")',
    },
    {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 900,
      src: 'local("Roboto"), url("/assets/fonts/Roboto/Black/RobotoBlack.woff2") format("woff2"), url("/assets/fonts/Roboto/Black/RobotoBlack.woff") format("woff")',
    },
  ],
});
