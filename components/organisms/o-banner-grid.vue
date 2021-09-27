<template>
  <SfBannerGrid :banner-grid="bannerGrid" class="banner-grid">
    <template v-for="(banner, bannerIndex) in banners" #[banner.slot]>
      <a v-if="banner.link" @click="link(banner)" :key="bannerIndex">
        <SfBanner
          :subtitle="banner.subtitle"
          :title="banner.title"
          :description="banner.text"
          :button-text="banner.buttontext"
          :image="image(banner.imageLinkType, banner.image)"
          :style="{ '--banner-title-color':  banner.textColor, '--banner-description-color':  banner.textColor, '--banner-subtitle-color':  banner.textColor}"
        />
      </a>
      <SfBanner
        v-else
        :key="bannerIndex"
        :subtitle="banner.subtitle"
        :title="banner.title"
        :description="banner.text"
        :image="image(banner.imageLinkType, banner.image)"
        :style="{ '--banner-title-color':  banner.textColor, '--banner-description-color':  banner.textColor, '--banner-subtitle-color':  banner.textColor}"
      />
    </template>
  </SfBannerGrid>
</template>

<script>
import { SfBannerGrid, SfBanner } from '@storefront-ui/vue';
import LinkMixin from '../../mixins/LinkMixin';
import imageMixin from '../../mixins/imageMixin';

export default {
  components: {
    SfBannerGrid,
    SfBanner
  },
  props: {
    componentData: {
      required: true,
      type: Object
    },
    componentType: {
      required: true,
      type: String
    }
  },
  computed: {
    banners () {
      return this.componentData.cards;
    },
    bannerGrid () {
      if (this.componentType === 'verticalbannergrid') { return 1 } else if (this.componentType === 'verticalset') { return 2 } return 1
    }
  },
  mixins: [LinkMixin, imageMixin]
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";
.banner-grid {
  margin: var(--spacer-base) 0;
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
  }
}
.sf-banner-grid.banner-grid .sf-banner-grid__row:first-child .sf-banner {
  background-position-y: bottom;
}
</style>
