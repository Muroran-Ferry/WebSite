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

declare global {
  interface Window {
    fwSettings: {
      widget_id: number;
    };
    FreshworksWidget: () => void;
  }
}

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
  new ScrollHint('[data-scroll-hint]', {
    suggestiveShadow: true,
    i18n: {
      scrollable: 'スクロールできます',
    },
  });

  if (config.public.FRESHDESK_CONTACT_FORM_WIDGET_ID) {
    const widgetId = config.public.FRESHDESK_CONTACT_FORM_WIDGET_ID;
    window.fwSettings = {
      widget_id: parseInt(widgetId),
    };

    if (typeof window.FreshworksWidget !== 'function') {
      const n = function () {
        // eslint-disable-next-line prefer-rest-params
        n.q.push(arguments);
      };
      n.q = [] as IArguments[];
      window.FreshworksWidget = n;
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
