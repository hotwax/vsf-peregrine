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

    await fetch(`${config.cms_peregrine.endpoint}/${url.title}.data.json`, {
      method: 'GET'
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
  async getCmsBlogComponents ({ commit }, url) {
    let cmsBlogComponents = {};
    cmsBlogComponents = await Vue.prototype.$db.cmsBlogCollection.getItem(url.id);
    commit(types.GET_CMS_BLOG_COMPONENTS, cmsBlogComponents);
    await fetch(`${config.cms_peregrine.endpoint}/blogs/${url.id}.data.json`, {
      method: 'GET'
    }).then(resp => resp.json()).then(resp => {
      cmsJsonParser(resp).then(
        (data) => {
          cmsBlogComponents = data
          Vue.prototype.$db.cmsBlogCollection.setItem(url.id, cmsBlogComponents).catch((reason) => {
            console.error(reason)
          })
          console.log(cmsBlogComponents)
          commit(types.GET_CMS_BLOG_COMPONENTS, cmsBlogComponents)
        }
      )
    })
  },
  async getCmsHomeComponents ({ commit }) {
    let cmsHomeComponents = {};
    cmsHomeComponents = await Vue.prototype.$db.cmsHomeCollection.getItem('index');
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
