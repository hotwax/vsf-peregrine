<template>
  <div id="home" v-if="cmsComponents">
    <div>
      <CmsPage :cms-object="cmsComponents" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Logger } from '@vue-storefront/core/lib/logger';
import Home from '@vue-storefront/core/pages/Home';
import { isServer } from '@vue-storefront/core/helpers';
import CmsPage from '../components/CmsPage';

export default {
  name: 'Home',
  components: {
    CmsPage
  },
  mixins: [Home],
  data () {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
      cmsComponents: 'cmsstore/getHomeComponents'
    })
  },
  watch: {
    isLoggedIn () {
      const redirectObj = localStorage.getItem('redirect');
      if (redirectObj) this.$router.push(redirectObj);
      localStorage.removeItem('redirect');
    }
  },
  async asyncData ({ store }) {
    Logger.info('Calling asyncData in Home (theme)')();

    await Promise.all([
      store.dispatch('homepage/fetchNewCollection')
    ]);
  },
  async created () {
    await this.$store.dispatch('cmsstore/getCmsHomeComponents')
  },
  mounted () {
    if (!this.isLoggedIn && localStorage.getItem('redirect')) { this.$bus.$emit('modal-show', 'modal-signup'); }
  },
  beforeRouteEnter (to, from, next) {
    if (!isServer && !from.name) {
      next(vm => {
        vm.$store.dispatch('homepage/fetchNewCollection').then(() => {
          vm.loading = false;
        });
      });
    } else {
      next();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 1272px;
    margin: 0 auto;
  }
}
</style>
