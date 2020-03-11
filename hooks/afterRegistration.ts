/**
 *
 * AfterRegistartion hook runs after mutation sets the state in vues store.
 * Here Its checking mutation type (dispatched  from action) and setItem in the local forage
 *
 * AfterRegistartion hooks also need to be added in Vuex module in index.ts file
 */
export function afterRegistration ({ Vue, config, store, isServer }) {
  store.subscribe((mutation, state) => {
    const type = mutation.type
    if (
      type.endsWith(type.GET_CMS_HOME_COMPONENTS)
    ) {
      Vue.prototype.$db.cmsHomeCollection.setItem('index', state.cmsHomeComponents).catch((reason) => {
        console.error(reason) // it doesn't work on SSR
      }) // populate cache
    }
  })
}
