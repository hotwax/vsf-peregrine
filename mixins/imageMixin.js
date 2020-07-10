import { PEREGRINE_CONFIG } from '../helper/PeregrineConfig'

export default {
  methods: {
    image (type, path) {
      if (type === 'internalLink') {
        return PEREGRINE_CONFIG.image_endpoint + path
      } else {
        return path
      }
    }
  }
}
