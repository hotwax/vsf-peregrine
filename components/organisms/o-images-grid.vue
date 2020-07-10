<template>
  <div>
    <SfSection
      :title-heading="componentData.title"
      :subtitle-heading="componentData.subtitle"
      class="section"
    >
      <div class="a-images-grid">
        <div v-for="singleRow in row" :key="singleRow" class="a-images-grid__row">
          <div v-for="singleCol in col" :key="singleCol" class="a-images-grid__col">
            <SfImage :src="getImage(singleRow, singleCol)" />
          </div>
        </div>
      </div>
    </SfSection>
  </div>
</template>

<script>
import { SfSection, SfImage } from '@storefront-ui/vue';
import imageMixin from '../../mixins/imageMixin';

export default {
  components: {
    SfSection,
    SfImage
  },
  props: {
    row: {
      type: Number,
      default: 2,
      validator: (value) => value > 0
    },
    componentData: {
      required: true,
      type: Object
    }
  },
  mixins: [imageMixin],
  methods: {
    getImage (row, col) {
      const index = ((row - 1) * this.col) + (col - 1)
      return (this.images[index])
    }
  },
  computed: {
    images () {
      let images = []
      this.componentData.cards.forEach((card) => {
        images.push(this.image(card.imageLinkType, card.image))
      })
      return images
    },
    col () {
      const images = this.images.length
      return Math.ceil(images / this.row)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

.a-images-grid {
  &__row {
    display: flex;
    & + & {
      margin: calc(var(--spacer-xl) / 2) 0 0 0;
      @include for-desktop {
        margin: var(--spacer-xl) 0 0 0;
      }
    }
  }
  &__col {
    flex: 1;
    margin: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
      @include for-desktop {
        margin: 0 0 0 var(--spacer-xl);
      }
    }
  }
}
</style>
