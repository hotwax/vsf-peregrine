<template>
  <div id="static" class="main-content">
    <CmsPage :cms-object="cmsComponents" :cms-component="cmsComponent" v-if="cmsComponents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CmsPage from '../components/CmsPage';
import { currentStoreView } from '@vue-storefront/core/lib/multistore';

const TextBlock = () => import('../components/organisms/o-text-block')
const Newsletter = () => import('../components/organisms/o-newsletter')
const Banner = () => import('../components/molecules/m-banner')
const BannerGrid = () => import('../components/organisms/o-banner-grid')
const BannerGridT = () => import('../components/organisms/o-banner-grid-t')
const ImagesGrid = () => import('../components/organisms/o-images-grid')
const ProductCarousel = () => import('../components/organisms/o-product-carousel')
const Carousel = () => import('../components/organisms/o-carousel')

export default {
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
        'imagesgrid': ImagesGrid,
        'bestseller': ProductCarousel,
        'newarrivalproducts': ProductCarousel,
        'carousel': Carousel
      }
    };
  },
  components: {
    CmsPage
  },
  async beforeCreate () {
    let storeView = currentStoreView()
    let routeTo = this.$route.name

    if (this.$router.currentRoute.path === `/${storeView.storeCode}` || this.$router.currentRoute.path === `/${storeView.storeCode}/`) {
      await this.$store.dispatch('cmspage/getCmsComponents', { title: 'index', locale: storeView.i18n.defaultLocale })
    } else {
      if (routeTo.indexOf('it') === 0 || routeTo.indexOf('de') === 0) {
        routeTo = routeTo.substring(routeTo.indexOf('-') + 1)
      }
      if (this.$route.name === 'collections') {
        await this.$store.dispatch('cmspage/getCmsBlogComponents', { title: this.$route.params.id, locale: storeView.i18n.defaultLocale });
      } else if (this.$route.name === 'cms-page') {
        await this.$store.dispatch('cmspage/getCmsComponents', { title: this.$route.params.slug, locale: storeView.i18n.defaultLocale });
      } else {
        await this.$store.dispatch('cmspage/getCmsComponents', { title: routeTo, locale: storeView.i18n.defaultLocale })
      }
    }
  },
  metaInfo () {
    return {
      title: this.$route.meta.title,
      meta: this.$route.meta.description
        ? [{ vmid: 'description', description: this.$route.meta.description }]
        : []
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
      cmsComponents: 'cmspage/getComponents'
    })
  },
  watch: {
    isLoggedIn () {
      const redirectObj = localStorage.getItem('redirect');
      if (redirectObj) this.$router.push(redirectObj);
      localStorage.removeItem('redirect');
    }
  },
  mounted () {
    if (!this.isLoggedIn && localStorage.getItem('redirect')) { this.$bus.$emit('modal-show', 'modal-signup'); }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

#static {
  box-sizing: border-box;
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    margin: 0 auto;
  }
  --content-pages-height: auto;
  ::v-deep {
    .sf-content-pages__content,
    .sf-content-pages__sidebar {
      height: min-content;
    }
  }
}
</style>
