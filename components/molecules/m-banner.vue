<template>
  <a v-if="componentData.link" @click="link(componentData)">
    <SfBanner
      :class="banner"
      :title="componentData.title"
      :description="componentData.text"
      :button-text="componentData.buttontext"
      :image="image(componentData.imageLinkType, componentData.image)"
      :style="{ '--banner-title-color':  textColor, '--banner-description-color':  textColor}"
    />
  </a>
  <SfBanner
    v-else
    :class="banner"
    :title="componentData.title"
    :description="componentData.text"
    :image="image(componentData.imageLinkType, componentData.image)"
    :style="{ '--banner-title-color':  textColor, '--banner-description-color':  textColor}"
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
  data () {
    return {
      textColor: 'black'
    }
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
      if (this.componentData.textColor) {
        this.textColor = this.componentData.textColor;
      }
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
  background-position: center;

  @include for-desktop {
    height: 500px;
  }
}
</style>
