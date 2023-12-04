import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                "2xl": "1366px",
            },
            colors: {
                primary: "#0E4F55",
                "primary-hover": "#157881",
                "white-primary": "#F8FAFC",
                page: "#EFFAF4",
                "black-primary": "#3B3B3B",
            },
            backgroundImage: {
                "hero-bg": "url('img/heroBackground.png')",
                "kontak-bg": "url('img/kontakBackground.png')",
                "product-bg": "url('img/productBackground.png')",
            },
        },
    },

    plugins: [forms, require("flowbite/plugin")],
};
