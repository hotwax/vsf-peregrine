<template>
  <no-ssr>
    <section class="blog">
      <div v-if="cmsBlogComponents">
        <div v-for="(component, index) in cmsBlogComponents.components" :key="index">
          <div class="bg-cl-secondary py35">
            <div class="row">
              <div class="container">
                <div class="blog-image">
                  <img class="profile-image" :src="config.cms_peregrine.image_endpoint + component['data']['image']">
                </div>
                <div class="blog-content">
                  <RichText :componentData="component" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import SimpleText from '../components/SimpleText'
import RichText from '../components/RichText'
import { mapGetters } from 'vuex'
import config from 'config'

export default {
  components: {
    RichText,
    'no-ssr': NoSSR
  },
  data () {
    return {
      'config': config
    }
  },
  computed: {
    ...mapGetters({
      cmsBlogComponents: 'cmsstore/getBlogComponents'
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('cmsstore/getCmsBlogComponent', { id: to.params.id })
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
}
</style>
