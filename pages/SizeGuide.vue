<template>
  <modal name="modal-sizeguide" :width="620">
    <div slot="header">
      {{ $t('Size Guide') }}
    </div>
    <div slot="content" class="container">
      <ComponentRenderer :cmsObject="cmsComponents"/>
    </div>
  </modal>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Modal from 'theme/components/core/Modal'
import SimpleText from '../components/SimpleText'
import ComponentRenderer from '../components/ComponentRenderer'

export default {
  name: 'SizeGuide',
  computed: {
    ...mapState({
      activeElem: state => state.ui.authElem
    }),
     ...mapGetters({
      cmsComponents: 'cmsstore/getComponents'
    })
  },
  components: {
    Modal,
    SimpleText,
    ComponentRenderer
  },
  created () {
    this.$store.dispatch('cmsstore/getCmsComponents', {title: 'size-guide'})
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
