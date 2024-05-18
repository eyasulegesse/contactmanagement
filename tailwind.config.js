import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

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
            colors: {
                appColor1: "#1F2937",
                appColor2: "#344C64",
                appWhite: "#fff",
                appBlack: "gray",
                appsuccess: "#40A578",
            },
            spacing: {
                BigSpace: "20px",
                MediumSpace: "15px",
                smallSpace: "10px",
                extraSmall: "5px",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
