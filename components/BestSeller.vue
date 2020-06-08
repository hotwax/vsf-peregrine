<template>
  <no-ssr>
    <section class="new-collection container px15" v-if="bestSeller && bestSeller.length">
      <div>
        <header class="col-md-12">
          <h2 class="align-center cl-accent" v-html="componentData.data.title" />
        </header>
      </div>
      <div class="row center-xs">
        <product-listing columns="4" :products="bestSeller" />
      </div>
    </section>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr';
import fetch from 'isomorphic-fetch';
import ProductListing from 'theme/components/core/ProductListing'
export default {
  components: {
    'no-ssr': NoSSR,
    ProductListing
  },
  props: {
    componentData: {
      type: Object
    }
  },
  async created () {
    let productList = []
    if (this.$store.state.homepage.bestsellers.length == 0) {
      await fetch(this.componentData.data.url, {method: 'GET'}).then(data => data.json()).then(resp => productList = resp['hits']['hits'])
      this.$store.state.homepage.bestsellers = productList.map(ele => ele._source);
    }
  },
  computed: {
    bestSeller () {
      return this.$store.state.homepage.bestsellers
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';
  $border-primary: color(primary, $colors-border);
  .row{
    width: 100%
  }
</style>
