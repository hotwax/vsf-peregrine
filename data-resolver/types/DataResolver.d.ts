import Task from '@vue-storefront/core/lib/sync/types/Task'

export namespace DataResolver {

    interface CmsService {
        fetchData: (url, actionName: string) => Promise<Task>
        fetchUpdatedData: (url, actionName: string) => Promise<Task>
    }
}