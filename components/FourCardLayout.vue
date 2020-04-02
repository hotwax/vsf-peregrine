<template>
  <no-ssr v-if="componentData">
    <section class="container my30 vertical-set px15 cl-white pointer">
      <div class="row ">
        <div class="col-sm-4 vertical-tall pr20" @click="link(cards0)">
          <div class="tall-container cl-black" v-lazy:background-image="cards0.imageLinkType === 'internalLink' ? config.cms_peregrine.image_endpoint + cards0.image : cards0.image">
            <div class="card-content">
              <h1 class="title h1" data-testid="cardTitle" v-html="cards0.title" />
              <p class="subtitle mb0 serif h3 fs-medium" data-testid="mainSliderSubtitle" v-html="cards0.text" />
              <div class="button-link" @click.stop="buttonlink(cards0)">
                <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards0.buttonlink != '')" v-html="cards0.buttontext" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="row pl20 mr0">
            <div class="col-sm-6 vertical-short pl0 pr20" @click="link(cards1)">
              <div class="short-container cl-black" v-lazy:background-image="cards1.imageLinkType === 'internalLink' ? config.cms_peregrine.image_endpoint + cards1.image : cards1.image">
                <div class="card-content">
                  <h1 class="title h1" data-testid="cardTitle" v-html="cards1.title" />
                  <div class="button-link" @click.stop="buttonlink(cards1)">
                    <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards1.buttonlink != '')" v-html="cards1.buttontext" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 vertical-short pr0 pl20" @click="link(cards2)">
              <div class="short-container cl-black" v-lazy:background-image="cards2.imageLinkType === 'internalLink' ? config.cms_peregrine.image_endpoint + cards2.image : cards2.image">
                <div class="card-content">
                  <h1 class="title h1" data-testid="cardTitle" v-html="cards2.title" />
                  <div class="button-link" @click.stop="buttonlink(cards2)">
                    <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards2.buttonlink != '')" v-html="cards2.buttontext" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row vertical-banner">
            <div class="col-sm-12 vertical-support pl20" @click="link(cards3)">
              <div class="support-container cl-black pr0" v-lazy:background-image="cards3.imageLinkType === 'internalLink' ? config.cms_peregrine.image_endpoint + cards3.image : cards3.image">
                <div class="card-content">
                  <h1 class="title h1" data-testid="cardTitle" v-html="cards3.title" />
                  <div class="button-link" @click.stop="buttonlink(cards3)">
                    <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards3.buttonlink != '')" v-html="cards3.buttontext" />
                  </div>
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
import config from 'config'
import NoSSR from 'vue-no-ssr'
import LinkMixin from '../mixins/LinkMixin'
import ButtonFull from 'theme/components/theme/ButtonFull.vue'

export default {
  data () {
    return {
      'config': config
    }
  },
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
      return this.componentData['data']['cards'][0]
    },
    cards1 () {
      return this.componentData['data']['cards'][1]
    },
    cards2 () {
      return this.componentData['data']['cards'][2]
    },
    cards3 () {
      return this.componentData['data']['cards'][3]
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
.vertical-set {
  height: 1000px;

  @media (max-width: 767px) {
    display: none;
  }
}

.vertical-tall {
  height: 1000px;
}

.vertical-support {
  height: 250px;

  .support-container {
    height: 250px;
    background-position: bottom right;
    background-size: cover;
    background-repeat: no-repeat;

    .title {
      max-width: none;
      height: 61px;
    }
  }
  .card-content {
    padding-top: 70px;
    margin-left: 5%;
  }
}

.vertical-banner {
  margin-top: 40px;
}

.vertical-short {
height: 710px;

  .short-container {
    height: 710px;
    background-position: bottom right;
    background-size: 378px 710px;
    background-repeat: no-repeat;

    .card-content {
      margin-left: 11%;
      padding-top: 130px;
    }
  }
}

.tall-container {
  height: 1000px;
  background-size: 378px 1000px;
  background-position: bottom right;
  background-repeat: no-repeat;

  .card-content {
    margin-left: 18%;
    padding-top: 130px;
  }

  .title {
    margin-bottom: 60px;
  }
}

.title {
  font-family: 'Playfair Display';
  font-weight: normal;
  font-style: normal;
  line-height: 77px;
  margin-top: 0px;
  max-width: 250px;
  @media (max-width: 991px)
  {
    font-size: 36px;
  }
}

.button {
  background-color: #1D1F22;
  padding: 16px 0px;
  max-width: 195px;
  min-width: 0px;
  line-height: 19px;
  font-style: normal;
  font-family: 'Playfair Display';
  font-weight: bold;
  font-size: 14px;
}

.subtitle {
  max-width: 284px;
  font-size: 18px;
  line-height: 29px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Playfair Display';
  margin-bottom: 40px;
  margin-top: 0px;
  @media (max-width: 991px)
  {
    font-size: 16px;
  }
}
</style>
