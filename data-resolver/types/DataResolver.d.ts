import Task from '@vue-storefront/core/lib/sync/types/Task'

export namespace DataResolver {

    interface CmsService {
        fetchCmsData: (url, actionName: string) => Promise<Task>
        queueCmsData: (url, actionName: string) => Promise<Task>
    }
}
