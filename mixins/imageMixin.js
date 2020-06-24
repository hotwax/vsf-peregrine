import config from 'config'

export default {
  methods: {
    image (type, path) {
      if (type === 'internalLink') {
        return config.cms_peregrine.image_endpoint + path
      } else {
        return path
      }
    }
  }
}
