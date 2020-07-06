import * as localForage from 'localforage'
import UniversalStorage from '@vue-storefront/core/lib/store/storage'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import { StorageManager } from '@vue-storefront/core/lib/storage-manager'

/**
 *
 * Creates localforage Instance before setting state in mutations.ts
 *
 * Perameter required for creating localforage instance:
 * name- key name which stores the value in localstorage or indexedBD
 * storeName- Vuex store name
 * driver- localForage[type of storage (IndexedDB or LocalStorage)]
 *
 * VSF manage localForage storage type in config/local.json under defaultStorage.
 *
 * beforeRegistration hooks also need to be added in Vuex module in index.ts file
 */

export function beforeRegistration (config) {
  const storeView = currentStoreView()
  const dbNamePrefix = storeView.storeCode ? storeView.storeCode + '-' : ''

  StorageManager.set('cmsHomeCollection', new UniversalStorage(localForage.createInstance({
    name: (config.storeViews.commonCache ? '' : dbNamePrefix) + 'shop',
    storeName: 'cmsstore',
    driver: localForage[config.localForage.defaultDrivers['cmsstore']]
  })));

  StorageManager.set('cmsStaticCollection', new UniversalStorage(localForage.createInstance({
    name: (config.storeViews.commonCache ? '' : dbNamePrefix) + 'shop',
    storeName: 'cmsstore',
    driver: localForage[config.localForage.defaultDrivers['cmsstore']]
  })));
}
