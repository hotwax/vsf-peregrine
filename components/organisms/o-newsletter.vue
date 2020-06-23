<template>
  <SfCallToAction
    class="o-newsletter"
    :title="componentData.title"
    :description="componentData.text"
    :image="image"
  >
    <template #button>
      <SfButton @click="buttonlink(componentData)">
        {{ componentData.buttontext }}
      </SfButton>
    </template>
  </SfCallToAction>
</template>

<script>
import { SfCallToAction, SfButton } from '@storefront-ui/vue';
import config from 'config'
import LinkMixin from '../../mixins/LinkMixin'

export default {
  name: 'ONewsletter',
  components: {
    SfCallToAction,
    SfButton
  },
  props: {
    componentData: {
      type: Object
    }
  },
  computed: {
    image () {
      if (this.componentData.imageLinkType === 'internalLink') {
        return config.cms_peregrine.image_endpoint + this.componentData.image
      } else {
        return this.componentData.image
      }
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";
.o-newsletter {
  margin: var(--spacer-xl) 0;
  box-sizing: border-box;
  @include for-desktop {
    margin: calc(var(--spacer-2xl) * 2) 0;
  }
}
</style>
