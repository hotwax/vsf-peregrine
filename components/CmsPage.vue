<template>
  <div v-if="cmsObject">
    <div v-for="(component, index) in cmsObject.components" :key="index">
      <component
        v-bind:is="cmsComponent[component.type]"
        :componentData="component.data"
        :componentType="component.type"
      />
    </div>
  </div>
</template>

<script>
import i18n from "@vue-storefront/i18n";
const TextBlock = () => import('./organisms/o-text-block')
const Banner = () => import('./molecules/m-banner')

export default {
  props: {
    cmsObject: {
      type: Object
    }
  },
  data() {
    return {
      cmsComponent: {
        'richtext': TextBlock,
        'bannerleft': Banner,
        'bannerright': Banner
      }
    };
  }
};
</script>
