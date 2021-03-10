# Peregrine CMS Module for Vue Storefront

## 2.3.1 (Upcoming Release)
- Implemented: a custom carousel component to solve the duplicate image issue in best seller(#1qg127)
- Improved: code to handle the multistore setup in VSF(#299cgq)

## 2.3.0 (2021-01-08)
- Updated: the code to register the module on creation (#1nduw8)
- Removed unused config file, as we moved configuration in local.josn file 
- Moved the config parameters from the module to the root.
- Improved: banner background postion for some banners in homepage
- Added: Wishlist functionality on search results and on product carousels

## 2.2.0 (2020-10-13)
- Updated code as per peregrine cms 2.0
- Added wishlist icons in product card on product carousel
- Fixed: Min height logic for static pages

## 2.1.0 (2020-10-02)
- Updated code to support offline mode
- Updated the code to use cmspage as a storename instead of cmsstore
- Added global max width on static page.
- Implemented DataResolver for making the api calls
- Removed: Overridden styling on home page

## 2.0.0 (2020-08-13)
- Updated module structure as per VSF1.12
- Use Storefront UI for components rendering
- Code cleanup and removed unused and duplicate components

## 1.2.0

### Added
- BannerLeft component for CMS [#32](https://github.com/hotwax/vsf-peregrine/pull/32)
- BannerRight component for CMS [#35](https://github.com/hotwax/vsf-peregrine/pull/35)
- HorizontalTwins component for CMS [#36](https://github.com/hotwax/vsf-peregrine/pull/36)
- TGrid component for CMS [#37](https://github.com/hotwax/vsf-peregrine/pull/37)
- VerticalSet component for CMS [#38](https://github.com/hotwax/vsf-peregrine/pull/38)
- VerticalBannerGrid component for CMS [#39](https://github.com/hotwax/vsf-peregrine/pull/39)
- Newsletter component for CMS [#41](https://github.com/hotwax/vsf-peregrine/pull/41)
- AppStore Link component for CMS [#42](https://github.com/hotwax/vsf-peregrine/pull/42)
- components.adoc file in docs folder [#44](https://github.com/hotwax/vsf-peregrine/pull/44)


### Fixed
- Indentation issues identified by vslint [#34]
- Indentation issues in CSS for the AppStore Link component [#42](https://github.com/hotwax/vsf-peregrine/pull/42)


### Changed / Improved
- Renamed file from VerticalSet to FourCardLayout [#38](https://github.com/hotwax/vsf-peregrine/pull/38)
- Used v-htmlsyntax instead of template syntax [#40](https://github.com/hotwax/vsf-peregrine/pull/40)
- Property names in the Newsletter component [#41](https://github.com/hotwax/vsf-peregrine/pull/41)
- Linking of components and buttons with their URLs [#43](https://github.com/hotwax/vsf-peregrine/pull/43)
- FourCardLayout to add margin and to use LinkMixin in the component [#45](https://github.com/hotwax/vsf-peregrine/pull/45)
- Stored the JSON object in a single property and then using that to get values in the HTML for the FourCardLayout component [#46](https://github.com/hotwax/vsf-peregrine/pull/46)
- Stored the JSON object in a single property and then using that to get values in the HTML for the VerticalGrid component [#47](https://github.com/hotwax/vsf-peregrine/pull/47)
- Stored the JSON object in a single property and then using that to get values in the HTML for the HorizontalTwins component [#48](https://github.com/hotwax/vsf-peregrine/pull/48)
- Stored the JSON object in a single property and then using that to get values in the HTML for the TGrid component [#49](https://github.com/hotwax/vsf-peregrine/pull/49)
- Stored the JSON object in a single property and then using that to get values in the HTML for the AppStore component [#50](https://github.com/hotwax/vsf-peregrine/pull/50)
- Stored the JSON object in a single property and then using that to get values in the HTML for the NewsLetter component [#51](https://github.com/hotwax/vsf-peregrine/pull/51)
- Stored the JSON object in a single property and then using that to get values in the HTML for the BannerLeft component [#52](https://github.com/hotwax/vsf-peregrine/pull/52)
- Stored the JSON object in a single property and then using that to get values in the HTML for the BannerRight component [#53](https://github.com/hotwax/vsf-peregrine/pull/53)


### Removed
- Unused code from the BannerLeft component [#32](https://github.com/hotwax/vsf-peregrine/pull/32)
- Deleted VerticalSet file [#38](https://github.com/hotwax/vsf-peregrine/pull/38)

