webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NavBar/index.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/NavBar/index.css ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header > a{\n    margin-top: 1%;\n    font-weight: 400;\n    font-size: 24px;\n    color: #111818;\n}\n\nli{\n    list-style: none;\n}\n\na{\n    text-decoration: none;\n}\n\n.nav-logo{\n  margin-left: 3%;\n}\n\n.linkedIn{\n    height: 70px;\n    border-radius: 50%;\n}\n\n.github{\n    height: 70px;\n}\n\n.resume-image{\n    height: 70px;\n}\n\n.resume-title{\n    font-size:12px;\n    margin-top:0;\n    text-underline-offset: 5px;\n}\n.menu{\n  z-index: 3;\n}\n\n.menu-links{\n    display: flex;\n    justify-content: center;\n    margin-left: 5%;\n}\n\n.header {\n  padding-top: 5%;\n  padding-bottom: 6%;\n  margin-left: -4%;\n  width: 100%;\n  top: 0;\n  z-index: 3;\n  position: fixed;  \n  overflow-y: hidden;\n}\n\n\n  .header ul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    overflow: hidden;\n  }\n  \n  .header li a {\n    display: block;\n    padding: 20px 20px;\n    text-decoration: none;\n    margin-bottom: 20%;\n    margin-top: 5%;\n    font-size: 36px;\n    color: #2E704E;   \n    text-decoration: underline 1px;\n    text-underline-offset: 10px;\n    text-decoration-color: #111818;\n  }\n\n\n  .header .logo {\n    display: block;\n    float: left;\n    font-size: 2em;\n    padding: 10px 20px;\n    text-decoration: none;\n  }\n  \n  \n  /* menu */\n  \n  .header .menu {\n    clear: both;\n    max-height: 0;\n    transition: max-height .0s ease-in-out;\n  }\n  \n  /* menu icon */\n  \n  .header .menu-icon {\n    cursor: pointer;\n    display: inline-block;\n    margin-top: 4%;\n    margin-right: 8%;\n    float: right;\n    position: relative;\n    -webkit-user-select: none;\n            user-select: none;\n  }\n  \n  .header .menu-icon .navicon {\n    background: #2E704E;\n    border-radius: 3px;\n    display: block;\n    height: 2px;\n    position: relative;\n    width: 20px;\n    margin-right: 2%;\n    transform: scaleX(-1);\n  }\n\n\n  \n  .header .menu-icon .navicon:before{\n    background: #111818;\n    content: '';\n    display: block;\n    height: 100%;\n    position: absolute;\n    transition: all 0.3s ease-out;\n  }\n\n  .header .menu-icon .navicon:after {\n\n    background: #111818;\n    content: '';\n    display: block;\n    height: 100%;\n    position: absolute;\n    transition: all 0.3s ease-out;\n  }\n  \n  .header .menu-icon .navicon:before {\n    top: 5px;\n    color: #2E704E;\n    width:24px;\n    border-radius: 0px 3px 0px 3px;\n  }\n  \n  .header .menu-icon .navicon:after {\n    top: -5px;\n    color: #111818;\n    border-radius: 3px 0px 3px 0px;\n    width: 13px;\n  }\n  \n  /* menu btn */\n  \n  .header .menu-btn {\n    display: none;\n  }\n\n\n  .header .menu-btn:checked ~ .menu {\n    max-height: 100%;    \n    text-align: center;\n    font-size: 18px;\n    margin-bottom: 5%;\n  }\n\n  .header .menu-btn:checked ~ .menu ul li {\n      margin-bottom: 5%;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon .navicon {\n    background: transparent;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon .navicon:before {\n    transform: rotate(-45deg);\n    width: 20px;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon .navicon:after {\n    transform: rotate(45deg);\n    width: 20px;\n    background-color: #2E704E;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,\n  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {\n    top: 0;\n\n  }\n\n\n  @media (min-width:64em){\n    .header{\n      height: 8%; \n      overflow-y: none;\n      padding-top: 30px;\n      padding-bottom: 3%;\n    }\n    .menu-links{\n      display: none;\n    }\n    .header ul{\n      margin-top: -1.8%;\n      margin-right: 2%;\n    }\n    \n    .header li a{\n      font-size: 24px;\n      padding: 0;\n      margin: 0;\n    }\n    .menu{\n      top:0;\n      margin-bottom: 0;\n      width: 40%;\n    }\n  }\n  \n  /* 48em = 768px */\n\n  @media (min-width: 31em) and (max-width:49em){\n    .header{\n      height: 8%; \n      overflow-x: none;\n      max-width: 100%;\n      overflow-x: hidden;\n\n    }\n    .header ul{\n      margin-top: -1.8%;\n      margin-right: -2%;\n    }\n    \n\n    .header li a{\n      font-size: 20px;\n      padding: 0;\n      margin: 0;\n    }\n    .nav-logo{\n      margin-top: 2%;\n      height:62px;\n      margin-left: 5%;\n    }\n\n    .menu-links{\n      display: none;\n    }\n    .menu{\n      top:0;\n      margin-bottom: 0;\n      width :70%;\n    }\n\n\n    .header .menu-icon .navicon {\n      display: none;\n    }\n  }\n\n\n\n\n\n  @media (min-width: 49em) and (max-width:64em){\n    .header{\n      height: 8%; \n      overflow-y: auto;\n    }\n    .header ul{\n      margin-top: -1.8%;\n      margin-right: 5%;\n    }\n    \n\n    .header li a{\n      font-size: 22px;\n      padding: 0;\n      margin: 0;\n    }\n    .nav-logo{\n      margin-top: 2%;\n      height:62px;\n      margin-left: 5%;\n    }\n\n    .menu-links{\n      display: none;\n    }\n    .menu{\n      top:0;\n      margin-bottom: 0;\n      width :50%;\n    }\n\n    .menu > li{\n      font-size:24px;\n    }\n\n    .header .menu-icon .navicon {\n      display: none;\n    }\n  }\n\n\n\n  \n  @media (min-width: 30em) {\n    .header li {\n      float: left;\n    }\n    .header li a {\n      padding: 20px 30px;\n    }\n    .header .menu {\n      clear: none;\n      float: right;\n      max-height: none;\n      margin-bottom: 300px;\n\n    }\n    .header .menu-icon {\n      display: none;\n    }\n  }\n  ", "",{"version":3,"sources":["webpack://src/Components/NavBar/index.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,0BAA0B;AAC9B;AACA;EACE,UAAU;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,MAAM;EACN,UAAU;EACV,eAAe;EACf,kBAAkB;AACpB;;;EAGE;IACE,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,cAAc;IACd,8BAA8B;IAC9B,2BAA2B;IAC3B,8BAA8B;EAChC;;;EAGA;IACE,cAAc;IACd,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,qBAAqB;EACvB;;;EAGA,SAAS;;EAET;IACE,WAAW;IACX,aAAa;IACb,sCAAsC;EACxC;;EAEA,cAAc;;EAEd;IACE,eAAe;IACf,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,yBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,qBAAqB;EACvB;;;;EAIA;IACE,mBAAmB;IACnB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;EAC/B;;EAEA;;IAEE,mBAAmB;IACnB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;EAC/B;;EAEA;IACE,QAAQ;IACR,cAAc;IACd,UAAU;IACV,8BAA8B;EAChC;;EAEA;IACE,SAAS;IACT,cAAc;IACd,8BAA8B;IAC9B,WAAW;EACb;;EAEA,aAAa;;EAEb;IACE,aAAa;EACf;;;EAGA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;EACnB;;EAEA;MACI,iBAAiB;EACrB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;IACzB,WAAW;EACb;;EAEA;IACE,wBAAwB;IACxB,WAAW;IACX,yBAAyB;EAC3B;;EAEA;;IAEE,MAAM;;EAER;;;EAGA;IACE;MACE,UAAU;MACV,gBAAgB;MAChB,iBAAiB;MACjB,kBAAkB;IACpB;IACA;MACE,aAAa;IACf;IACA;MACE,iBAAiB;MACjB,gBAAgB;IAClB;;IAEA;MACE,eAAe;MACf,UAAU;MACV,SAAS;IACX;IACA;MACE,KAAK;MACL,gBAAgB;MAChB,UAAU;IACZ;EACF;;EAEA,iBAAiB;;EAEjB;IACE;MACE,UAAU;MACV,gBAAgB;MAChB,eAAe;MACf,kBAAkB;;IAEpB;IACA;MACE,iBAAiB;MACjB,iBAAiB;IACnB;;;IAGA;MACE,eAAe;MACf,UAAU;MACV,SAAS;IACX;IACA;MACE,cAAc;MACd,WAAW;MACX,eAAe;IACjB;;IAEA;MACE,aAAa;IACf;IACA;MACE,KAAK;MACL,gBAAgB;MAChB,UAAU;IACZ;;;IAGA;MACE,aAAa;IACf;EACF;;;;;;EAMA;IACE;MACE,UAAU;MACV,gBAAgB;IAClB;IACA;MACE,iBAAiB;MACjB,gBAAgB;IAClB;;;IAGA;MACE,eAAe;MACf,UAAU;MACV,SAAS;IACX;IACA;MACE,cAAc;MACd,WAAW;MACX,eAAe;IACjB;;IAEA;MACE,aAAa;IACf;IACA;MACE,KAAK;MACL,gBAAgB;MAChB,UAAU;IACZ;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,aAAa;IACf;EACF;;;;;EAKA;IACE;MACE,WAAW;IACb;IACA;MACE,kBAAkB;IACpB;IACA;MACE,WAAW;MACX,YAAY;MACZ,gBAAgB;MAChB,oBAAoB;;IAEtB;IACA;MACE,aAAa;IACf;EACF","sourcesContent":["header > a{\n    margin-top: 1%;\n    font-weight: 400;\n    font-size: 24px;\n    color: #111818;\n}\n\nli{\n    list-style: none;\n}\n\na{\n    text-decoration: none;\n}\n\n.nav-logo{\n  margin-left: 3%;\n}\n\n.linkedIn{\n    height: 70px;\n    border-radius: 50%;\n}\n\n.github{\n    height: 70px;\n}\n\n.resume-image{\n    height: 70px;\n}\n\n.resume-title{\n    font-size:12px;\n    margin-top:0;\n    text-underline-offset: 5px;\n}\n.menu{\n  z-index: 3;\n}\n\n.menu-links{\n    display: flex;\n    justify-content: center;\n    margin-left: 5%;\n}\n\n.header {\n  padding-top: 5%;\n  padding-bottom: 6%;\n  margin-left: -4%;\n  width: 100%;\n  top: 0;\n  z-index: 3;\n  position: fixed;  \n  overflow-y: hidden;\n}\n\n\n  .header ul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    overflow: hidden;\n  }\n  \n  .header li a {\n    display: block;\n    padding: 20px 20px;\n    text-decoration: none;\n    margin-bottom: 20%;\n    margin-top: 5%;\n    font-size: 36px;\n    color: #2E704E;   \n    text-decoration: underline 1px;\n    text-underline-offset: 10px;\n    text-decoration-color: #111818;\n  }\n\n\n  .header .logo {\n    display: block;\n    float: left;\n    font-size: 2em;\n    padding: 10px 20px;\n    text-decoration: none;\n  }\n  \n  \n  /* menu */\n  \n  .header .menu {\n    clear: both;\n    max-height: 0;\n    transition: max-height .0s ease-in-out;\n  }\n  \n  /* menu icon */\n  \n  .header .menu-icon {\n    cursor: pointer;\n    display: inline-block;\n    margin-top: 4%;\n    margin-right: 8%;\n    float: right;\n    position: relative;\n    user-select: none;\n  }\n  \n  .header .menu-icon .navicon {\n    background: #2E704E;\n    border-radius: 3px;\n    display: block;\n    height: 2px;\n    position: relative;\n    width: 20px;\n    margin-right: 2%;\n    transform: scaleX(-1);\n  }\n\n\n  \n  .header .menu-icon .navicon:before{\n    background: #111818;\n    content: '';\n    display: block;\n    height: 100%;\n    position: absolute;\n    transition: all 0.3s ease-out;\n  }\n\n  .header .menu-icon .navicon:after {\n\n    background: #111818;\n    content: '';\n    display: block;\n    height: 100%;\n    position: absolute;\n    transition: all 0.3s ease-out;\n  }\n  \n  .header .menu-icon .navicon:before {\n    top: 5px;\n    color: #2E704E;\n    width:24px;\n    border-radius: 0px 3px 0px 3px;\n  }\n  \n  .header .menu-icon .navicon:after {\n    top: -5px;\n    color: #111818;\n    border-radius: 3px 0px 3px 0px;\n    width: 13px;\n  }\n  \n  /* menu btn */\n  \n  .header .menu-btn {\n    display: none;\n  }\n\n\n  .header .menu-btn:checked ~ .menu {\n    max-height: 100%;    \n    text-align: center;\n    font-size: 18px;\n    margin-bottom: 5%;\n  }\n\n  .header .menu-btn:checked ~ .menu ul li {\n      margin-bottom: 5%;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon .navicon {\n    background: transparent;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon .navicon:before {\n    transform: rotate(-45deg);\n    width: 20px;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon .navicon:after {\n    transform: rotate(45deg);\n    width: 20px;\n    background-color: #2E704E;\n  }\n  \n  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,\n  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {\n    top: 0;\n\n  }\n\n\n  @media (min-width:64em){\n    .header{\n      height: 8%; \n      overflow-y: none;\n      padding-top: 30px;\n      padding-bottom: 3%;\n    }\n    .menu-links{\n      display: none;\n    }\n    .header ul{\n      margin-top: -1.8%;\n      margin-right: 2%;\n    }\n    \n    .header li a{\n      font-size: 24px;\n      padding: 0;\n      margin: 0;\n    }\n    .menu{\n      top:0;\n      margin-bottom: 0;\n      width: 40%;\n    }\n  }\n  \n  /* 48em = 768px */\n\n  @media (min-width: 31em) and (max-width:49em){\n    .header{\n      height: 8%; \n      overflow-x: none;\n      max-width: 100%;\n      overflow-x: hidden;\n\n    }\n    .header ul{\n      margin-top: -1.8%;\n      margin-right: -2%;\n    }\n    \n\n    .header li a{\n      font-size: 20px;\n      padding: 0;\n      margin: 0;\n    }\n    .nav-logo{\n      margin-top: 2%;\n      height:62px;\n      margin-left: 5%;\n    }\n\n    .menu-links{\n      display: none;\n    }\n    .menu{\n      top:0;\n      margin-bottom: 0;\n      width :70%;\n    }\n\n\n    .header .menu-icon .navicon {\n      display: none;\n    }\n  }\n\n\n\n\n\n  @media (min-width: 49em) and (max-width:64em){\n    .header{\n      height: 8%; \n      overflow-y: auto;\n    }\n    .header ul{\n      margin-top: -1.8%;\n      margin-right: 5%;\n    }\n    \n\n    .header li a{\n      font-size: 22px;\n      padding: 0;\n      margin: 0;\n    }\n    .nav-logo{\n      margin-top: 2%;\n      height:62px;\n      margin-left: 5%;\n    }\n\n    .menu-links{\n      display: none;\n    }\n    .menu{\n      top:0;\n      margin-bottom: 0;\n      width :50%;\n    }\n\n    .menu > li{\n      font-size:24px;\n    }\n\n    .header .menu-icon .navicon {\n      display: none;\n    }\n  }\n\n\n\n  \n  @media (min-width: 30em) {\n    .header li {\n      float: left;\n    }\n    .header li a {\n      padding: 20px 30px;\n    }\n    .header .menu {\n      clear: none;\n      float: right;\n      max-height: none;\n      margin-bottom: 300px;\n\n    }\n    .header .menu-icon {\n      display: none;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.fda2b1dfb8d3a5775f78.hot-update.js.map