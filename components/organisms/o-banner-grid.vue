<template>
  <SfBannerGrid :banner-grid="bannerGrid" class="banner-grid">
    <template v-for="(banner, bannerIndex) in banners" #[slotName(bannerIndex)]>
      <a v-if="banner.link" @click="link(banner)" :key="bannerIndex">
        <SfBanner
          :subtitle="banner.subtitle"
          :title="banner.title"
          :description="banner.text"
          :button-text="banner.buttontext"
          :image="image(banner.imageLinkType, banner.image)"
        />
      </a>
      <SfBanner
        v-else
        :key="bannerIndex"
        :subtitle="banner.subtitle"
        :title="banner.title"
        :description="banner.text"
        :image="image(banner.imageLinkType, banner.image)"
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
  mixins: [LinkMixin, imageMixin],
  methods: {
    /* The BannerGrid component has 4 Slots: banner-A, banner-B, banner-C, banner-D
      Currently the CMS is not returning these attribute, thus slotName method is implemented.
      After the implementation of https://app.clickup.com/t/3dqt60, we can remove this method.
    */
    slotName (bannerIndex) {
      let slot = '';
      switch (bannerIndex) {
        case 0:
          slot = 'banner-A';
          break;
        case 1:
          slot = 'banner-B';
          break;
        case 2:
          slot = 'banner-C';
          break;
        case 3:
          slot = 'banner-D';
          break;
      }
      return slot
    }
  }
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
</style>
