<template>
  <no-ssr v-if="componentData">
    <section class="container pb60 px15">
      <div class="row center-xs">
        <header class="col-md-12">
          <h2 class="align-center cl-accent">
            {{ componentData.data.title }}
          </h2>
        </header>
      </div>
      <div class="row center-xs">
        <div class="col-sm-4 pb15" v-for="(tile, index) in social_tiles" :key="index" @click="link(tile)">
          <div class="tile center-xs middle-xs pointer">
            <img class="tile-image" v-lazy="tile.image" :alt="tile.alt">
          </div>
        </div>
      </div>
    </section>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import config from 'config'
import LinkMixin from '../mixins/LinkMixin'
export default {
  name: 'TileLinks',
  components: {
    'no-ssr': NoSSR
  },
  props: {
    componentData: {
      type: Object
    }
  },
  mixins: [LinkMixin],
  computed: {
    social_tiles () {
      let content = this.componentData['data']['cards']
      let cards = Object.keys(content).filter(el => typeof (content[el]) === 'object').map(e => { return {'image': content[e]['imageLinkType'] === 'internalLink' ? config.cms_peregrine.image_endpoint + content[e]['image'] : content[e]['image'], 'alt': content[e]['imagealttext'], 'linkType': content[e]['linkType'], 'link': content[e]['link']} })
      return cards
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~theme/css/animations/transitions';
.tile {
  display: flex;
  overflow: hidden;
}
.tile-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s $motion-main;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
}
</style>
