import { CmsState } from '../types/CmsState'
import { GetterTree } from 'vuex';

export const getters: GetterTree<CmsState, any> = {
  getComponents (state) {
    return state.cmsComponents
  },
  getBlogComponents (state) {
    return state.cmsBlogComponents
  },
  getHomeComponents (state) {
    return state.cmsHomeComponents
  }
}
