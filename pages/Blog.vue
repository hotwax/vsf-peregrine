<template>
  <section>
    <div v-if="cmsBlogComponents">
      <div class="container">
        Blogs: {{ this.$route.path }}
        <SimpleText :componentData="cmsBlogComponents" />
      </div>
    </div>
  </section>
</template>

<script>
import SimpleText from '../components/SimpleText'
import { mapGetters } from 'vuex'
import config from 'config'

export default {
  components: {
    SimpleText
  },
  computed: {
    ...mapGetters({
      cmsBlogComponents: 'cmsstore/getBlogComponents'
    })
  }
}
</script>
