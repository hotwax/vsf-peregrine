<template>
  <SfCallToAction
    class="o-newsletter"
    :title="componentData.title"
    :description="componentData.text"
    :image="image(componentData.imageLinkType, componentData.image)"
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
import LinkMixin from '../../mixins/LinkMixin'
import imageMixin from '../../mixins/imageMixin'

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
  mixins: [LinkMixin, imageMixin]
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
