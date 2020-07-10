import { peregrineStore } from './store'
import { beforeRegistration } from './hooks/beforeRegistration'
import { afterRegistration } from './hooks/afterRegistration'
import { beforeEach } from './router/beforeEach'
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

export const KEY = 'cmsstore'
export const PeregrineModule: StorefrontModule = function ({
  store,
  router,
  appConfig
}) {
  store.registerModule(KEY, peregrineStore)
  router.beforeEach(beforeEach)
  beforeRegistration(appConfig)
  afterRegistration(store)
};
