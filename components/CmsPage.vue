<template functional>
  <div v-if="props.cmsObject">
    <div v-for="(component, index) in props.cmsObject.components" :key="index">
      <component
        :is="props.cmsComponent[component.type]"
        :component-data="component.data"
        :component-type="component.type"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cmsObject: {
      required: true,
      type: Object
    },
    cmsComponent: {
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

#static {
  box-sizing: border-box;
  @include for-desktop {
    margin: 0 auto;
  }
  padding: 0 var(--spacer-sm);
  --content-pages-height: auto;
  ::v-deep {
    .sf-content-pages__content,
    .sf-content-pages__sidebar {
      height: min-content;
    }
  }
}
</style>
