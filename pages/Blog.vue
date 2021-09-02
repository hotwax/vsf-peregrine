<template>
  <section class="blog">
    <div v-if="cmsBlogComponents">
      <div class="bg-cl-secondary py35">
        <div class="row">
          <div class="container">
            <div class="blog-image" v-if="cmsBlogComponents.components[1]">
              <img class="profile-image" :src="config.peregrine_config.image_endpoint + cmsBlogComponents.components[1]['data']['image']">
            </div>
            <div class="blog-content">
              <MRichText :componentData="cmsBlogComponents.components[0]" />
              <MSimpleText class="text-content" :componentData="cmsBlogComponents.components[2]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MSimpleText from '../components/molecules/m-simple-text.vue'
import MRichText from '../components/molecules/m-rich-text.vue'
import { mapGetters } from 'vuex'
import config from 'config'
export default {
  components: {
    MSimpleText,
    MRichText
  },
  data () {
    return {
      'config': config
    }
  },
  computed: {
    ...mapGetters({
      cmsBlogComponents: 'cmspage/getBlogComponents'
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('cmspage/getCmsBlogComponent', { id: to.params.id })
    next()
  }
}
</script>

<style lang="scss" scoped>
.blog
{
  .blog-image
  {
    float: left;
    height: 100px;
    width: 100px;
    background-position:bottom left;
    background-size: contain;
    padding: 10px 30px 10px 8px;
   .profile-image
    {
      height: 100px;
      width: 100px;
    }
  }
  .row
  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  /deep/ .fs-big
  {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .text-content {
    font-size: 20px;
    font-weight: normal;
  }
}
</style>