/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,html,js}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'card': '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
            },
            screens: {
                'xs': '512px',
            },
            fontSize: {
                'md': ['1rem', '1.5rem'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-3d'),
    ],
}

