import { CmsState } from '../types/CmsState'
import { GetterTree } from 'vuex';

export const getters: GetterTree<CmsState, any> = {
  getComponents (state) {
    return state.cmsComponents
  },
  getHomeComponents (state) {
    return state.cmsHomeComponents
  }
}
