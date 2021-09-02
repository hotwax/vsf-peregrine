<template>
  <div v-if="componentData">
    <div class="container pt10 pb10">
      <div class="row pl10 pt0">
        <h2 class="fs-big p0" v-html="componentData.data.title" v-if="componentData.data.title" />
        <p v-html="componentData.data.text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MRichText',
  props: {
    componentData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

</style>