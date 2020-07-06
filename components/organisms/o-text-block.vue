<template>
  <div>
    <SfHeading :level="2" :title="componentData.title" />
    <div v-html="componentData.text" />
  </div>
</template>

<script>
import { SfHeading } from '@storefront-ui/vue';

export default {
  components: {
    SfHeading
  },
  props: {
    componentData: {
      required: true,
      type: Object
    }
  }
}
</script>
