import store from '../../../../core/store'
import { Route } from 'vue-router'
/**
 * Add Route's name in peregrineRoutes whose data will come from peregrine cms
 */
const peregrineRoutes = ['home', 'returns', 'size-guide', 'about-us', 'contact', 'privacy', 'legal', 'customer-service', 'delivery']
export async function beforeEach (to: Route, from: Route, next) {
  let routeTo = to.name
  if (routeTo === 'cms-page') {
    routeTo = to.params.slug
  }
  let isCmsRoute = peregrineRoutes.findIndex(route => route === routeTo)
  if (isCmsRoute > -1) {
    if (routeTo === 'home') {
      routeTo = 'index'
    }
    await store.dispatch('cmsstore/getCmsComponents', { title: routeTo })
  }
  next()
}
