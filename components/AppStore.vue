<template>
  <no-ssr v-if="componentData">
    <section class="container app-store my30 cl-white">
      <div class="container w-100 h-100 cl-black" v-lazy:background-image="componentData['data']['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + componentData['data']['image'] : componentData['data']['image']">
        <div class="app-store-content">
          <h1 class="title h2" data-testid="mainSliderTitle" v-html="componentData['data']['title']" />
          <div class="links">
            <a :href="componentData['data']['applestoreurl']" class="store-link">
              <img class="apple-store-image mr20" :src="config.cms_peregrine.image_endpoint + componentData['data']['appleStoreImage']">
            </a>
            <a :href="componentData['data']['playstoreurl']" class="store-link">
              <img class="play-store-image" :src="config.cms_peregrine.image_endpoint + componentData['data']['playStoreImage']">
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
      config: config
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
