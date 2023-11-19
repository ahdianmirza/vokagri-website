import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
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
                "white-primary": "#F8FAFC",
                page: "#EFFAF4",
                "black-primary": "#3B3B3B",
            },
            backgroundImage: {
                "hero-bg": "url('img/heroBackground.png')",
                "kontak-bg": "url('img/kontakBackground.png')",
            },
        },
    },

    plugins: [forms],
};
