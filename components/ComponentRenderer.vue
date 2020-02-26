<template>
  <no-ssr>
    <div v-if="cmsObject">
      <div v-for="(component, index) in cmsObject.components" :key="index">
        <component v-bind:is="cmsComponent[component.type]" :componentData ="component" v-if="component.type !=='simpletext'" />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'

import i18n from '@vue-storefront/i18n'
const SimpleText = () => import('./SimpleText')
const RichText = () => import('./RichText')
const HeadImage = () => import('./HeadImage')
const BannerLeft = () => import('./BannerLeft')
const PromotedOffers = () => import('./PromotedOffers')
const MainSlider = () => import('./MainSlider')
const TileLinks = () => import('./TileLinks')
const NewArrivalProducts = () => import('./NewArrivalProduct')
const BestSeller = () => import('./BestSeller')

export default {
  components: {
    'no-ssr': NoSSR
  },
  computed: {
  },
  props: {
    cmsObject: {
      type: Object
    }
  },
  data () {
    return {
      comp: {},
      cmsComponent: {
        'simpletext': SimpleText,
        'richtext': RichText,
        'teaservertical': HeadImage,
        'bannerleft': BannerLeft,
        'cardthreeimages': PromotedOffers,
        'carousel': MainSlider,
        'cards': TileLinks,
        'newarrivalproducts': NewArrivalProducts,
        'bestseller': BestSeller
      }
    }
  },
  method: {
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$border-primary: color(primary, $colors-border);

.static-menu {
  ul {
    list-style: none;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $border-primary;
  }

  a:hover::after,
  .router-link-active::after {
    opacity: 0;
  }
}

.static-content {
  *:first-of-type {
    margin-top: 0;
  }
}
</style>
