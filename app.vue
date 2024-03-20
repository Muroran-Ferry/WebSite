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

// const appManifest = await getAppManifest();
// console.log('buildInfo', useAppConfig().nuxt?.buildId, appManifest.timestamp);

onMounted(() => {
  // eslint-disable-next-line no-new
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

    if (typeof (window as any).FreshworksWidget !== 'function') {
      const n: {
        q: any[];
        (args: any): void;
      } = function () {
        n.q.push(arguments);
      };
      n.q = [];
      (window as any).FreshworksWidget = n;
    }

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
