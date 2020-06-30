<template>
  <SfCallToAction
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
