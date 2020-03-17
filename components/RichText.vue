<template>
  <no-ssr v-if="componentData">
    <div class="container pt10 pb10">
      <div class="row pl10 pt0">
        <h2 class="fs-big p0" v-html="componentData.data.title" v-if="componentData.data.title" />
        <p v-html="componentData.data.text" />
      </div>
    </div>
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
