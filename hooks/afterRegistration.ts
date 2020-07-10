import { StorageManager } from '@vue-storefront/core/lib/storage-manager'
import { Store } from 'vuex'
import * as types from '../store/mutation-types'
/**
 *
 * AfterRegistartion hook runs after mutation sets the state in vues store.
 * Here Its checking mutation type (dispatched  from action) and setItem in the local forage
 *
 * AfterRegistartion hooks also need to be added in Vuex module in index.ts file
 */
export function afterRegistration (store: Store<any>) {
  store.subscribe((mutation, state) => {
    const type = mutation.type
    if (type.endsWith(types.GET_CMS_HOME_COMPONENTS)) {
      StorageManager.get('cmsHomeCollection').setItem('index', state.cmsHomeComponents).catch((reason) => {
        console.error(reason)
      })
    }
  })
}
