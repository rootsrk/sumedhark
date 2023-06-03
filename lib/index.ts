import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import formsPlugin from "@tailwindcss/forms";
import lineClampPlugin from "@tailwindcss/line-clamp";
import typographyPlugin from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

import { colorTokens } from "./colors";

/**
 * If you need one off variants that tailwind doesn't provide out of the box use,
 * https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
 * @type {import('tailwindcss').Config}
 */
export default {
  darkMode: "class",
  content: ["./index.html", "./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],

  theme: {
    // Intentionally override tailwind colors so that we're enforced
    // to use the design token colors
    colors: colorTokens,

    fontFamily: {
      sans: ["Poppins"],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontSize: {
      xs: ["0.75rem", "1.25rem"],
      sm: ["0.875rem", "1.375rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "2rem"],
      "2xl": ["1.875rem", "2.375rem"],
      "3xl": ["2.375rem", "2.875rem"],
      "4xl": ["2.875rem", "3.375rem"],
      "5xl": ["3.5rem", "4rem"],
    },
  },

  plugins: [aspectRatioPlugin, formsPlugin, lineClampPlugin, typographyPlugin],
};
