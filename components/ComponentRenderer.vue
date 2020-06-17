<template>
  <div v-if="cmsObject">
    <div v-for="(component, index) in cmsObject.components" :key="index">
      <component
        v-bind:is="cmsComponent[component.type]"
        :componentData="component"
      />
    </div>
  </div>
</template>

<script>
import i18n from "@vue-storefront/i18n";

export default {
  props: {
    cmsObject: {
      type: Object
    }
  },
  data() {
    return {
      cmsComponent: {
      }
    };
  }
};
</script>
