<template>
  <modal name="modal-sizeguide" :width="620">
    <div slot="header">
      {{ $t('Size Guide') }}
    </div>
    <div slot="content" class="container">
      <CmsRenderer :cmsObject="cmsComponents"/>
    </div>
  </modal>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Modal from 'theme/components/core/Modal'
import SimpleText from '../components/SimpleText'
import CmsRenderer from '../components/CmsRenderer'

export default {
  name: 'SizeGuide',
  computed: {
    ...mapState({
      activeElem: state => state.ui.authElem
    }),
     ...mapGetters({
      cmsComponents: 'cmsPeregrine/getComponents'
    })
  },
  components: {
    Modal,
    SimpleText,
    CmsRenderer
  },
  created () {
    this.$store.dispatch('cmsPeregrine/getCmsComponents', {title: 'size-guide'})
  },
  methods: {
    close (e) {
      if (e) localStorage.removeItem('redirect')
      this.$bus.$emit('modal-hide', 'modal-sizeguide')
    }
  }
}
</script>

<style scoped>
    .modal {
        font-size: 18px;
    }
    .modal-content {
        max-height: 80%;
    }
</style>
