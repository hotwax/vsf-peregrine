<template>
  <no-ssr>
    <div v-if="cmsComponents">
      <div v-for="(component, index) in cmsComponents.components" :key="index">
        <div class="bg-cl-secondary py35 pl20" v-if="component.type=='simpletext'">
          <div class="container">
            <breadcrumbs :routes="[{name: 'Homepage', route_link: '/'}]" :active-route="$props.title" />
            <SimpleText :componentData="component" />
          </div>
        </div>
      </div>
      <div>
        <ComponentRenderer :cmsObject="cmsComponents" />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import i18n from '@vue-storefront/i18n'
import Breadcrumbs from 'theme/components/core/Breadcrumbs'
import config from 'config'
import { mapGetters } from 'vuex'
import SimpleText from '../components/SimpleText'
import ComponentRenderer from '../components/ComponentRenderer'
import NoSSR from 'vue-no-ssr'
export default {
  components: {
    Breadcrumbs,
    SimpleText,
    ComponentRenderer,
    'no-ssr': NoSSR
  },
  data () {
    return {
      picked: ''
    }
  },
  metaInfo () {
    return {
      title: this.$route.meta.title || this.$props.title,
      meta: this.$route.meta.description ? [{vmid: 'description', description: this.$route.meta.description}] : []
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    page: {
      type: String,
      required: true
    }
  },
  created () {
    // this.$store.dispatch('cmsstore/getCmsComponents', {title: this.$props.title})
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      cmsComponents: 'cmsstore/getComponents'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$border-primary: color(primary, $colors-border);
.static-menu {
  ul {
    list-style: none;
  }
  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $border-primary;
  }
  a:hover::after,
  .router-link-active::after {
    opacity: 0;
  }
}
.static-content {
  *:first-of-type {
    margin-top: 0;
  }
}
</style>
