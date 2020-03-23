<template>
  <no-ssr v-if="componentData">
    <section class="tgrid my30 container h-100 px15 cl-white pointer" @click="link(componentData.data.cards.cards0)">
      <div class="tgrid-container w-100 cl-black" v-lazy:background-image="cards0.image">
        <div class="tgrid-content">
          <h1 class="title" data-testid="mainSliderTitle" v-html="cards0.title" />
          <p class="subtitle mb0 serif h3 fs-medium" data-testid="mainSliderSubtitle" v-html="cards0.subtitle" />
          <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards0.buttonlink != '')" v-html="cards0.buttontext" />
        </div>
      </div>
      <div class="row p0">
        <div class="twin-container pr30 col-sm-6 col-xs-6 cl-black " @click="link(componentData.data.cards.cards1) ">
          <div class="card-image w-100" v-lazy:background-image="cards1.image">
            <div class="card-content">
              <h1 class="title" data-testid="cardTitle" v-html="cards1.title" />
              <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards1.buttonlink != '')" v-html="cards1.buttontext" />
            </div>
          </div>
        </div>
        <div class="twin-container pl30 col-sm-6 col-xs-6 cl-black" @click="link(componentData.data.cards.cards2) ">
          <div class="card-image w-100" v-lazy:background-image="cards2.image">
            <div class="card-content">
              <h1 class="title" data-testid="cardTitle" v-html="cards2.title" />
              <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards2.buttonlink != '')" v-html="cards2.buttontext" />
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
        'subtitle': this.componentData['data']['cards'][0]['text'],
        'buttonlink': this.componentData['data']['cards'][0]['buttonlink'],
        'buttontext': this.componentData['data']['cards'][0]['buttontext']
      }
      return banner
    },
    cards1 () {
      let banner = {
        'image': this.componentData['data']['cards'][1]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][1]['image'] : this.componentData['data']['cards'][1]['image'],
        'title': this.componentData['data']['cards'][1]['title'],
        'buttonlink': this.componentData['data']['cards'][1]['buttonlink'],
        'buttontext': this.componentData['data']['cards'][1]['buttontext']
      }
      return banner
    },
    cards2 () {
      let banner = {
        'image': this.componentData['data']['cards'][2]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][2]['image'] : this.componentData['data']['cards'][2]['image'],
        'title': this.componentData['data']['cards'][2]['title'],
        'buttonlink': this.componentData['data']['cards'][2]['buttonlink'],
        'buttontext': this.componentData['data']['cards'][2]['buttontext']
      }
      return banner
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
.tgrid {
  @media (max-width: 767px)
  {
    height: 352px;
  }
  .tgrid-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 80px;;
    height: 400px;
    @media (max-width: 767px) {
      margin-left: 20px;
      height: 144px;
    }
    .title {
      font-family: 'Playfair Display';
      font-weight: normal;
      font-style: normal;
      position: static;
      margin: 95px 0px 0px 0px;
      line-height: 77px;
      min-height: 64px;
      color: #1D1F22;
      @media (max-width: 767px) {
        margin-top: 61px;
        line-height: 29px;
        font-size: 18px;
        min-height: 22px;
      }
    }
    .subtitle {
      max-width: 550px;
      font-family: 'Playfair Display';
      line-height: 29px;
      margin-top: 40px;
      min-height: 57px;
      color: #1D1F22;
      @media (max-width: 767px) {
        display: none;
      }
    }
    .button {
      margin-top: 20px;
      margin-bottom: auto;
      height: 51px;
      width: 195px;
      min-width: 0px;
      background-color: #1D1F22;
      padding: 16px 69px;
      font-family: 'Playfair Display';
      font-size: 14px;
      line-height: 19px;
      font-weight: bold;
      font-style: normal;
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
  .row {
    .twin-container {
      @media (max-width: 767px) {
        padding-left: 6px;
        padding-right: 6px;
        height: 198px;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 14%;
        @media (max-width: 767px) {
          margin-left: 20px;
        }
        .title {
          font-family: 'Playfair Display';
          margin-bottom: 41px;
          margin-top: 124px;
          line-height: 77px;
          font-style: normal;
          font-weight: normal;
          min-height: 57px;
          color: #1D1F22;
          @media (max-width: 767px) {
            margin-top: 40px;
            line-height: 29px;
            font-size: 18px;
            max-width: 110px;
          }
        }
        .button {
          height: 51px;
          background-color: #1D1F22;
          padding: 16px 69px;
          width: 195px;
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
  }
}
.tgrid {
  height: 925px;
  @media (max-width: 767px) {
    height: 352px;
  }
}
.tgrid-container {
  height: 414px;
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  @media (max-width: 767px)
  {
    height: 144px;
  }
}
.row {
  height: 472px;
  margin-top: 40px;
  @media (max-width: 767px) {
    margin-top: 10px;
    height: 198px;
  }
}

.card-image {
  height: 472px;
  background-size: cover;
  background-position: bottom left;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    height: 198px;
    background-position: left bottom;
  }
}
</style>
