<template>
  <no-ssr>
    <section class="new-collection container px15" v-if="everythingNewCollection && everythingNewCollection.length">
      <div>
        <header class="col-md-12">
          <h2 class="align-center cl-accent">
            {{ componentData.data.title }}
          </h2>
        </header>
      </div>
      <div class="row center-xs">
        <product-listing columns="4" :products="everythingNewCollection" />
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
    if (this.$store.state.homepage.new_collection.length == 0) {
      await fetch(this.componentData.data.url, {method: 'GET'}).then(data => data.json()).then(resp => productList = resp['hits']['hits'])
      this.$store.state.homepage.new_collection = productList.map(ele => ele._source);
    }
  },
  computed: {
    everythingNewCollection () {
      return this.$store.state.homepage.new_collection
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
