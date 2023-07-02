/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                poke: {
                    black: '#afafaf',
                    blue: '#7ad7d7',
                    brown: '#e4aa79',
                    gray: '#d0d0d0',
                    green: '#7ad788',
                    pink: '#e18b89',
                    purple: '#a97ad7',
                    red: '#e07187',
                    white: '#ebebeb',
                    yellow: '#e6d27a',
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
