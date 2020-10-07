import { PEREGRINE_CONFIG } from '../helper/PeregrineConfig'
import { DataResolver } from './types/DataResolver'
import { TaskQueue } from '@vue-storefront/core/lib/sync'

const fetchCmsData = (url, actionName: string): Promise<any> =>
  TaskQueue.execute({
    url: `${PEREGRINE_CONFIG.endpoint}/${url.title}.data.json`,
    payload: {
      method: 'GET',
      mode: 'cors'
    },
    callback_event: `store:${actionName}`
  })

const queueCmsData = (url, actionName: string): Promise<any> =>
  TaskQueue.queue({
    url: `${PEREGRINE_CONFIG.endpoint}/${url.title}.data.json`,
    payload: {
      method: 'GET',
      mode: 'cors'
    },
    callback_event: `store:${actionName}`
  })

export const CmsService: DataResolver.CmsService = {
    fetchCmsData,
    queueCmsData
  }
