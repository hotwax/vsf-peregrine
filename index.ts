// import { createModule } from '@vue-storefront/core/lib/module'
import { module } from './store'
import { beforeRegistration } from './hooks/beforeRegistration'
import { afterRegistration } from './hooks/afterRegistration'
import { beforeEach } from './router/beforeEach'
import { StorefrontModule } from '@vue-storefront/core/lib/modules'

export const KEY = 'cmsstore'

export const PeregrineStore: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  store.registerModule(KEY, module)
  router.beforeEach(beforeEach)
  // eslint-disable-next-line no-unused-expressions
  beforeRegistration
  // eslint-disable-next-line no-unused-expressions
  afterRegistration
}
