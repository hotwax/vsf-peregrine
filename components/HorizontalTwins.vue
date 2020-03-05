<template>
  <no-ssr v-if="componentData">
    <section class="twins cl-white pointer">
      <div class="row">
        <div class="container col-sm-6 col-xs-6 cl-black" @click="link(componentData.data.cards.cards0) ">
          <div class="card-image" v-lazy:background-image="cards0.image">
            <div class="card-content">
              <h1 class="title" data-testid="cardTitle" v-html="cards0.title" />
              <button-full class="button uppercase" v-if="componentData.data.showbutton == 'true' " v-html="cards0.buttontext" />
            </div>
          </div>
        </div>
        <div class="container col-sm-6 col-xs-6 cl-black" @click="link(componentData.data.cards.cards1) ">
          <div class="card-image" v-lazy:background-image="cards1.image">
            <div class="card-content">
              <h1 class="title" data-testid="cardTitle" v-html="cards1.title" />
              <button-full class="button uppercase" v-if="componentData.data.showbutton == 'true' " v-html="cards1.buttontext" />
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
        'buttontext': this.componentData['data']['cards'][0]['buttontext']
      }
      return banner
    },
    cards1 () {
      let banner = {
        'image': this.componentData['data']['cards'][1]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][1]['image'] : this.componentData['data']['cards'][1]['image'],
        'title': this.componentData['data']['cards'][1]['title'],
        'buttontext': this.componentData['data']['cards'][1]['buttontext']
      }
      return banner
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
.container {
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 767px) {
    padding-left: 6px;
    padding-right: 6px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 14%;

    .title {
      font-family: 'Playfair Display';
      margin-bottom: 40px;
      margin-top: 124px;
      line-height: 77px;
      font-style: normal;
      font-weight: normal;
      color: #1D1F22;
      @media (max-width: 767px) {
        margin-top: 40px;
        line-height: 29px;
        font-size: 18px;
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

.card-image {
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
  .card-image {
    height: 472px;
  }
  .container {
    height: 472px;
  }
}
@media (max-width: 767px) {
  .twins {
    height: 198px;
  }
  .row {
    height: 198px;
  }
  .card-image {
    height: 198px;
  }
  .container {
    height: 198px;
  }
}
</style>
