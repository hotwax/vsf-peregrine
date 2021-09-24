<template>
  <div class="products">
    <transition-group
      appear
      name="products__slide"
      tag="div"
      class="products__grid"
    >
      <SfProductCard
        v-for="product in productList"
        :key="product.id"
        :title="product.title"
        :image="product.image"
        :regular-price="product.price.regular"
        :special-price="product.price.special"
        :link="product.link"
        link-tag="router-link"
        is-on-wishlist-icon="heart_fill"
        :is-on-wishlist="isOnWishlist(product)"
        wishlist-icon="heart"
        class="products__product-card"
        @click:wishlist="toggleWishlist(product)"
      >
        <template #title>
          <router-link
            :to="product.link"
          >
            <h4 v-if="product.brand">
              {{ product.brand }}
            </h4>
            <h3 class="sf-product-card__title">
              {{ product.title }}
            </h3>
          </router-link>
        </template>
      </SfProductCard>
    </transition-group>
  </div>
</template>

<script>
import {
  SfProductCard
} from '@storefront-ui/vue';
import AAddToWishlist from 'theme/components/atoms/a-add-to-wishlist';
import { prepareCategoryProduct } from 'theme/helpers';
import { mapActions, mapGetters } from 'vuex';
import { ModalList } from 'theme/store/ui/modals'
import i18n from '@vue-storefront/i18n';
import { htmlDecode } from '@vue-storefront/core/filters';

export default {
  components: {
    SfProductCard
  },
  data () {
    return {
      productList: []
    }
  },
  mixins: [AAddToWishlist],
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
  async mounted () {
    const collectionList = await fetch(this.componentData.url, { method: 'GET' })
      .then(data => data.json())
      .then(resp => resp['hits']['hits']);

    this.productList = collectionList.map(ele => ele._source).map(product => prepareCategoryProduct(product))
  },
  methods: {
    ...mapActions({
      openModal: 'ui/openModal'
    }),
    toggleWishlist (product) {
      if (!this.isLoggedIn) {
        this.openModal({ name: ModalList.Auth, payload: 'login' });
        return;
      }
      const isProductOnWishlist = this.isOnWishlist(product);
      if (!isProductOnWishlist) {
        const token = this.getUserToken;
        if (token) {
          this.serverUpdateWishlist(product, token).then(resp => {
            this.$store.dispatch(
              'notification/spawnNotification',
              {
                type: 'success',
                message: i18n.t('Product {productName} has been added to wishlist!', {
                  productName: htmlDecode(product.title)
                }),
                action1: { label: i18n.t('OK') }
              },
              { root: true }
            );
            this.$store.dispatch('wishlist/addItem', product);
          })
        }
      } else {
        const token = this.getUserToken;
        if (token) {
          this.serverRemoveItemFromWishlist(product, token).then(resp => {
            this.$store.dispatch(
              'notification/spawnNotification',
              {
                type: 'success',
                message: i18n.t(
                  'Product {productName} has been removed from wishlist!',
                  { productName: htmlDecode(product.title) }
                ),
                action1: { label: i18n.t('OK') }
              },
              { root: true }
            );
            this.$store.dispatch('wishlist/removeItem', product);
          })
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      isOnWishlist: 'wishlist/isOnWishlist',
      isLoggedIn: 'user/isLoggedIn'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__grid {
    justify-content: space-between;
    @include for-desktop {
      justify-content: start;
    }
    @include for-mobile {
      padding: var(--spacer-xs);
    }
  }
  &__product-card {
    flex: 1 1 50%;
  }
  &__product-card-horizontal {
    flex: 0 0 100%;
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  @include for-desktop {
    &__pagination {
      display: flex;
      justify-content: center;
      margin: var(--spacer-xl) 0 0 0;
    }
    &__product-card-horizontal {
      margin: var(--spacer-lg) 0;
    }
    &__product-card {
      flex: 1 1 25%;
    }
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
}
</style>
