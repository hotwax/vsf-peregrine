<template>
  <no-ssr v-if="componentData">
    <section class="container vertical-grid px15 cl-white pointer">
      <div class="row">
        <div class="col-sm-3 vertical-thin pr20" @click="link(componentData.data.cards.cards0)">
          <div class="thin-container cl-black" v-lazy:background-image="cards0.image">
            <div class="card-content">
              <h1 class="title h1" data-testid="cardTitle" v-html="cards0.title" />
              <p class="subtitle mb0 serif h3 fs-medium" data-testid="mainSliderSubtitle" v-html="cards0.subtitle" />
              <button-full class="button uppercase" v-if="componentData.data.showbutton == 'true' " v-html="cards0.buttontext" />
            </div>
          </div>
        </div>
        <div class="col-sm-6 vertical-wide pl20 pr20">
          <div class="wide-container cl-black" v-lazy:background-image="cards1.image">
            <div class="card-content">
              <h1 class="title h1" data-testid="cardTitle" v-html="cards1.title" />
              <p class="subtitle mb0 serif h3 fs-medium" data-testid="mainSliderSubtitle" v-html="cards1.subtitle" />
              <button-full class="button uppercase" v-if="componentData.data.showbutton == 'true' " v-html="cards1.buttontext" />
            </div>
          </div>
        </div>
        <div class="col-sm-3 vertical-twins pl20">
          <div class="row m0 mb40">
            <div class="twin-container-top cl-black" v-lazy:background-image="cards2.image">
              <div class="card-content">
                <h1 class="title h1" data-testid="cardTitle" v-html="cards2.title" />
              </div>
            </div>
          </div>
          <div class="row m0">
            <div class="twin-container-bottom cl-black" v-lazy:background-image="cards3.image">
              <div class="card-content">
                <h1 class="title h1" data-testid="cardTitle" v-html="cards3.title" />
              </div>
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
import ButtonFull from 'theme/components/theme/ButtonFull.vue'

export default {
  components: {
    'no-ssr': NoSSR,
    ButtonFull
  },
  props: {
    componentData: {
      type: Object
    }
  },
  computed: {
    cards0 () {
      let banner = {
        'image': this.componentData['data']['cards'][0]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][0]['image'] : this.componentData['data']['cards'][0]['image'],
        'title': this.componentData['data']['cards'][0]['title'],
        'subtitle': this.componentData['data']['cards'][0]['text'],
        'buttontext': this.componentData['data']['cards'][0]['buttontext']
      }
      return banner
    },
    cards1 () {
      let banner = {
        'image': this.componentData['data']['cards'][1]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][1]['image'] : this.componentData['data']['cards'][1]['image'],
        'title': this.componentData['data']['cards'][1]['title'],
        'subtitle': this.componentData['data']['cards'][1]['text'],
        'buttontext': this.componentData['data']['cards'][1]['buttontext']
      }
      return banner
    },
    cards2 () {
      let banner = {
        'image': this.componentData['data']['cards'][2]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][2]['image'] : this.componentData['data']['cards'][2]['image'],
        'title': this.componentData['data']['cards'][2]['title']
      }
      return banner
    },
    cards3 () {
      let banner = {
        'image': this.componentData['data']['cards'][3]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][3]['image'] : this.componentData['data']['cards'][3]['image'],
        'title': this.componentData['data']['cards'][3]['title']
      }
      return banner
    }
  }
}
</script>

<style lang="scss" scoped>
.vertical-grid {
  height: 660px;
  @media (max-width: 767px) {
    display: none;
  }
}

.vertical-thin {
  height: 660px;

  .thin-container {
    height: 660px;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  }

  .card-content {
    margin-left: 12%;
    max-width: 203px;
  }
}

.vertical-wide {
  height: 660px;

  .wide-container {
    height: 660px;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }

  .card-content {
    margin-left: 8%;
    max-width: 298px;
  }
}

.vertical-twins {
  height: 660px;

  .twin-container-top {
    height: 310px;
    width: 100%;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
  }

  .twin-container-bottom {
    height: 310px;
    width: 100%;
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
  }

  .card-content {
    margin-left: 12%;
  }
}

.title {
  font-size: 36px;
  line-height: 58px;
  font-weight: normal;
  font-style: normal;
  font-family: 'Playfair Display';
  margin-top: 0px;
  margin-bottom: 0px;
}

.subtitle {
  font-size: 18px;
  line-height: 29px;
  font-weight: normal;
  font-style: normal;
  font-family: 'Playfair Display';
  margin-top: 40px;
  margin-bottom: 40px;
}

.button {
  background-color: #1D1F22;
  padding: 16px 0px;
  max-width: 195px;
  min-width: fit-content;
  line-height: 19px;
  font-style: normal;
  font-family: 'Playfair Display';
  font-weight: bold;
  font-size: 14px;
}

.card-content {
  padding-top: 111px;
}
</style>
