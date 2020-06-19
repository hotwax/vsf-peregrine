import { Module } from 'vuex'
import { actions } from './action'
import { mutations } from './mutations'
import { getters } from './getters'
import { state } from './state'
export const peregrineStore: Module<any, any> = {
  namespaced: true,
  actions,
  mutations,
  getters,
  state
}
