<template>
  <SfHero
    class="hero"
    :slider-options="{
      animationDuration: 2000,
      rewindDuration: 2000
    }"
  >
    <SfHeroItem
      v-for="(slide, index) in componentData.slides"
      :key="index"
      :title="slide.title"
      :subtitle="slide.subtitle"
      :image="image(slide.imageLinkType, slide.image)"
      :class="'sf-hero-item--align-' + slide.aligntext"
    />
  </SfHero>
</template>

<script>
import { SfHero } from '@storefront-ui/vue';
import imageMixin from '../../mixins/imageMixin'

export default {
  components: {
    SfHero
  },
  props: {
    componentData: {
      required: true,
      type: Object
    }
  },
  mixins: [imageMixin]
}
</script>

<style lang="scss" scoped>
.sf-hero-item {
  height: initial;
}
</style>
