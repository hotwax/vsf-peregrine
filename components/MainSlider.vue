<template>
 <no-ssr v-if="componentData">
  <section class="main-slider w-100 bg-cl-th-accent cl-white">
      <carousel :per-page="1" pagination-active-color="#ffffff" pagination-color="#e0e0e0">
        <slide v-for="(slide, index) in slides" :key="index" >
          <div class="container w-100 pointer" v-lazy:background-image="slide.imagepath" @click.prevent="link(slide)">
            <div class="row middle-xs center-xs">
              <div class="col-md-12 px10p">
                <p
                  class="subtitle mb0 serif uppercase h3 align-center"
                  data-testid="mainSliderSubtitle"
                  v-html="slide.text"
                />
                <h1 class="title mt0 mb30 align-center" data-testid="mainSliderTitle" v-html="slide.title" />
              </div>
            </div>
          </div>
        </slide>
      </carousel>
  </section>
  </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import sliderData from 'theme/resource/slider.json'
import ButtonOutline from 'theme/components/theme/ButtonOutline'
import config from 'config'
import LinkMixin from '../mixins/LinkMixin'

export default {
  data () {
    return {
      currentSlide: 0,
      slides: [],
      totalSlides: 0
    };
  },
  props: {
    componentData: {
      type: Object,
    }
  },
  components: {
    ButtonOutline,
    'Carousel': () => import('vue-carousel').then(Slider => Slider.Carousel),
    'Slide': () => import('vue-carousel').then(Slider => Slider.Slide),
    'no-ssr': NoSSR
  },
  mounted () {
    this.slides = Object.keys(this.componentData["data"].slides)
      .filter(el => typeof this.componentData["data"].slides[el] == "object")
      .map(ob => {
        this.componentData["data"].slides[ob]["imagepath"] =
         this.componentData["data"].slides[ob]["imageLinkType"] === 'internalLink' ? config.cms_peregrine.image_endpoint +
          this.componentData["data"].slides[ob]["imagepath"] :  this.componentData["data"].slides[ob]["imagepath"];
        return this.componentData["data"].slides[ob];
      });
    this.totalSlides = this.slides.length;
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    }, 5000);
  },
  mixins: [LinkMixin]
};
</script>
<style lang="scss">
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-white: color(white);
.main-slider {
  @media (max-width: 767px) {
    display: none;
  }

  .VueCarousel-pagination {
    position: absolute;
    bottom: 15px;
  }
  .VueCarousel-dot--active .VueCarousel-dot-inner {
    border: 2px solid $color-white;
    margin-top: -2px;
  }
}
</style>
<style scoped>
h1 {
  font-size: 72px;
}
.main-slider {
  height: 640px;
}
.container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.row {
  height: 640px;
}
@media (max-width: 75em) {
  .main-slider {
    height: 400px;
  }
  .title {
    font-size: 50px;
  }
  .subtitle {
    font-size: 20px;
  }
  .row {
    height: 400px;
  }
}
@media (max-width: 64em) {
  .main-slider {
    height: 359px;
  }
  .container {
    background-position: left;
  }
  .title {
    font-size: 48px;
  }
  .subtitle {
    font-size: 18px;
  }
  .button {
    font-size: 16px;
  }
  .row {
    height: 359px;
  }
}
</style>
