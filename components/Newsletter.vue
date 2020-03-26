<template>
  <no-ssr v-if="componentData">
    <section class="container my30 px15 cl-white">
      <div class="newsletter">
        <div class="newsletter-container" v-lazy:background-image="newsletter.image">
          <div class="row m0">
            <div class="newsletter-content col-md-8 col-xs-12">
              <h1 class="title h2" data-testid="newsletterTitle" v-html="newsletter.title" />
              <p class="subtitle mb0 h4 fs-medium" data-testid="newsletterSubtitle" v-html="newsletter.subtitle" />
            </div>
            <div class="btn-container col-md-4 col-xs-12" @click="buttonlink(componentData.data)">
              <button-full class="button uppercase h5" v-html="newsletter.buttontext" />
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
    newsletter () {
      let newsletter = {
        'image': this.componentData['data']['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + this.componentData['data']['image'] : this.componentData['data']['image'],
        'title': this.componentData['data']['title'],
        'subtitle': this.componentData['data']['text'],
        'buttontext': this.componentData['data']['buttontext']
      }
      return newsletter
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
.newsletter {
  height: 202px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #000000;
  @media (max-width: 767px) {
    height: 103px;
  }
}
.newsletter-container {
  height: 202px;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    height: 103px;
  }
}
.newsletter-content {
  padding-top: 54px;
  padding-left: 11%;
  padding-right: 0px;
  font-family: "Playfair Display";
  @media (max-width: 767px) {
    padding: 0px;
    padding-top: 19px;
  }
  .title {
    margin: 0px;
    margin-bottom: 20px;
    line-height: 48px;
    font-style: normal;
    font-weight: normal;
    @media (max-width: 767px) {
      margin-bottom: 11px;
      line-height: 21px;
      font-size: 16px;
      text-align: center;
    }
  }

  .subtitle {
    max-width: 568px;
    margin-top: 0px;
    line-height: 29px;
    font-style: normal;
    font-weight: normal;
    @media (max-width: 767px) {
      display: none;
    }
  }
}
.btn-container {
  padding-left: 0px;
  padding-right: 0px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    float: left;
    margin-left: 20%;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: bold;
    margin-top: 93px;
    padding: 16px 40px;
    background: #5ECE7B;
    max-width: fit-content;
    min-width: 0px;
    line-height: 19px;

    @media (max-width: 767px) {
      float: unset;
      margin: 0px;
      padding: 7px 31px;
      font-size: 14px;
    }
  }
}
</style>
