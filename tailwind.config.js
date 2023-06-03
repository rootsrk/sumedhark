/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './app/**/*.{ts,tsx}',
    './node_modules/@assembly-web/ui/lib/**/*.{ts,tsx}',
  ],
};
