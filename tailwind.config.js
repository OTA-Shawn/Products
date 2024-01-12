/** @type {import('tailwindcss').Config} */
const BRANDS = [
  "Ador",
  "Amamedic",
  "Inada",
  "Osaki",
  "Otamic",
  "Others",
  "Theramedic",
  "Titan",
  "utils",
]
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: [`./{${BRANDS.join(",")}}/**/*.{html,js}`],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  prefix: "tw-",
}
