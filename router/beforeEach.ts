import store from '../../../../core/store'
import { Route } from 'vue-router'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

/**
 * Add Route's name in peregrineRoutes whose data will come from peregrine cms
 */
const peregrineRoutes = ['home', 'returns', 'size-guide', 'about-us', 'contact', 'privacy', 'legal', 'customer-service', 'delivery']
export async function beforeEach (to: Route, from: Route, next) {
  let routeTo = to.name
  let storeView = currentStoreView()

  // TODO: find a more efficient way to handle the multi-store setup
  if (routeTo.indexOf('it') == 0 || routeTo.indexOf('de') == 0) {
    routeTo = routeTo.substring(routeTo.indexOf('-') + 1)
  }
  if (routeTo === 'cms-page') {
    routeTo = to.params.slug
  }

  let isCmsRoute = peregrineRoutes.findIndex(route => route === routeTo)
  if (isCmsRoute > -1) {
    if (routeTo === 'home') {
      routeTo = 'index'
    }
    await store.dispatch('cmspage/getCmsComponents', { title: routeTo, locale: storeView.i18n.defaultLocale })
  }
  next()
}
