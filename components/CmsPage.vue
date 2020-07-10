<template>
  <div v-if="cmsObject">
    <div v-for="(component, index) in cmsObject.components" :key="index">
      <component
        :is="cmsComponent[component.type]"
        :component-data="component.data"
        :component-type="component.type"
      />
    </div>
  </div>
</template>

<script>
import i18n from '@vue-storefront/i18n';
const TextBlock = () => import('./organisms/o-text-block')
const Newsletter = () => import('./organisms/o-newsletter')
const Banner = () => import('./molecules/m-banner')
const BannerGrid = () => import('./organisms/o-banner-grid')
const BannerGridT = () => import('./organisms/o-banner-grid-t')
const ImagesGrid = () => import('./organisms/o-images-grid')
const ProductCarousel = () => import('./organisms/o-product-carousel')

export default {
  props: {
    cmsObject: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      cmsComponent: {
        'richtext': TextBlock,
        'newsletter': Newsletter,
        'bannerleft': Banner,
        'bannerright': Banner,
        'verticalbannergrid': BannerGrid,
        'verticalset': BannerGrid,
        'tgrid': BannerGridT,
        'cards': ImagesGrid,
        'bestseller': ProductCarousel,
        'newarrivalproducts': ProductCarousel
      }
    };
  }
};
</script>
