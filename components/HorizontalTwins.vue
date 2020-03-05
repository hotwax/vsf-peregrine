<template>
  <no-ssr v-if="componentData">
    <section class="twins w-100 h-100 cl-white pointer">
      <div class="row m0">
        <div class="container w-50 cl-black p0" @click="link(componentData.data.cards.cards0) ">
          <div class="card-image" v-lazy:background-image="cards0.image">
            <div class="card-content">
              <h1 class="title" data-testid="cardTitle" v-html="cards0.title" />
              <button-full class="button uppercase" v-if="componentData.data.showbutton == 'true' " v-html="cards0.buttontext" />
            </div>
          </div>
        </div>
        <div class="container w-50 cl-black p0" @click="link(componentData.data.cards.cards1) ">
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
  width: 590px;
  margin-left: 30px;
  margin-right: 30px;

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 80px;
    @media (max-width: 767px) {
      align-items: center;
    }

    .title {
      font-family: 'Playfair Display';
      margin-bottom: 40px;
      margin-top: 124px;
      line-height: 77px;
      font-style: normal;
      font-weight: normal;
      color: #1D1F22;
      @media (max-width: 767px) {
        background-color: rgba(255,255,255,0.4);
        padding: 0.5rem;
        line-height: 2.4rem;
        font-size: 36px;
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
    }
  }
}

.card-image {
  height: 472px;
  background-size: cover;
}
.twins {
  height: 472px;
}
.row {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 75em) {
  .twins {
    height: 472px;
  }
  .title {
    font-size: 50px;
  }
  .row {
    height: 472px;
  }
}
@media (max-width: 64em) {
  .twins {
    height: 359px;
  }
  .title {
    font-size: 48px;
  }
  .row {
    height: 359px;
  }
}
</style>
