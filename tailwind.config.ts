import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black:{
          DEFAULT: '#000',
          100: '#000319'
        },
        blue:{
          100:'#295F98'
        }
      }
    },
  },
  plugins: [
    // addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
 
//   addBase({
//     ":root": newVars,
//   });
// }

export default config;
