const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  // singleSpaWebpackConfig.externals.push(
  //   "@angular/animations",
  //   "@angular/common",
  //   "@angular/compiler",
  //   "@angular/core",
  //   "@angular/forms",
  //   "@angular/material",

    // "@angular/material/autocomplete",
    // "@angular/material/badge",
    // "@angular/material/bottom-sheet",
    // "@angular/material/button",
    // "@angular/material/button-toggle",
    // "@angular/material/card",
    // "@angular/material/checkbox",
    // "@angular/material/chips",
    // "@angular/material/stepper",
    // "@angular/material/datepicker",
    // "@angular/material/dialog",
    // "@angular/material/divider",
    // "@angular/material/expansion",
    // "@angular/material/grid-list",
    // "@angular/material/icon",
    // "@angular/material/input",
    // "@angular/material/list",
    // "@angular/material/menu",
    // "@angular/material/core",
    // "@angular/material/paginator",
    // "@angular/material/progress-bar",
    // "@angular/material/progress-spinner",
    // "@angular/material/radio",
    // "@angular/material/select",
    // "@angular/material/sidenav",
    // "@angular/material/slider",
    // "@angular/material/slide-toggle",
    // "@angular/material/snack-bar",
    // "@angular/material/sort",
    // "@angular/material/table",
    // "@angular/material/tabs",
    // "@angular/material/toolbar",
    // "@angular/material/tooltip",
    // "@angular/material/tree",

  //   "@angular/platform-browser",
  //   "@angular/platform-browser-dynamic",
  //   "@angular/router",
  //   "rxjs",
  //   "single-spa",
  //   "single-spa-angular",
  //   "tslib",
  //   "zone.js"
  // );

  return singleSpaWebpackConfig;
};
