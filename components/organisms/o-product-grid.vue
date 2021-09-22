<template>
<div>
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
</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import {
  SfProductCard
} from '@storefront-ui/vue';
import AAddToWishlist from 'theme/components/atoms/a-add-to-wishlist';

export default {
  components: {
    SfProductCard,
    LazyHydrate
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
    await fetch(this.componentData.url, { method: 'GET' })
      .then(data => data.json())
      .then(resp => (this.productList = resp['hits']['hits']));
  }
}
</script>