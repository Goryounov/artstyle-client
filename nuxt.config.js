require('dotenv').config()

export default {
  ssr: false,
  target: 'server',
  server: {
    host: '0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ArtStyle",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0"  },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  styleResources: {
    scss: [
      '~assets/css/bulma-variables.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'nuxt-buefy',
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  router: {
    middleware: ['isAuthenticated']
  },

  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "accessToken",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
        refreshToken: {
          property: "refreshToken",
          data: "refreshToken"
        },
        endpoints: {
          login: { url: "/auth/signin", method: "post" },
          refresh: { url: "/auth/refresh", method: "post" },
          user: { url: "/auth/user", method: "get" },
          logout: false
        }
      }
    }
  },

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL
  },

  build: {}
}
