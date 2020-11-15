export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'HoloSalud',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sitio web de clinica ocupacional HoloSalud' }
    ],
    htmlAttrs: {
      lang: 'es'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/NETMEDICAL.ico' },

      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      { res: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~assets/css/animate.css', lang: 'css'},
    { src: '~assets/css/magnific-popup.css', lang: 'css'},
    { src: '~assets/css/bootstrap-datepicker.css', lang: 'css'},
    { src: '~assets/css/jquery.timepicker.css', lang: 'css'},
    { src: '~assets/css/flaticon.css', lang: 'css'},
    { src: '~assets/css/style.css', lang: 'css'}
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  }
}
