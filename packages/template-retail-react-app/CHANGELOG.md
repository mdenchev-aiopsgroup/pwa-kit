## v1.1.0-dev (June 15, 2023)
## v1.0.0 (June 15, 2023)

-   First public release of package on npm under `@salesforce/retail-react-app`
-   Upgrade React v18, React DOM v18, React-hook-form v7, and Chakra 2 libraries [#1166](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1166)
-   Add app `above-header` and product-list `above-page-header` convenience components [#1183](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1183)
-   Migration to "hooks" / `@salesforce/commerce-sdk-react` integration follow the [upgrade guide](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/upgrade-to-v3.html) and [view the diff](https://github.com/SalesforceCommerceCloud/pwa-kit/compare/release-2.7.x...release-3.0.x?diff=unified#files_bucket)

## Older Versions Without Namespace

The older versions below were published without the `@salesforce` namespace.

## v2.7.1 (May 11, 2023)

-   Replace invalid row value with nowrap [#1179](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1179)
-   Add a redirect to login page after user signs out from checkout page [#1172](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1172)
-   PWA Kit should have a mechanism for replacing the access token when a SFRA login state is changed [#1171](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1171)
-   Added session bridge call to login for phased launch [#1159](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1159)
-   Fix Page Designer ImageWithText Link component [#1092](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1092)
-   Remove site alias and locale from location.state.directedFrom path [#1065)](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1065)
-   Product list refinements [#957](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/957)
-   Prevent modal to open when it fails to add an item to cart [#1053](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1053)
-   Make `mergeBasket` conditional more robust [#1048](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1048)
-   Fix addresses not having preferred address first. [#1051](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1051)
-   Changed type of the phone number field to bring up numberic keyboard on mobile devices - W-9871940 [#1016)](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1016)

## v2.7.0 (Mar 03, 2023)

-   Add Page Designer ImageTile component [#967](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/967)
-   Add Page Designer ImageWithText component [#991](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/991)
-   Add Page Designer carousel component [#977](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/977)
-   Add Page Designer layout components [#993](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/993)
-   Support the product-set type [#1019](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/1019)

## v2.6.0 (Jan 25, 2023)

-   Mega menu fixes [#875](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/875) and [#910](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/910)
-   Cache SLAS callback using request processor [#884](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/884)
-   Fix padding of footer drawer component [#899](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/899)
-   Update createOrder to send SLAS USID [#920](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/920)
-   Fix PropTypes [#924](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/924)
-   Remove unnecessary map statement [#929](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/929)

## v2.5.0 (Jan 5, 2023)

-   Add instanceType to Einstein activity body [#858](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/858)
-   Do not use a proxy to call Einstein [#857](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/857)
-   Einstein handle variants [#867](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/867)
-   Fix cc exp year [#874](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/874)

## v2.4.0 (Dec 1, 2022)

-   Dynamic footer Copyright date [#741](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/741)
-   Footer copyright: remove the remaining hardcoded year [#760](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/760)
-   ImageGallery uses image.link when DIS is not set [#786](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/786)
-   Use default locale as target if none is specified [#788](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/788)
-   Password change bug fix [#803](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/803)
-   pwa-kit-dev command for tailing logs [#789](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/789)
-   Update usages of zzrf-001 ODS instance to the new short URL format [#816](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/816)

## v2.3.0 (Oct 27, 2022)

-   Fix locale `alias` by including `locale` object inside the MultiSite Context. [#716](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/716)
-   Updated translations. [#725](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/725)
-   Add new Einstein API activities. [#714](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/714)
-   Fix search field to recognize `“&”` character. [#736](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/736)
-   Fix filters on search results page. [#742](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/742)
-   Dynamic footer copyright date. [#741](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/741)
-   Bugfix: image gallery thumbnails not working without DIS [#786](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/786)
-   Ensure that a valid target locale is use if none is provided [#788](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/788)

## v2.2.0 (Aug 25, 2022)

-   Update zzrf-001 url [#694](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/694)
-   Optimize Server-side performance [#667](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/667)
-   Remove references to session bridging [#684](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/684)

## v2.1.0 (Jul 05, 2022)

-   Update translations [#643](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/643)
-   Update translations [#653](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/653)
-   Add bundlesize test back into CI [#652](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/652)
-   Fix UI bug on notifications badge [#620](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/620)

## v2.0.0 (May 16, 2022)

-   Update translation docs [#570](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/570)
-   Fixed loading correct amount of skeletons [#576] (https://github.com/SalesforceCommerceCloud/pwa-kit/pull/576)
-   Remove manifest path [#582](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/582)
-   Fix Verbose ShellJS Command [#588](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/588)
-   Drop node 12 support for [#589](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/589)
-   Multi-site, Fix the case when no site aliases is set [#551](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/551)
-   Fix invalid refresh token [#528](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/528)
-   Add valid token check before using refresh token on login [#533](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/533)
-   Fix localization scripts to output to the correct default locale [#539](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/539)
-   Merge guest cart and registered cart [#540](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/540)
-   Move retail react app jest setup out from pwa-kit-dev [#545](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/545)
-   Remove legacy remote proxy, which allowed remote environments to use proxy configs in package.json [#425](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/425)
-   Rename 'pwa' directory into 'template-retail-react-app' [#485](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/485)
-   Optimize visibility-off.svg [#512](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/512)
-   Support Multi-site implementation using dynamic config [#469](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/469)
-   Service worker loading for dev server [#464](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/464)
-   Environment Specific Configuration Support [#477](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/447)

## v1.5.0 (Mar 17, 2022)

-   Support storing authentication tokens in cookie [#429](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/429)
-   Make sure the forgot-password modal also shows up in the checkout flow [#373](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/373)
-   On Windows, the locale selector dropdown in the footer now showing all of the options properly [#381](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/381)
-   Import cross-fetch to make OCAPI client isomorphic [#382](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/382)
-   Multi-site implementation for Retail React App [#391](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/391)

## v1.4.0 (Jan 27, 2022)

-   Do not send HSTS header during local development [#288](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/288)
-   Add constants for `<meta>` tags `theme-color` and `apple-mobile-web-app-title` [#287](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/287)
-   Upgrade to React 17 [#278](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/278)
-   Import preliminary translations [#324](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/324)
-   Remove old dependencies that are no longer used [#317](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/317)

## v1.3.0 (Jan 06, 2022)

-   Remove Einstein from home page [#208](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/208)
-   Add git2gus config to allow git2gus integration [210](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/210)
-   Set common HTTP security headers [#263](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/263)
-   Add message ids to all the translated text, so they provide context for the translators [#239](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/239) [#207](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/207) [#195](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/195)
-   Minor translation fixes [260](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/260) [#252](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/252)
-   Provide Url Customization for the Retail React App [#228](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/228/files)
-   Add an image component to allow for easier-implementation of responsive images [#186](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/186)
-   Add shop Products section with products from the Catalog [#216](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/216)
-   Remove `upgrade-insecure-requests` for local development [#270](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/270)
-   Fix the missing out-of-stock message on mobile screens [#231](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/231)
-   Fix order summary prices on the check out page misaligned on mobile [#233](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/233)
-   Skip irrelevant jobs on CI on forked PR [#237](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/237) [#240](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/240)
-   Add webpack plugin [#255](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/255)
-   Combine config files [#256](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/256)
-   Improve unsupported locale error message [#225](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/225)
-   Add github template [#226](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/226)
-   Fix shipping method description overflows the price section [#232](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/232)
-   Fix show applied promotion codes case sensitive issue [#224](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/224)
-   Fix section subtitle incorrect prop warning [#282](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/282)

## v1.2.0 (Nov 18, 2021)

-   Simplify homepage for Retail React App [#201](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/201)
-   Ensure `cookieId` value is sent always for Einstein recommendations [#179](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/179)
-   Remove `x-powered-by` HTTP response header [#165](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/165)
-   For search engine crawlers, add `hreflang` links to the current page's html [#137](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/137)
-   Use the preferred currency when switching locales. [#105](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/105)
-   Integrate wishlist with einstein recommended products. [#131](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/131)
-   When adding a new locale, minimize configuring the locale selector UI by having a list of commonly-used locales [#175](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/175)
-   Enable adding wishlist item to the cart. [#158](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/158)
-   Rename CartItemVariant to ItemVariantProvider [#155](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/155)
-   Enabling pseudo locale now affects only the loading of the translation messages. The rest of the app still knows about English and the other locales. [#177](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/177)
-   Allow individual Commerce API calls to pass in a different locale/currency and override the global value. [#177](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/177)
-   Fix regression with loading the correct translation file [#193](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/193)
-   Upgrade `chakra-ui/react` to `^1.7.1` version. [#204](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/204)
-   Rename the `extract-messages` and `compile-messages` commands to `extract-default-translations` and `compile-translations` [#160](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/160)
-   Enable favourite icons on product tiles for guest users [#173](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/173)
-   Fix Missing Locale Param for Commerce API Calls [#174](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/174)
-   Add cache control header to product details page [#172](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/172)
-   Clear SLAS tokens when OID is changed [#178](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/178)

## v1.1.0 (Sep 27, 2021)

-   Fix wishlist bugs and provide better hooks for wishlist features. [#64](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/64)
-   Lazy load Popover component. [#134](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/134)
-   Fix pseudo local command to use `en-XB`. [#101](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/101)
-   Ensure generated projects ship with a working .gitignore file. [#95](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/95)
-   Remove eslint rule which check for Salesforce copyright. [#104](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/104)
-   Improve error page design. [#74](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/74)
-   Localize cart and checkout messages. [#106](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/106)
-   Add default cache control header to home page. [#103](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/103)
-   Security - `inquirer` package upgrade. [#121](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/121)
-   New quantity picker. [#102](https://github.com/SalesforceCommerceCloud/pwa-kit/pull/102)

## v1.0.0 (Sep 08, 2021)

-   PWA Kit General Availability and open source. 🎉
