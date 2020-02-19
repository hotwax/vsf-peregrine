<template>
  <no-ssr v-if="componentData">
    <section class="offers container my30 px15 cl-black">
      <div class="row">
        <div
          class="offer-container col-xs-12 col-sm-6 pb15 pointer"
          @click="link(componentData.data.cards.cards0)"
        >
          <div
            class="offer"
            v-lazy:background-image="main_banner.image"
          >
            <h2 class="title m0 h1">
              {{ main_banner.title }}
            </h2>
            <p class="subtitle m0 serif h3 uppercase" v-html="main_banner.subtitle">
              {{ main_banner.subtitle }}
            </p>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6">
          <div
            class="offer-container pb15 pointer"
            @click="link(componentData.data.cards.cards1)"
          >
            <div
              class="offer offer-small border-box p5 flex bg-cl-th-accent"
              v-lazy:background-image="small_banner1.image"
            >
              <h2 class="title m0 h1">
                {{ small_banner1.title }}
              </h2>
              <p class="subtitle m0 serif h3 uppercase" v-html="small_banner1.subtitle">
                {{ small_banner1.subtitle }}
              </p>
            </div>
          </div>
          <div
            class="offer-container pb15 pointer"
            @click="link(componentData.data.cards.cards2)"
          >
            <div
              class="offer offer-small border-box p5 flex bg-cl-th-accent"
              v-lazy:background-image="small_banner2.image"
            >
              <h2 class="title m0 h1">
                {{ small_banner2.title }}
              </h2>
              <p class="subtitle m0 serif h3 uppercase" v-html="small_banner2.subtitle">
                {{ small_banner2.subtitle }}
              </p>
            </div>
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
  name: 'PromotedOffers',
  components: {
    'no-ssr': NoSSR
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    componentData: {
      type: Object
    }
  },
  mixins: [LinkMixin],
  computed: {
    main_banner () {
      let banner = {
        'image': this.componentData['data']['cards'][0]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][0]['image'] : this.componentData['data']['cards'][0]['image'],
        'title': this.componentData['data']['cards'][0]['title'],
        'subtitle': this.componentData['data']['cards'][0]['text']
      }
      return banner
    },
    small_banner1 () {
      let banner = {
        'image': this.componentData['data']['cards'][1]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][1]['image'] : this.componentData['data']['cards'][1]['image'],
        'title': this.componentData['data']['cards'][1]['title'],
        'subtitle': this.componentData['data']['cards'][1]['text']
      }
      return banner
    },
    small_banner2 () {
      let banner = {
        'image': this.componentData['data']['cards'][2]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][2]['image'] : this.componentData['data']['cards'][2]['image'],
        'title': this.componentData['data']['cards'][2]['title'],
        'subtitle': this.componentData['data']['cards'][2]['text']
      }
      return banner
    }
  }
}
</script>

<style lang="scss" scoped>
  .offer-container {
    &:last-child {
      padding-bottom: 0;
    }
  }
  .offer {
    height: 735px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
    transition: 0.3s all;

    &:hover {
      opacity: 0.9;
    }

    @media (max-width: 767px) {
      height: 200px;
    }

    .title {
      text-align: center;
      margin-top: 2rem;
      @media (max-width: 767px) {
        background-color: rgba(255,255,255,0.4);
        padding: 0.5rem;
        line-height: 2.4rem;
      }
    }

    .subtitle {
      font-family: 'Roboto', sans-serif;
      @media (max-width: 767px) {
        background-color: rgba(255,255,255,0.4);
        padding: 0.5rem;
      }
    }
  }
  .offer-small {
    height: 360px;

    @media (max-width: 767px) {
      height: 200px;
    }
  }
  .offer-product {
    height: 330px;
    background-position: 50% 20%;

    @media (max-width: 767px) {
      height: 330px;
    }
  }
  .title {
    @media (max-width: 767px) {
      font-size: 36px;
    }
  }
  .subtitle {
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
</style>
