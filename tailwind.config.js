import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: [
        forms,
        nextui({
            prefix: "nextui", // prefijo para las variables de temas
            addCommonColors: false, // sobrescribir colores comunes
            defaultTheme: "light", // tema por defecto
            defaultExtendTheme: "light", // tema por defecto para extender en temas personalizados
            layout: {
                colors: {
                    foreground: {
                        DEFAULT: "#000000", // color del texto por defecto para el layout claro
                        dark: "#ffffff", // color del texto por defecto para el layout oscuro
                    },
                    background: {
                        DEFAULT: "#ffffff", // color del fondo por defecto para el layout claro
                        dark: "#1a202c", // color del fondo por defecto para el layout oscuro
                    },
                    primary: {
                        DEFAULT: "#1a202c", // color primario por defecto para el layout claro
                        dark: "#edf2f7", // color primario por defecto para el layout oscuro
                    },
                    secondary: {
                        DEFAULT: "#2d3748", // color secundario por defecto para el layout claro
                        dark: "#e2e8f0", // color secundario por defecto para el layout oscuro
                    },
                    accent: {
                        DEFAULT: "#4a5568", // color de acento por defecto para el layout claro
                        dark: "#cbd5e0", // color de acento por defecto para el layout oscuro
                    },
                },
                dividerWeight: "1px", // h-divider the default height applied to the divider component
                disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
                fontSize: {
                    tiny: "0.75rem", // text-tiny
                    small: "0.875rem", // text-small
                    medium: "1rem", // text-medium
                    large: "1.125rem", // text-large
                },
                lineHeight: {
                    tiny: "1rem", // text-tiny
                    small: "1.25rem", // text-small
                    medium: "1.5rem", // text-medium
                    large: "1.75rem", // text-large
                },
                radius: {
                    small: "8px", // rounded-small
                    medium: "12px", // rounded-medium
                    large: "14px", // rounded-large
                },
                borderWidth: {
                    small: "1px", // border-small
                    medium: "2px", // border-medium (default)
                    large: "3px", // border-large
                },
            },
            themes: {
                light: {
                    layout: {
                        colors: {
                            foreground: "#000000",
                            background: "#ffffff",
                            primary: "#1a202c",
                            secondary: "#2d3748",
                            accent: "#4a5568",
                        },
                        hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
                        boxShadow: {
                            // shadow-small
                            small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                            // shadow-medium
                            medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                            // shadow-large
                            large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                        },
                    },
                },
                dark: {
                    layout: {
                        colors: {
                            foreground: "#ffffff",
                            background: "#1a202c",
                            primary: "#edf2f7",
                            secondary: "#e2e8f0",
                            accent: "#cbd5e0",
                        },
                        hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
                        boxShadow: {
                            // shadow-small
                            small: "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                            // shadow-medium
                            medium: "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                            // shadow-large
                            large: "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                        },
                    },
                },
                // ... temas personalizados
                
            },
        }),
    ],
};
