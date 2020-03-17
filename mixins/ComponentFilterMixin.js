import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(
      { cmsHomeComponents: 'cmsstore/getHomeComponents' }
    )
  },
  methods: {
    filterCmsComponents (component) {
      return this.cmsHomeComponents['components'].find(e => {
        if (e.type === component) {
          return e.data
        }
      })
    }
  }
}
