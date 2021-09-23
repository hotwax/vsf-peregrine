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
    let collectionList = []
    await fetch('https://urooster-uat-oms.hotwax.io/rest/s1/api/commerce/catalog/product/_search?_source_exclude=attribute_set_id%2Cconfigurable_options%2Cdescription%2Csgn%2C%2A.sgn%2Cmsrp_display_actual_price_type%2C%2A.msrp_display_actual_price_type%2Crequired_options%2Cmedia_gallery%2Cstock.use_config_min_qty%2Cstock.use_config_notify_stock_qty%2Cstock.stock_id%2Cstock.use_config_backorders%2Cstock.use_config_enable_qty_inc%2Cstock.enable_qty_increments%2Cstock.use_config_manage_stock%2Cstock.use_config_min_sale_qty%2Cstock.notify_stock_qty%2Cstock.use_config_max_sale_qty%2Cstock.use_config_max_sale_qty%2Cstock.qty_increments%2Cstock.stock_status_changed_auto%2Cstock.show_default_notification_message%2Cstock.use_config_qty_increments%2Cstock.is_decimal_divided&_source_include=type%2Cconfigurable_children.attributes%2Cconfigurable_children.id%2Cconfigurable_children.final_price%2Cconfigurable_children.color%2Cconfigurable_children.original_price%2Cconfigurable_children.original_price_incl_tax%2Cconfigurable_children.price%2Cconfigurable_children.price_incl_tax%2Cconfigurable_children.size%2Cconfigurable_children.sku%2Cconfigurable_children.special_price%2Cconfigurable_children.special_price_incl_tax%2Cconfigurable_children.tier_prices%2Cfinal_price%2Cid%2Cimage%2Cname%2Cnew%2Cbrand%2Coriginal_price_incl_tax%2Coriginal_price%2Cprice%2Cprice_incl_tax%2Cproduct_links%2Csale%2Cspecial_price%2Cspecial_to_date%2Cspecial_from_date%2Cspecial_price_incl_tax%2Cstatus%2Ctax_class_id%2Ctier_prices%2Ctype_id%2Curl_path%2Curl_key%2C%2Aimage%2C%2Asku%2C%2Asmall_image&from=0&request=%7B%22query%22%3A%7B%22bool%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22terms%22%3A%7B%22visibility%22%3A%5B2%2C3%2C4%5D%7D%7D%2C%7B%22terms%22%3A%7B%22status%22%3A%5B0%2C1%5D%7D%7D%2C%7B%22terms%22%3A%7B%22category_ids%22%3A%5B%22100097%22%5D%7D%7D%5D%7D%7D%7D%7D%2C%22aggs%22%3A%7B%22agg_terms_brand%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22brand%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_brand_options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22brand_options%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_color%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22color%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_color_options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22color_options%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_price%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22price%22%7D%7D%2C%22agg_range_price%22%3A%7B%22range%22%3A%7B%22field%22%3A%22price%22%2C%22ranges%22%3A%5B%7B%22from%22%3A0%2C%22to%22%3A50%7D%2C%7B%22from%22%3A50%2C%22to%22%3A100%7D%2C%7B%22from%22%3A100%2C%22to%22%3A150%7D%2C%7B%22from%22%3A150%7D%5D%7D%7D%2C%22agg_terms_size%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22size%22%2C%22size%22%3A15%7D%7D%2C%22agg_terms_size_options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22size_options%22%2C%22size%22%3A15%7D%7D%2C%22agg_terms_type%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22type%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_type_options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22type_options%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms__options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22_options%22%2C%22size%22%3A10%7D%7D%7D%7D&size=12&sort=updated_at%3Adesc', { method: 'GET' })
      .then(data => data.json())
      .then(resp => (collectionList = resp['hits']['hits']));

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
