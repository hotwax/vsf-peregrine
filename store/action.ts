import * as types from './mutation-types'
import { ActionTree } from 'vuex'
import { CmsState } from '../types/CmsState'
import config from 'config'
import Vue from 'vue'
import fetch from 'isomorphic-fetch'

export const actions: ActionTree<CmsState, any> = {

  async getCmsComponents ({ commit }, url) {
    let cmsComponents = {};
    cmsComponents = await Vue.prototype.$db.cmsStaticCollection.getItem(url.title);
    commit(types.GET_CMS_COMPONENTS, cmsComponents);
  
    await fetch(config.cms_peregrine.endpoint + '/' + url.title + '.20.json', { method: 'GET'
    }).then(resp => resp.json()).then(resp => {
      cmsJsonParser(resp).then(
        (data) => {
          cmsComponents = data
          Vue.prototype.$db.cmsStaticCollection.setItem(url.title, cmsComponents).catch((reason) => {
            console.error(reason) // it doesn't work on SSR
          })
          commit(types.GET_CMS_COMPONENTS, cmsComponents)
        }
      )
    })
  },
  async getCmsHomeComponents ({ commit }) {
    let cmsHomeComponents = {};
    cmsHomeComponents =  await Vue.prototype.$db.cmsHomeCollection.getItem('index');
    commit(types.GET_CMS_HOME_COMPONENTS, cmsHomeComponents);

    await fetch(config.cms_peregrine.endpoint + '/index.20.json', { method: 'GET'
    }).then(resp => resp.json()).then(resp => {
      cmsJsonParser(resp).then(
        (data: any) => {
          data.components.push({'type':'product','data':{}})
          cmsHomeComponents = data
          commit(types.GET_CMS_HOME_COMPONENTS, cmsHomeComponents);
          }
      )
    }).catch(
      (err)=>{
       console.log(err);
      }
    )
  }
}

let cmsJsonParser=(resp)=>{
  return new Promise((resolve, reject) => {
    let cmsParsedComponents = { 'title': resp['jcr:content']['jcr:title'],
      'components': Object.keys(resp['jcr:content']).filter(el => typeof resp['jcr:content'][el] === 'object').map(ob => {
        let obj = {
          type: resp['jcr:content'][ob]['sling:resourceType'].substring(resp['jcr:content'][ob]['sling:resourceType'].lastIndexOf('/') + 1),
          data: resp['jcr:content'][ob]
        }
        return obj;
      })
    }
    resolve(cmsParsedComponents)
  })
}
