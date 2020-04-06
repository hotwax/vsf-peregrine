<template>
  <section>
    <div class="container">
      Blogs: {{ this.$route.path }}
      <!-- <SimpleText :componentData="cmsBlogComponents" /> -->
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
  }
}
</script>
