# starter-kit-angular
Starter Kit for Angular v1.

## Usage:

**Just use this kit as base code to start your Angular project**

* Entry page: /app/index.html
* All source files will be bundled into /app/dist/
* Use Webpack 2 to bundle files
* Use LESS for CSS pre-process, but you can choose on your own such as SASS.

### bundle all files

```
npm run dist
```

### start webpack dev server

```
npm run dev
```

You can also use the following command to bundle all files and then start dev server.

```
npm start
```

___

## Structure

```
starter-kit-angular/
 ├──app/
 |   ├──dist/                      * all bundles
 |   └──index.html                 * entry page
 │
 ├──src/                           * source files that will be all bundled to /app/dist/
 |   ├──critical.js                * critical process, such as page loading styles
 |   ├──critical.less              * critical styles
 │   │
 |   ├──main.js
 |   ├──main.less
 │   │
 │   ├──_core-less/                * core Less files
 │   │   ├──_include.less          * include all base Less files, you can include this file in all your Less files
 │   │   ├──color.less             * color configurations
 │   │   ├──tools.less             * base mixins
 │   │   └──variables.ts           * other configurations
 │   │
 │   └──_webpack/                  * webpack configuration
 │       ├──_base.js
 │       ├──dev.js                 * will use this config for development environment
 │       └──dist.js                * will use this config for production environment
 │
 └──webpack.config.js              * webpack main configuration file

```

## Services and Controllers

You will noticed that there're `_services` and `test` folder under `src`. These are used for my strategy for bundling services and controllers.

1. Services and Controllers names are defined in `src/main.js` in array `services` and `controllers`.
2. The process will find `src/_services/${serviceName}.js` for the service by that name and `src/${controllerName}/controller.js` for the controller by that name and then bundle them.

___

# License
 [MIT](/LICENSE)