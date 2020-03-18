<template>
  <no-ssr v-if="componentData">
    <section class="app-store w-100 cl-white pointer" @click="link(componentData.data)">
      <div class="container w-100 h-100 cl-black" v-lazy:background-image="appstore.image">
        <div class="app-store-content">
          <h1 class="title h2" data-testid="mainSliderTitle" v-html="appstore.title" />
          <div class="links">
            <a :href="appstore.applestoreurl" class="store-link">
              <img class="apple-store-image mr20" :src="appstore.appleStoreImage">
            </a>
            <a :href="appstore.playstoreurl" class="store-link">
              <img class="play-store-image" :src="appstore.playStoreImage">
            </a>
          </div>
        </div>
      </div>
    </section>
  </no-ssr>
</template>

<script>
import config from 'config'
import NoSSR from 'vue-no-ssr'
import LinkMixin from '../mixins/LinkMixin'

export default {
  components: {
    'no-ssr': NoSSR
  },
  props: {
    componentData: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  computed: {
    appstore () {
      let appstore = {
        'image': this.componentData['data']['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['image'] : this.componentData['data']['image'],
        'title': this.componentData['data']['title'],
        'appleStoreImage': config.cms_peregrine.image_endpoint + this.componentData['data']['appleStoreImage'],
        'playStoreImage': config.cms_peregrine.image_endpoint + this.componentData['data']['playStoreImage'],
        'applestoreurl': this.componentData['data']['applestoreurl'],
        'playstoreurl': this.componentData['data']['playstoreurl']
      }
      return appstore
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
.app-store {
color: #1D1F22;
@media (max-width: 767px)
{
  display: none;
}
  .app-store-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 11%;
    margin-right: 47%;
    height: 420px;

    .title {
      font-family: 'Playfair Display';
      font-weight: normal;
      font-style: normal;
      position: static;
      margin: 87px 0px 40px 0px;
      line-height: 48px;
      color: #1D1F22;
    }

    .apple-store-image, .play-store-image {
      height: 56px;
      width: 170px;
    }

    .store-link {
      position: unset;
    }
  }
}

.app-store {
  height: 420px;
}
.container {
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
}
.row {
  height: 420px;
}
</style>
