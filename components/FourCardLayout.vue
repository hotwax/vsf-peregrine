<template>
  <no-ssr v-if="componentData">
    <section class="container vertical-set px15 cl-white pointer">
      <div class="row ">
        <div class="col-sm-4 vertical-tall pr20" @click="link(cards0.link)">
          <div class="tall-container cl-black" v-lazy:background-image="cards0.image">
            <div class="card-content">
              <h1 class="title h1" data-testid="cardTitle" v-html="cards0.title" />
              <p class="subtitle mb0 serif h3 fs-medium" data-testid="mainSliderSubtitle" v-html="cards0.subtitle" />
              <div class="button-link" @click.stop="buttonlink(cards0.link)">
                <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards0.link.buttonlink != '')" v-html="cards0.buttontext" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="row pl20 mr0">
            <div class="col-sm-6 vertical-short pl0 pr20" @click="link(cards1.link)">
              <div class="short-container cl-black" v-lazy:background-image="cards1.image">
                <div class="card-content">
                  <h1 class="title h1" data-testid="cardTitle" v-html="cards1.title" />
                  <div class="button-link" @click.stop="buttonlink(cards1.link)">
                    <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards1.link.buttonlink != '')" v-html="cards1.buttontext" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 vertical-short pr0 pl20" @click="link(cards2.link)">
              <div class="short-container cl-black" v-lazy:background-image="cards2.image">
                <div class="card-content">
                  <h1 class="title h1" data-testid="cardTitle" v-html="cards2.title" />
                  <div class="button-link" @click.stop="buttonlink(cards2.link)">
                    <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards2.link.buttonlink != '')" v-html="cards2.buttontext" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row vertical-banner">
            <div class="col-sm-12 vertical-support pl20" @click="link(cards3.link)">
              <div class="support-container cl-black pr0" v-lazy:background-image="cards3.image">
                <div class="card-content">
                  <h1 class="title h1" data-testid="cardTitle" v-html="cards3.title" />
                  <div class="button-link" @click.stop="buttonlink(cards3.link)">
                    <button-full class="button uppercase" v-if="(componentData.data.showbutton == 'true') && (cards3.link.buttonlink != '')" v-html="cards3.buttontext" />
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
        'link': this.compomemtData['data']['cards'][0],
        'buttontext': this.componentData['data']['cards'][0]['buttontext']
      }
      return banner
    },
    cards1 () {
      let banner = {
        'image': this.componentData['data']['cards'][1]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][1]['image'] : this.componentData['data']['cards'][1]['image'],
        'title': this.componentData['data']['cards'][1]['title'],
        'link': this.compomemtData['data']['cards'][1],
        'buttontext': this.componentData['data']['cards'][1]['buttontext']
      }
      return banner
    },
    cards2 () {
      let banner = {
        'image': this.componentData['data']['cards'][2]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][2]['image'] : this.componentData['data']['cards'][2]['image'],
        'title': this.componentData['data']['cards'][2]['title'],
        'link': this.compomemtData['data']['cards'][2],
        'buttontext': this.componentData['data']['cards'][2]['buttontext']
      }
      return banner
    },
    cards3 () {
      let banner = {
        'image': this.componentData['data']['cards'][3]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['cards'][3]['image'] : this.componentData['data']['cards'][3]['image'],
        'title': this.componentData['data']['cards'][3]['title'],
        'link': this.compomemtData['data']['cards'][3],
        'buttontext': this.componentData['data']['cards'][3]['buttontext']
      }
      return banner
    }
  }
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
