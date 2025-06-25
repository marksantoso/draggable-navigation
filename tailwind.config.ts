// tailwind.config.js
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                gray: {
                    900: '#000000',
                    850: '#1A1A1A',
                    800: '#444444',
                    700: '#677289',
                    600: '#8C93A1',
                    500: '#9DA4B2',
                    400: '#C0C0C0',
                    300: '#E1E1E1',
                    200: '#FAFBFC',
                    100: '#F9FAFB',
                },
                white: '#FFFFFF',
                blue: {
                    500: '#2F72E2',
                },
                red: {
                    500: '#EF494F',
                },
                yellow: {
                    500: '#F59D0E',
                },
            },
        },
    },
    plugins: [],
}
