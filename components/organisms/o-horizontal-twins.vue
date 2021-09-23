<template>
  <div class="banner-grid sf-banner-grid">
    <div class="sf-banner-grid__row">
      <div class="sf-banner-grid__col" v-for="banner in banners" :key="banner.title">
        <a v-if="banner.link" @click="link(banner)">
          <SfBanner
            subtitle="Subtitle"
            title="SHOP NOW"
            :description="banner.text"
            :button-text="banner.buttontext"
            :image="image(banner.imageLinkType, banner.image)"
          />
        </a>
        <SfBanner
          v-else
          subtitle="Subtitle"
          :title="'SHOP NOW'"
          :description="banner.text"
          :image="image(banner.imageLinkType, banner.image)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { SfBanner } from '@storefront-ui/vue';
import LinkMixin from '../../mixins/LinkMixin';
import imageMixin from '../../mixins/imageMixin';

export default {
  components: {
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
      console.log(this.componentType);
      return this.componentData.cards;
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

.sf-banner-grid {
  --banner-container-width: 50%;
  &__row {
    & + & {
      --banner-grid-row-margin: var(--spacer-sm) 0 0 0;
    }
    @media (min-width: $desktop-min) {
      & + & {
        --banner-grid-row-margin: var(--spacer-xl) 0 0 0;
      }
    }
  }
}
</style>
