<template>
  <div v-if="componentData">
    <h2 class="fs-big" v-html="componentData.data.text" />
  </div>
</template>

<script>
export default {
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
