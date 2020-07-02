# Peregrine CMS Module for Vue Storefront

[Peregrine CMS](https://www.peregrine-cms.com/content/sites/peregrine.html) is an 'Apache Sling' based content management system embracing head optional and API driven approach.

## Requirements

[Vue Storefront 1.12.0](https://github.com/DivanteLtd/vue-storefront/releases/tag/v1.12.0)

Note: For Vue Storefront 1.10.3 version, please use the release1.2 of this module 
[VSF Peregrine release1.2](https://github.com/hotwax/vsf-peregrine/tree/release1.2)


## Installation

Clone the Peregine Module at `vue-storefront/src/modules`  
`git clone https://github.com/hotwax/vsf-peregrine.git`


### Register module in Vue Storefront theme

Open the `modules.ts` file of your theme `vue-storefront/src/themes/<name-of-your-theme>/config/modules.ts`


```
/* ... abridged */

import { PeregrineModule } from 'src/modules/vsf-peregrine'

/* ... abridged */

export const registerModules: VueStorefrontModule[] = [
  ...
  registerModule(PeregrineModule)
  ...
]
```

### Update the routes to use Peregrine Module

Open the `index.js` file of your theme `vue-storefront/src/themes/<name-of-your-theme>/router/index.js`

#### Home Page
Change the `import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home');`
to
`import(/* webpackChunkName: "vsf-home" */ 'src/modules/vsf-peregrine/pages/Home.vue');`

#### Static Page
Change the `import(/* webpackChunkName: "vsf-static" */ 'theme/pages/Static');`
to
`import(/* webpackChunkName: "vsf-static" */ 'src/modules/vsf-peregrine/pages/Static.vue')`


### Add Peregrine CMS Configuration

Add the following configuration in config file.

#### Global Config
Add cmsPeregrine config values under ```localForage``` > ```defaultDrivers```

```
/* ... abridged */

"localForage": {
    "defaultDrivers": {
      ...
      "cmsstore": "LOCALSTORAGE"
    }
  },

/* ... abridged */
```

#### Module Config
Set the Peregrine CMS instance and image endpoint (URL).
Open `vue-storefront/src/modules/vsf-peregrine/helper/PeregrineConfig.js`
and update the endpoints.

```
export const PEREGRINE_CONFIG = {
  endpoint: '{YOUR-PEREGRINE-CMS-ENDPOINT}/content/sites/{YOUR SITE URL}',
  image_endpoint: '{YOUR-PEREGRINE-CMS-ENDPOINT}'
}
```

## Contributing
Pull requests are most welcomed.
If you discover any bug or have a suggestion, please feel free to create an issue.

## The license

vsf-peregrine is available under the [Apache License 2.0](https://github.com/hotwax/vsf-peregrine/blob/master/LICENSE).
