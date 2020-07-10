<template>
  <SfHero
    class="hero"
    :slider-options="{
      animationDuration: 2000,
      rewindDuration: 2000
    }"
  >
    <SfHeroItem
      v-for="(component, index) in componentData.slides"
      :key="index"
      :title="component.title"
      :subtitle="component.text"
      :image="image(component.imageLinkType, component.imagepath)"
      :class="bannerClass(index)"
    />
  </SfHero>
</template>

<script>
import { SfHero } from '@storefront-ui/vue';
import LinkMixin from '../../mixins/LinkMixin'
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
     * We are positing text of even banner item at left and odd at right
     * After the implementation of https://app.clickup.com/t/3dqt60, we can remove this method.
     */
    bannerClass (i) {
      return i % 2 !== 0 ? 'sf-hero-item--align-right' : ''
    }
  },
  mixins: [LinkMixin, imageMixin]
}
</script>

<style lang="scss" scoped>
.sf-hero-item {
  --hero-item-height: 14rem;
  height: initial;
}
</style>
