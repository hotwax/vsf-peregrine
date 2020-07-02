import { MutationTree } from 'vuex'
import * as types from './mutation-types'
import { StorageManager } from '@vue-storefront/core/lib/storage-manager'

export const mutations: MutationTree<any> = {
  [types.GET_CMS_COMPONENTS] (state, payload) {
    state.cmsComponents = payload
  },
  [types.GET_CMS_HOME_COMPONENTS] (state, payload) {
    state.cmsHomeComponents = payload;
    StorageManager.get('cmsHomeCollection').setItem('index', state.cmsHomeComponents).catch((reason) => {
      console.error(reason)
    })
  }

}
