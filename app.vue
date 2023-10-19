<template>
  <div>
    <SiteHeader
      class="supports-backdrop-blur:bg-white/60 sticky top-0 z-20 w-full flex-none border-b border-slate-900/10 bg-white/95 backdrop-blur transition-colors duration-500"
    />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import ScrollHint from 'scroll-hint';

const appConfig = useAppConfig();
const config = useRuntimeConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.title}` : appConfig.title;
  },
});

onMounted(() => {
  new ScrollHint('[data-scroll-hint]', {
    suggestiveShadow: true,
    i18n: {
      scrollable: 'スクロールできます',
    },
  });

  if (config.public.FRESHDESK_CONTACT_FORM_WIDGET_ID) {
    const widgetId = config.public.FRESHDESK_CONTACT_FORM_WIDGET_ID;
    // @ts-ignore
    window.fwSettings = {
      widget_id: parseInt(widgetId),
    };
    // @ts-ignore
    !(function () {
      // @ts-ignore
      if ('function' != typeof window.FreshworksWidget) {
        var n = function () {
          // @ts-ignore
          n.q.push(arguments);
        };
        // @ts-ignore
        (n.q = []), (window.FreshworksWidget = n);
      }
    })();

    const externalScript = Object.assign(document.createElement('script'), {
      type: 'text/javascript',
      src: `https://widget.freshworks.com/widgets/${widgetId}.js`,
      defer: true,
      async: true,
    });
    document.head.appendChild(externalScript);
  }
});
</script>
