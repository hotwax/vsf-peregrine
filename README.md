# vsf-peregrine
Headless Peregrine CMS integration with VueStorefront  
[Peregrine](https://www.peregrine-cms.com/content/sites/peregrine.html) is an 'Apache Sling' based content management system embracing head optional and API driven approach.

## Requirements

[Vue Storefront 1.10.3](https://github.com/DivanteLtd/vue-storefront/releases/tag/v1.10.3)


## Installation

Copy `peregrine-cms` to `vue-storefront/src/modules`.

Add the following to `vue-storefront/src/modules/index.ts`

```
import { extendModule } from '@vue-storefront/core/lib/module'
...
import { PeregrineStore } from './peregrine-cms';

extendModule(urlExtend)

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


## Contributing
Pull requests are  most welcomed.  
If you discover any bug or have a suggestion, please feel free to create an issue.

## The license

vsf-peregrine is available under the [Apache License 2.0](https://github.com/hotwax/vsf-peregrine/blob/master/LICENSE).
