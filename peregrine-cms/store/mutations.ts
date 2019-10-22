import { MutationTree } from 'vuex'
import * as types from './mutation-types'
import Vue from 'vue'

export const mutations: MutationTree<any> = {
  [types.GET_CMS_COMPONENTS] (state, payload) {
    state.cmsComponents = payload
  },
  [types.GET_CMS_HOME_COMPONENTS] (state, payload) {
    state.cmsHomeComponents = payload;
    Vue.prototype.$db.cmsHomeCollection.setItem('index', state.cmsHomeComponents).catch((reason) => {
      console.error(reason) // it doesn't work on SSR
    })
    
  }

}
