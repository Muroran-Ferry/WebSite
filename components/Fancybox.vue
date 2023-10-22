<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { Fancybox } from '@fancyapps/ui';

import '@fancyapps/ui/dist/fancybox/fancybox.css';

// props
interface Props {
  options?: Object;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

// ref
const container = ref();

// lifecycle
onMounted(() => {
  Fancybox.bind(container.value, '[data-fancybox]', props.options);
});

onUpdated(() => {
  Fancybox.unbind(container.value);
  Fancybox.close();

  Fancybox.bind(container.value, '[data-fancybox]', props.options);
});

onUnmounted(() => {
  Fancybox.destroy();
});
</script>

<style></style>
