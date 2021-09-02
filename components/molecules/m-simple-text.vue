<template>
  <div v-if="componentData">
    <h2 class="fs-big" v-html="componentData.data.text" />
  </div>
</template>

<script>
export default {
  name: 'MSimpleText',
  props: {
    componentData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

