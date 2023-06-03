/* eslint-env node */
const tailwindPreset = require('./lib');


/** @type {import('tailwindcss').Config} */
const safelist = Object.keys(tailwindPreset.theme.colors)
  .reduce((acc, color) => {
    acc.push(`bg-${color}`);
    acc.push(`text-${color}`);
    acc.push(`border-${color}`);

    Object.keys(tailwindPreset.theme.colors[color]).forEach((shade) => {
      acc.push(`bg-${color}-${shade}`);
      acc.push(`text-${color}-${shade}`);
      acc.push(`border-${color}-${shade}`);
    });

    return acc;
  }, [])
  .concat(['not-italic', 'font-bold']);

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  darkMode: 'class',
  content: [
    './index.html',
    './app/**/*.{ts,tsx}',
    './node_modules/@assembly-web/ui/lib/**/*.{ts,tsx}',
  ],
  safelist,
};
