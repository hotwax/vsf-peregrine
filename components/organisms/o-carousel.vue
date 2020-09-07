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
      :subtitle="slide.text"
      :image="image(slide.imageLinkType, slide.imagepath)"
      :class="slideClass(index)"
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
  methods: {
    /* The position of text is determine by the class on hero item
     * This information will be passed by CMS.
     * Currently it is not supported it CMS thus for time being
     * We are positioning text of even number slide item at left and odd at right
     * After the implementation of https://app.clickup.com/t/3kvd99, we can remove this method.
     */
    slideClass (slideIndex) {
      return slideIndex % 2 !== 0 ? 'sf-hero-item--align-right' : ''
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
