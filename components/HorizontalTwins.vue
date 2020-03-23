<template>
  <no-ssr v-if="componentData">
    <section class="twins container cl-white pointer">
      <div class="row px15">
        <div class="twin-container pr30 pl0 col-sm-6 col-xs-6 cl-black">
          <div class="card-image-left" v-lazy:background-image="cards0.image" @click="link(cards0.link)">
            <div class="card-content">
              <h1 class="title" data-testid="cardTitle" v-html="cards0.title" />
              <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true')" @click="link(cards0.buttonlink)" v-html="cards0.buttontext" />
            </div>
          </div>
        </div>
        <div class="twin-container pl30 pr0 col-sm-6 col-xs-6 cl-black">
          <div class="card-image-right" v-lazy:background-image="cards1.image" @click="link(cards1.link)">
            <div class="card-content">
              <h1 class="title" data-testid="cardTitle" v-html="cards1.title" />
              <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards1.buttonlink != '')" v-html="cards1.buttontext" />
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
  data () {
    return {
    }
  },
  computed: {
    cards0 () {
      let banner = {
        'image': this.componentData['data']['cards'][0]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][0]['image'] : this.componentData['data']['cards'][0]['image'],
        'title': this.componentData['data']['cards'][0]['title'],
        'link': this.componentData['data']['cards'][0],
        'buttonlink': this.componentData['data']['cards'][0]['buttonlink'],
        'buttontext': this.componentData['data']['cards'][0]['buttontext']
      }
      return banner
    },
    cards1 () {
      let banner = {
        'image': this.componentData['data']['cards'][1]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][1]['image'] : this.componentData['data']['cards'][1]['image'],
        'title': this.componentData['data']['cards'][1]['title'],
        'link': this.componentData['data']['cards'][1],
        'buttonlink': this.componentData['data']['cards'][1]['buttonlink'],
        'buttontext': this.componentData['data']['cards'][1]['buttontext']
      }
      return banner
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
.twin-container {
  @media (max-width: 767px) {
    padding-left: 6px;
    padding-right: 6px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 13%;
    @media (max-width: 767px) {
      margin-left: 12%;
    }

    .title {
      font-family: 'Playfair Display';
      margin-bottom: 40px;
      margin-top: 124px;
      line-height: 77px;
      font-style: normal;
      font-weight: normal;
      color: #1D1F22;
      margin-right: 17%;
      @media (max-width: 767px) {
        margin-top: 40px;
        line-height: 29px;
        font-size: 18px;
        margin-right: 18%;
      }
    }
    .button {
      height: 51px;
      background-color: #1D1F22;
      padding: 16px 69px;
      width: auto;
      min-width: 0px;
      font-family: 'Playfair Display';
      font-size: 14px;
      line-height: 19px;
      font-weight: bold;
      font-style: normal;
      @media (max-width: 767px)
      {
        display: none;
      }
    }
  }
}

.card-image-left, .card-image-right {
  height: 472px;
  background-size: cover;
  background-position: left center;
}
.twins {
  height: 472px;
  @media (max-width: 767px) {
    height: 198px;
  }
}

@media (max-width: 75em) {
  .twins {
    height: 472px;
  }
  .row {
    height: 472px;
  }
  .card-image-left, .card-image-right {
    height: 472px;
  }
  .twin-container {
    height: 472px;
  }
}
@media (max-width: 767px) {
  .twins {
    height: 198px;
  }
  .row {
    height: 198px;
    padding-left: 9px;
    padding-right: 9px;
  }
  .card-image-left {
    height: 198px;
    background-position: right;
  }
  .card-image-right {
    height: 198px;
    background-position: left;
  }
  .twin-container {
    height: 198px;
  }
}
</style>
