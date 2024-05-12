import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
    theme: {
        extend: {
            colors: {
                primary: "#6867CS"
            },
        },
        container: {
            screens: {
                sm: "470px",
                md: "598px",
                lg: "854px",
                xl: "1110px",
            },
            center: true,
        }
    }
}