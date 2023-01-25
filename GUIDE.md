# MfSearchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

```
moni@moni-pc MINGW64 /d/Workshop/poc/microfrontends/mf-search-app (convert-to-single-spa-mfe)
$ ng add single-spa-angular@7.1.0 --project mf-search-app
ℹ Using package manager: npm
✔ Package information loaded.

The package single-spa-angular@7.1.0 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
? Does your application use Angular routing? Yes
? What port should your project run on? 9502
    Added 'single-spa' as a dependency
    Added 'single-spa-angular' as a dependency
    Added 'style-loader' as a dependency
    Added '@angular-builders/custom-webpack' as a dependency
    Generated 'main.single-spa.ts
    Generated 'single-spa-props.ts
    Generated asset-url.ts
    Generated extra-webpack.config.js
    Using @angular-builders/custom-webpack builder.
    Updated angular.json configuration
    @angular-builders/custom-webpack:browser
    Warning: Since routing is enabled, an additional manual
    configuration will be required, see https://single-spa.js.org/docs/ecosystem-angular/#configure-routes
CREATE extra-webpack.config.js (303 bytes)
CREATE src/main.single-spa.ts (932 bytes)
CREATE src/app/empty-route/empty-route.component.ts (143 bytes)
CREATE src/single-spa/asset-url.ts (502 bytes)
CREATE src/single-spa/single-spa-props.ts (333 bytes)
UPDATE package.json (1438 bytes)
UPDATE tsconfig.app.json (196 bytes)
UPDATE angular.json (3161 bytes)

moni@moni-pc MINGW64 /d/Workshop/poc/microfrontends/mf-search-app (convert-to-single-spa-mfe)
$ npm i

added 17 packages, and audited 950 packages in 11s

87 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

moni@moni-pc MINGW64 /d/Workshop/poc/microfrontends/mf-search-app (convert-to-single-spa-mfe)
$ ng generate module app-routing --flat --module=app
CREATE src/app/app-routing.module.ts (196 bytes)
UPDATE src/app/app.module.ts (1155 bytes)

moni@moni-pc MINGW64 /d/Workshop/poc/microfrontends/mf-search-app (convert-to-single-spa-mfe)
$
```

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component'
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
```

```
moni@moni-pc MINGW64 /d/Workshop/poc/microfrontends/mf-search-app (convert-to-single-spa-mfe)
$ ng generate module app-routing --flat --module=app
CREATE src/app/app-routing.module.ts (196 bytes)
UPDATE src/app/app.module.ts (1155 bytes)

moni@moni-pc MINGW64 /d/Workshop/poc/microfrontends/mf-search-app (convert-to-single-spa-mfe)
$ npm run serve:single-spa:mf-search-app

> mf-search-app@0.0.0 serve:single-spa:mf-search-app
> ng s --project mf-search-app --disable-host-check --port 9502 --live-reload false

Warning: Running a server with --disable-host-check is a security risk. See https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a for more information.
Option "deployUrl" is deprecated: Use "baseHref" option, "APP_BASE_HREF" DI token or a combination of both instead. For more information, see https://angular.io/guide/deployment#the-deploy-url.
    Warning: --deploy-url and/or --base-href contain unsupported values for ng serve. Default serve path of '/' used. Use --serve-path to override.
✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |  Raw Size
main.js             | main          |   6.49 MB |
styles.js           | styles        | 931.09 kB |

                    | Initial Total |   7.40 MB

Build at: 2023-01-09T13:06:04.819Z - Hash: aa4ba53fe07c05f9 - Time: 20162ms

** Angular Live Development Server is listening on localhost:9502, open your browser on http://localhost:9502/ **


√ Compiled successfully.

```
