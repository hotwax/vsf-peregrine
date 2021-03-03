<template>
  <div id="static" class="main-content">
    <CmsPage :cms-object="cmsComponents" v-if="cmsComponents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CmsPage from '../components/CmsPage';
import { registerModule } from '@vue-storefront/core/lib/modules';
import { PeregrineModule } from 'src/modules/peregrine';
import { currentStoreView } from '@vue-storefront/core/lib/multistore';

export default {
  components: {
    CmsPage
  },
  async beforeCreate () {
    await registerModule(PeregrineModule)
    let storeView = currentStoreView()
    if (this.$router.currentRoute.path === `/${storeView.storeCode}`) {
      await this.$store.dispatch('cmspage/getCmsComponents', { title: 'index', locale: storeView.i18n.defaultLocale })
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
