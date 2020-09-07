<template>
  <div v-if="carouselProducts.length">
    <SfSection :title-heading="componentData.title" class="section">
      <div>
        <SfCarousel
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
              :wishlist-icon="false"
              link-tag="router-link"
            />
          </SfCarouselItem>
        </SfCarousel>
      </div>
    </SfSection>
  </div>
</template>

<script>
import { SfProductCard, SfCarousel, SfSection } from '@storefront-ui/vue';
import fetch from 'isomorphic-fetch';
import { prepareCategoryProduct } from 'theme/helpers';

export default {
  components: {
    SfProductCard,
    SfCarousel,
    SfSection
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
  computed: {
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
