<template>
  <lazy-hydrate :trigger-hydration="!loading">
    <transition-group
      appear
      name="products__slide"
      tag="div"
      class="products__grid"
    >
      <SfProductCard
        v-for="product in products"
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
  </lazy-hydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import {
  SfProductCard
} from '@storefront-ui/vue';

export default {
  components: {
    SfProductCard,
    LazyHydrate
  },
  data () {
    return {
      loading: true
    }
  },
  async created () {
    if (this.componentType === '') {
      if (this.$store.state.homepage.bestsellers.length === 0) {
        let productList = [];
        await fetch(this.componentData.url, { method: 'GET' })
          .then(data => data.json())
          .then(resp => (productList = resp['hits']['hits']));
        this.$store.state.homepage.bestsellers = productList.map(
          ele => ele._source
        );
      }
    }
  }
}
</script>