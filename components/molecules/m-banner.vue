<template>
  <a v-if="componentData.link" @click="link(componentData)">
    <SfBanner
      :class="banner"
      :title="componentData.title"
      :description="componentData.text"
      :button-text="componentData.buttontext"
      :image="image(componentData.imageLinkType, componentData.image)"
    />
  </a>
  <SfBanner
    v-else
    :class="banner"
    :title="componentData.title"
    :description="componentData.text"
    :image="image(componentData.imageLinkType, componentData.image)"
  />
</template>

<script>
import { SfBanner } from '@storefront-ui/vue'
import config from 'config'
import LinkMixin from '../../mixins/LinkMixin'
import imageMixin from '../../mixins/imageMixin'

export default {
  components: {
    SfBanner
  },
  props: {
    componentData: {
      required: true,
      type: Object
    },
    componentType: {
      required: true,
      type: String
    }
  },
  computed: {
    banner () {
      if (this.componentType === 'bannerright') { return 'sf-banner--right m-banner' } else { return 'm-banner' }
    }
  },
  mixins: [LinkMixin, imageMixin]
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";
.m-banner {
  margin: var(--spacer-xl) 0;
  box-sizing: border-box;
}
</style>
