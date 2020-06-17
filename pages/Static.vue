<template>
  <div v-if="cmsComponents">
    <div>
      <ComponentRenderer :cmsObject="cmsComponents" />
    </div>
  </div>
</template>

<script>
import i18n from "@vue-storefront/i18n";
import config from "config";
import { mapGetters } from "vuex";
import ComponentRenderer from "../components/ComponentRenderer";

export default {
  components: {
    ComponentRenderer
  },
  metaInfo() {
    return {
      title: this.$route.meta.title || this.$props.title,
      meta: this.$route.meta.description
        ? [{ vmid: "description", description: this.$route.meta.description }]
        : []
    };
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
  mounted() {},
  computed: {
    ...mapGetters({
      cmsComponents: "cmsstore/getComponents"
    })
  }
};
</script>
