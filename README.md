# vsf-peregrine
Headless Peregrine CMS integration with VueStorefront  
[Peregrine](https://www.peregrine-cms.com/content/sites/peregrine.html) is an 'Apache Sling' based content management system embracing head optional and API driven approach.

## Requirements

[Vue Storefront 1.10.3](https://github.com/DivanteLtd/vue-storefront/releases/tag/v1.10.3)


## Installation

Create `peregrine-cms` folder under `vue-storefront/src/modules` and copy the entire content to it  
OR
use command 
`git clone https://github.com/hotwax/vsf-peregrine.git peregrine-cms`

Note: as per the below instruction the Peredrin CMS modules are considered to be in `peregrine-cms` folder

Add the following to `vue-storefront/src/modules/index.ts`

```
import { extendModule } from '@vue-storefront/core/lib/module'
...
import { PeregrineStore } from './peregrine-cms';
...
export const registerModules: VueStorefrontModule[] = [
  ...
  PeregrineStore
]
```

### Config

```
"cms_peregrine": {
  "image_endpoint": "{YOUR-PEREGRINE-CMS-ENDPOINT}",
  "endpoint": "{YOUR-PEREGRINE-CMS-ENDPOINT}/content/sites/{YOUR SITE URL}",
}
```

Add cmsPeregrine config values under ```localForage``` > ```defaultDrivers```

```
"localForage": {
    "defaultDrivers": {
      ...
      "cmsPeregrine": "LOCALSTORAGE"
    }
  },
```

### Using CMS components


Change route path of your CMS pages in `src/themes/default/router/index.js`  
For example:  

`const Home = () => import(/* webpackChunkName: "vsf-home" */ 'src/modules/peregrine-cms/pages/Home.vue')`

In the above example, we have changed `Home` page with the cms component.


## Contributing
Pull requests are  most welcomed.  
If you discover any bug or have a suggestion, please feel free to create an issue.

## The license

vsf-peregrine is available under the [Apache License 2.0](https://github.com/hotwax/vsf-peregrine/blob/master/LICENSE).
