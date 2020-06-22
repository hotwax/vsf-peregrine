<template>
  <a v-if="componentData.link" @click="link(componentData)">
    <SfBanner
      :class="banner"
      :title="componentData.title"
      :description="componentData.text"
      :button-text="componentData.buttontext"
      :image="image"
    />
  </a>
  <SfBanner
    v-else
    :class="banner"
    :title="componentData.title"
    :description="componentData.text"
    :image="image"
  />
</template>

<script>
import { SfBanner } from "@storefront-ui/vue"
import config from "config"
import LinkMixin from "../../mixins/LinkMixin"

export default {
  components: {
    SfBanner
  },
  props: {
    componentData: {
      type: Object
    },
    componentType: {
      type: String
    }
  },
  computed: {
    image() {
      if (this.componentData.imageLinkType === "internalLink")
        return config.cms_peregrine.image_endpoint + this.componentData.image
      else
        return this.componentData.image
    },
    banner() {
      if (this.componentType === "bannerright")
        return "sf-banner--right m-banner"
      else
        return "m-banner";
    }
  },
  mixins: [LinkMixin]
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";
.m-banner {
  margin: var(--spacer-xl) 0;
  box-sizing: border-box;
}
</style>