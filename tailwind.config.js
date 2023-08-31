/** @type {import('tailwindcss').Config} */

import Image from "./src/assets/desktop/"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Imagem" : "url(./src/assets/desktop/image-phone-and-keyboard.jpg)"
      }
    },
  },
  plugins: [],
}

