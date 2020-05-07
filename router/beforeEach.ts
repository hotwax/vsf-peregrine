import store from '../../../../core/store'
import { Route } from 'vue-router'
/**
 * Add Route's name in peregrineRoutes whose data will come from peregrine cms
 */
const peregrineRoutes = ['returns', 'size-guide', 'about-us', 'contact', 'privacy', 'legal', 'customer-service', 'delivery']
export async function beforeEach (to: Route, from: Route, next) {
  let isCmsRoute = peregrineRoutes.findIndex(route => route === to.name)
  if (isCmsRoute > -1) {
    await store.dispatch('cmsstore/getCmsComponents', { title: to.name })
  } else if (to.name === 'blog') {
    await store.dispatch('cmsstore/getCmsBlogComponents', { id: to.params.id })
  }
  next()
}
