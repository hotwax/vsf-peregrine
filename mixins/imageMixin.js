import config from 'config'

export default {
  methods: {
    image (type, path) {
      if (type === 'internalLink') {
        return config.peregrine_config.image_endpoint + path
      } else {
        return path
      }
    }
  }
}
