<template>
<div>
  <div v:if="componentData.imagesrc">
    <img
    :src="single_image"
    alt="random image"
  >
  </div>
  <div v:if="componentData.videosrc">
   <video width="100%" height="100%" autoplay="autoplay" controls="controls">
    <source src="single_video.mp4" type="video/mp4">
     <source src="single_video.ogg" type="video/ogg">
     {{ $t('Your browser does not support the video tag') }}
</video>
  </div>
  
</div>
</template>

<script>
import config from 'config'
export default {
  props: {
    componentData: {
      type: Object
    }
  },
  computed : {
    single_image() {
     return config.cms_peregrine.image_endpoint + this.componentData['imagesrc']
    },
    single_video () {
      return config.cms_peregrine.image_endpoint + this.componentData['videosrc']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$border-primary: color(primary, $colors-border);

</style>
