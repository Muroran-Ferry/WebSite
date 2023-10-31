// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
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
  modules: ['@nuxt/devtools', '@nuxtjs/web-vitals', 'nuxt-jsonld'],
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

  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false,
  },
});
