<template>
  <div class="banner-grid sf-banner-grid">
    <div class="sf-banner-grid__row">
      <div class="sf-banner-grid__col">
        <a v-if="banners[0].link" @click="link(banners[0])">
          <SfBanner
            :subtitle="banners[0].subtitle"
            :title="banners[0].title"
            :description="banners[0].text"
            :button-text="banners[0].buttontext"
            :image="image(banners[0].imageLinkType, banners[0].image)"
          />
        </a>
        <SfBanner
          v-else
          :subtitle="banners[0].subtitle"
          :title="banners[0].title"
          :description="banners[0].text"
          :image="image(banners[0].imageLinkType, banners[0].image)"
        />
      </div>
    </div>
    <div class="sf-banner-grid__row">
      <div class="sf-banner-grid__col">
        <a v-if="banners[1].link" @click="link(banners[1])">
          <SfBanner
            :subtitle="banners[1].subtitle"
            :title="banners[1].title"
            :description="banners[1].text"
            :button-text="banners[1].buttontext"
            :image="image(banners[1].imageLinkType, banners[1].image)"
          />
        </a>
        <SfBanner
          v-else
          :subtitle="banners[1].subtitle"
          :title="banners[1].title"
          :description="banners[1].text"
          :image="image(banners[1].imageLinkType, banners[1].image)"
        />
      </div>
      <div class="sf-banner-grid__col">
        <a v-if="banners[2].link" @click="link(banners[2])">
          <SfBanner
            :subtitle="banners[2].subtitle"
            :title="banners[2].title"
            :description="banners[2].text"
            :button-text="banners[2].buttontext"
            :image="image(banners[2].imageLinkType, banners[2].image)"
          />
        </a>
        <SfBanner
          v-else
          :subtitle="banners[2].subtitle"
          :title="banners[2].title"
          :description="banners[2].text"
          :image="image(banners[2].imageLinkType, banners[2].image)"
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
