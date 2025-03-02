/** @type {import('tailwindcss').Config} */

import { Colors } from "./src/constants/Colors";

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                ...Colors,
            },
        },
    },
    plugins: [],
};
