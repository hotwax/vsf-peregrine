<template>
  <SfHero
    class="hero"
    :slider-options="{
      animationDuration: 2000,
      rewindDuration: 2000
    }"
  >
    <SfHeroItem
      v-for="(component, i) in componentData.slides"
      :key="i"
      :title="component.title"
      :subtitle="component.text"
      :image="image(component.imageLinkType, component.imagepath)"
      :class="bannerClass(i)"
    />
  </SfHero>
</template>

<script>
import { SfHero } from '@storefront-ui/vue';
import LinkMixin from '../../mixins/LinkMixin'
import imageMixin from '../../mixins/imageMixin'

export default {
  name: 'ONewsletter',
  components: {
    SfHero
  },
  props: {
    componentData: {
      type: Object
    }
  },
  methods: {
    bannerClass (i) {
      return i % 2 !== 0 ? 'sf-hero-item--align-right' : ''
    }
  },
  mixins: [LinkMixin, imageMixin]
}
</script>
