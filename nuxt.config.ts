// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/appStyle.css"
    ],
    app: { head: { title: 'TULIPS Dev', } },
})

{
    buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',

        // With options
        ['@nuxtjs/vuetify', { /* module options */ }]
    ]
}
