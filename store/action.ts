import * as types from './mutation-types'
import { ActionTree } from 'vuex'
import { CmsState } from '../types/CmsState'
import config from 'config'
import fetch from 'isomorphic-fetch'
import { StorageManager } from '@vue-storefront/core/lib/storage-manager'

export const actions: ActionTree<CmsState, any> = {

  async getCmsComponents ({ commit }, url) {
    let cmsComponents = {};
    cmsComponents = await StorageManager.get('cmsStaticCollection').getItem(url.title);
    commit(types.GET_CMS_COMPONENTS, cmsComponents);
    await fetch(`${config.cms_peregrine.endpoint}/${url.title}.data.json`, {
      method: 'GET'
    }).then(resp => resp.json()).then(resp => {
      cmsJsonParser(resp).then(
        (data) => {
          cmsComponents = data
          StorageManager.get('cmsStaticCollection').setItem(url.title, cmsComponents).catch((reason) => {
            console.error(reason) // it doesn't work on SSR
          })
          commit(types.GET_CMS_COMPONENTS, cmsComponents)
        }
      )
    })
  },
  async getCmsHomeComponents ({ commit }) {
    let cmsHomeComponents = {};
    cmsHomeComponents = await StorageManager.get('cmsHomeCollection').getItem('index');
    commit(types.GET_CMS_HOME_COMPONENTS, cmsHomeComponents);
    await fetch(`${config.cms_peregrine.endpoint}/index.data.json`, {
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
