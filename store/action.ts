import * as types from './mutation-types'
import { ActionTree } from 'vuex'
import { CmsState } from '../types/CmsState'
import { PEREGRINE_CONFIG } from '../helper/PeregrineConfig'
import fetch from 'isomorphic-fetch'
import { StorageManager } from '@vue-storefront/core/lib/storage-manager'
import { onlineHelper } from '@vue-storefront/core/helpers'
import { CmsService } from '../data-resolver/CmsService'

let cmsJsonParser = (resp) => {
  return new Promise((resolve, reject) => {
    let cmsParsedComponents = {
      'title': resp['title'] || '',
      'components': resp.children.map((ob: any) => {
        let componentName = ob.component.split('-')
        let obj = {
          type: componentName[componentName.length - 1],
          data: ob
        }
        return obj;
      })
    }
    resolve(cmsParsedComponents)
  })
}

export const actions: ActionTree<CmsState, any> = {

  async getCmsComponents ({ commit }, url) {
    let cmsComponents = {};
    cmsComponents = await StorageManager.get('cmsStaticCollection').getItem(url.title);
    commit(types.GET_CMS_COMPONENTS, cmsComponents);

    if(onlineHelper.isOnline) {
      await CmsService.fetchData(url, 'cmsstore/fetch')
    } else {
      await CmsService.fetchUpdatedData(url,'cmsstore/fetch')
    }
  },
  async fetch({ commit }, resp) {
    cmsJsonParser(resp.result).then(
      (data) => {
        let cmsComponents = data
        StorageManager.get('cmsStaticCollection').setItem(resp.result.title, cmsComponents).catch((reason) => {
          console.error(reason)
        })
        commit(types.GET_CMS_COMPONENTS, cmsComponents)
      }
    )
  },
  async getCmsHomeComponents ({ commit }) {
    let cmsHomeComponents = {};
    cmsHomeComponents = await StorageManager.get('cmsHomeCollection').getItem('index');
    commit(types.GET_CMS_HOME_COMPONENTS, cmsHomeComponents);
    await fetch(`${PEREGRINE_CONFIG.endpoint}/index.data.json`, {
      method: 'GET'
    }).then(resp => resp.json()).then(resp => {
      cmsJsonParser(resp).then(
        (data: any) => {
          data.components.push({ 'type': 'product', 'data': {} })
          cmsHomeComponents = data
          commit(types.GET_CMS_HOME_COMPONENTS, cmsHomeComponents);
        }
      )
    }).catch(
      (err) => {
        console.log(err);
      }
    )
  }
}
