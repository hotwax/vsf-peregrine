<template>
  <div v-if="carouselProducts.length">
    <SfSection :title-heading="componentData.title" class="section">
      <div>
        <MCarousel
          class="m-product-carousel"
          :settings="{
            animationDuration: 3000,
            rewindDuration: 3000
          }"
        >
          <SfCarouselItem v-for="(product, i) in carouselProducts" :key="i">
            <SfProductCard
              :title="product.title"
              :image="product.image"
              :regular-price="product.price.regular"
              :special-price="product.price.special"
              :link="product.link"
              is-on-wishlist-icon="heart_fill"
              :is-on-wishlist="isOnWishlist(product)"
              wishlist-icon="heart"
              @click:wishlist="toggleWishlist(product)"
              link-tag="router-link"
            />
          </SfCarouselItem>
        </MCarousel>
      </div>
    </SfSection>
  </div>
</template>

<script>
import { SfProductCard, SfSection } from '@storefront-ui/vue';
import MCarousel from '../molecules/m-carousel'
import fetch from 'isomorphic-fetch';
import { prepareCategoryProduct } from 'theme/helpers';
import { mapGetters, mapActions } from 'vuex';
import { ModalList } from 'theme/store/ui/modals'
import AAddToWishlist from 'theme/components/atoms/a-add-to-wishlist'
import i18n from '@vue-storefront/i18n';
import { htmlDecode } from '@vue-storefront/core/filters';

export default {
  components: {
    SfProductCard,
    SfSection,
    MCarousel
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
  async created () {
    if (this.componentType === 'bestseller') {
      if (this.$store.state.homepage.bestsellers.length === 0) {
        let productList = [];
        await fetch(this.componentData.url, { method: 'GET' })
          .then(data => data.json())
          .then(resp => (productList = resp['hits']['hits']));
        this.$store.state.homepage.bestsellers = productList.map(
          ele => ele._source
        );
      }
    } else if (this.componentType === 'newarrivalproducts') {
      if (this.$store.state.homepage.new_collection.length === 0) {
        let productList = [];
        await fetch(this.componentData.url, { method: 'GET' })
          .then(data => data.json())
          .then(resp => (productList = resp['hits']['hits']));
        this.$store.state.homepage.new_collection = productList.map(
          ele => ele._source
        );
      }
    }
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
    }),
    bestSeller () {
      return this.$store.state.homepage.bestsellers;
    },
    newArrival () {
      return this.$store.state.homepage.new_collection;
    },

    carouselProducts () {
      if (this.componentType === 'bestseller') {
        return this.bestSeller.map(prepareCategoryProduct);
      } else if (this.componentType === 'newarrivalproducts') {
        return this.newArrival.map(prepareCategoryProduct);
      }
      return [];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

</style>
