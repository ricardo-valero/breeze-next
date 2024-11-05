import { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {},
    plugins: [require('@tailwindcss/forms')],
}

export default config
