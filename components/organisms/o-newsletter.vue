<template>
  <SfCallToAction
    :title="componentData.title"
    :description="componentData.text"
    :image="image(componentData.imageLinkType, componentData.image)"
  >
    <template #button>
      <SfButton @click="showNewsletterPopup">
        {{ componentData.buttontext }}
      </SfButton>
    </template>
  </SfCallToAction>
</template>

<script>
import { mapActions } from 'vuex';
import { SfCallToAction, SfButton } from '@storefront-ui/vue';
import LinkMixin from '../../mixins/LinkMixin'
import imageMixin from '../../mixins/imageMixin'
import { ModalList } from 'theme/store/ui/modals'

export default {
  name: 'ONewsletter',
  components: {
    SfCallToAction,
    SfButton
  },
  props: {
    componentData: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions('ui', {
      openModal: 'openModal'
    }),
    showNewsletterPopup () {
      this.openModal({ name: ModalList.Newsletter })
    }
  },
  mixins: [LinkMixin, imageMixin]
}
</script>
