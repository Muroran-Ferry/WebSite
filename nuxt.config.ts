// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      GTAG_ID: process.env.NUXT_PUBLIC_GTAG_ID,
      ADSENSE_CLIENT_ID: process.env.NUXT_PUBLIC_ADSENSE_CLIENT_ID,
    },
  },
  modules: ['nuxt-jsonld'],
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
});
