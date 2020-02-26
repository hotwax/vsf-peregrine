<template>
  <no-ssr v-if="componentData">
    <h2 class="fs-big" v-html="componentData.data.text">
      {{ componentData.data.text }}
    </h2>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'
export default {
  components: {
    'no-ssr': NoSSR
  },
  props: {
    componentData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';
  $border-primary: color(primary, $colors-border);
</style>
