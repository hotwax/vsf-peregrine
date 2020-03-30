<template>
  <no-ssr v-if="componentData">
    <section class="head-image my30 w-100 bg-cl-th-accent cl-white pointer" @click="link(componentData.data)">
      <div class="container w-100 h-100 cl-black" v-lazy:background-image="componentData['data'].imageLinkType === 'internalLink' ? config.cms_peregrine.image_endpoint + componentData['data']['image'] : componentData['data']['image']">
        <div class="head-image-content">
          <h1 class="title" data-testid="mainSliderTitle" v-html="componentData['data']['title']" />
          <p
            class="subtitle mb0 serif h3 fs-medium"
            data-testid="mainSliderSubtitle" v-html="componentData['data']['text']"
          />
          <div class="button" @click.stop="buttonlink(componentData.data)">
            <button-full v-if="(componentData.data.showbutton == 'true') && (componentData.data.buttonlink !== '')" class="button-content" v-html="componentData['data']['buttontext']" />
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
      config: config
    }
  },
  mixins: [LinkMixin]
}
</script>

<style lang="scss" scoped>
.head-image {
@media (max-width: 767px)
{
  display: none;
}
  .head-image-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 11.29%;
    height: 100%;
    @media (max-width: 767px) {
      margin-left: 0%;
      align-items: center;
    }

    .title {
      font-family: 'Playfair Display';
      font-weight: normal;
      font-style: normal;
      position: static;
      margin: 102px 0px 0px 0px;
      line-height: 77px;
      height: 57px;
      color: #1D1F22;
      @media (max-width: 767px) {
        background-color: rgba(255,255,255,0.4);
        padding: 0.5rem;
        line-height: 2.4rem;
        font-size: 36px;
      }
    }

    .subtitle {
      max-width: 555px;
      font-family: 'Playfair Display';
      line-height: 29px;
      margin-top: 40px;
      min-height: 57px;
      color: #1D1F22;
      @media (max-width: 767px) {
        background-color: rgba(255,255,255,0.4);
        padding: 0.5rem;
      }
    }

    .button {
      margin-top: 20px;
      .button-content {
        height: 51px;
        width: 195px;
        background-color: #1D1F22;
        padding: 16px 0px;
        font-family: 'Playfair Display';
        font-size: 14px;
        line-height: 19px;
        text-transform: uppercase;
        font-weight: bold;
        font-style: normal;
      }
    }
  }
}

.head-image {
  height: 400px;
}
.container {
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
}
.row {
  height: 400px;
}
@media (max-width: 75em) {
  .head-image {
    height: 400px;
  }
  .title {
    font-size: 50px;
  }
  .subtitle {
    font-size: 20px;
  }
  .row {
    height: 400px;
  }
}
</style>
