import colors from "vuetify/es5/util/colors";

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: process.env.npm_package_name +
      " - " +
      process.env.npm_package_description,
    title: process.env.npm_package_name || "",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/icon.png"
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    "nuxt-webfontloader"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "https://api.butiq.co.in/api",
    // baseURL: 'http://localhost:8000',
    proxyHeaders: false,
    credentials: false,
    proxy: false,
    debug: false,
    urlencoded: true
  },

  // Auth module configuration

  auth: {
    redirect: {
      home: "/",
      logout: "/",
      login: "/",
      callback: "/"
    },
    watchLoggedIn: true,
    refresh_token: {
      prefix: "_refresh_token."
    },
    token: {
      prefix: "_token."
    },
    localStorage: false,
    cookie: {
      prefix: "auth.",
      options: {
        path: "/",
        expires: 5
        // domain: '',
        // secure - false,
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "meta.token"
          },
          user: {
            url: "/auth/me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "/auth/logout",
            method: "get"
          }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      },
      facebook: {
        client_id: "2442813762714926",
        // userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',

      },
      google: {
        client_id: "971122924020-j0754ojm02r59dt421ig97l6682mhr69.apps.googleusercontent.com"
      },
      "laravel.passport": {
        url: "/auth/login",
        client_id: "1",
        client_secret: "qncrYUzAv4Qdtj6A0Z6yiYVLRj88yZztq13PRUy5"
      }
    }
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  buildModules: ["@nuxtjs/vuetify"],
  webfontloader: {
    google: {
      families: ["Poppins:300,400,500,600&display=swap"] //Loads Lato font with weights 400 and 700
    }
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: false,
      icons: "mdi"
    },
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.purple.base,
          accent: colors.grey.darken2,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: colors.purple.lighten2,
          accent: colors.grey.lighten1,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};