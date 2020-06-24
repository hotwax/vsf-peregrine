<template>
  <SfBannerGrid :banner-grid="1" class="banner-grid">
    <template v-for="(banner, bannerIndex) in banners" #[slotName(bannerIndex)]>
      <a v-if="banner.link" @click="link(banner)">
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
        :subtitle="banner.subtitle"
        :title="banner.title"
        :description="banner.text"
        :image="image(banner.imageLinkType, banner.image)"
      />
    </template>
  </SfBannerGrid>
</template>

<script>
import { SfBannerGrid, SfBanner } from "@storefront-ui/vue";
import LinkMixin from "../../mixins/LinkMixin";
import imageMixin from "../../mixins/imageMixin";

export default {
  components: {
    SfBannerGrid,
    SfBanner
  },
  props: {
    componentData: {
      type: Object
    }
  },
  computed: {
    banners() {
      return this.componentData.cards;
    }
  },
  mixins: [LinkMixin, imageMixin],
  methods: {
    /* The BannerGrid component has 4 Slots: banner-A, banner-B, banner-C, banner-D
      Currently the CMS is not returning these attribute, thus slotName method is implemented.
      After the implementation of https://app.clickup.com/t/3dqt60, we can remove this method.
    */
    slotName(bannerIndex) {
      switch (bannerIndex) {
        case 0:
          return "banner-A";
          break;
        case 1:
          return "banner-B";
          break;
        case 2:
          return "banner-C";
          break;
        case 3:
          return "banner-D";
          break;
      }
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