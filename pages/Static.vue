<template>
  <div id="static" v-if="cmsComponents">
    <div>
      <CmsPage :cms-object="cmsComponents" />
    </div>
  </div>
</template>

<script>
import i18n from '@vue-storefront/i18n';
import config from 'config';
import { mapGetters } from 'vuex';
import CmsPage from '../components/CmsPage';

export default {
  components: {
    CmsPage
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
      cmsComponents: 'cmsstore/getComponents'
    })
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

#static {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
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
