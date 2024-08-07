import webpackStatsPlugin from 'rollup-plugin-webpack-stats';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      SITE_DESCRIPTION: process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
      GTAG_ID: process.env.NUXT_PUBLIC_GTAG_ID,
      ADSENSE_CLIENT_ID: process.env.NUXT_PUBLIC_ADSENSE_CLIENT_ID,
      ANNOUNCEMENT_API_URL: process.env.NUXT_PUBLIC_ANNOUNCEMENT_API_URL,
      HOLIDAY_API_URL: process.env.NUXT_PUBLIC_HOLIDAY_API_URL,
      SEIRAN_PRICE_SCHEDULE_API_URL:
        process.env.NUXT_PUBLIC_SEIRAN_PRICE_SCHEDULE_API_URL,
      SEIRAN_STATUS_API_URL: process.env.NUXT_PUBLIC_SEIRAN_STATUS_API_URL,
      FRESHDESK_CONTACT_FORM_WIDGET_ID:
        process.env.NUXT_PUBLIC_FRESHDESK_CONTACT_FORM_WIDGET_ID,
      GOOGLE_MAPS_API_KEY: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      PLACE_ID: process.env.NUXT_PUBLIC_PLACE_ID,
    },
  },

  modules: [
    // Nuxt ESLint
    // https://eslint.nuxt.com/packages/module
    '@nuxt/eslint',

    '@nuxt/devtools',
    '@nuxtjs/web-vitals',
    'nuxt-jsonld',

    // Nuxt Image
    // https://image.nuxt.com/get-started/installation
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        class: '[--scroll-mt:9rem] lg:[--scroll-mt:8rem]',
      },
      script: [
        process.env.NUXT_PUBLIC_ADSENSE_CLIENT_ID
          ? {
              src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NUXT_PUBLIC_ADSENSE_CLIENT_ID}`,
              async: true,
              crossorigin: 'anonymous',
              tagPosition: 'head',
            }
          : undefined,
      ],
    },
  },

  eslint: {},

  image: {
    cloudimage: {
      token: process.env.NUXT_PUBLIC_CLOUDIMAGE_TOKEN,
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || process.env.CF_PAGES_URL,
    },
  },

  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false,
  },

  vite: {
    plugins: [
      // Output webpack-stats.json file
      // https://relative-ci.com/documentation/guides/bundle-stats/vite
      webpackStatsPlugin(),
    ],
  },

  compatibilityDate: '2024-07-15',
});
