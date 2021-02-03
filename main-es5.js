function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/auth/_guards/auth.guard */
    "./src/app/core/auth/_guards/auth.guard.ts");
    /* harmony import */


    var _views_theme_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/theme/base/base.component */
    "./src/app/views/theme/base/base.component.ts");
    /* harmony import */


    var _views_pages_boarding_subs_facial_recognition_facial_recognition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./views/pages/boarding/_subs/facial-recognition/facial-recognition.component */
    "./src/app/views/pages/boarding/_subs/facial-recognition/facial-recognition.component.ts");

    var routes = [{
      path: 'iniciar',
      component: _views_pages_boarding_subs_facial_recognition_facial_recognition_component__WEBPACK_IMPORTED_MODULE_4__["FacialRecognitionComponent"]
    }, {
      path: 'oops',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-pages-error-error-module */
        "views-pages-error-error-module").then(__webpack_require__.bind(null,
        /*! ./views/pages/error/error.module */
        "./src/app/views/pages/error/error.module.ts")).then(function (m) {
          return m.ErrorModule;
        });
      }
    }, {
      path: '',
      component: _views_theme_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"],
      canActivate: [_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: 'boarding',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-pages-boarding-boarding-module */
          "views-pages-boarding-boarding-module").then(__webpack_require__.bind(null,
          /*! ./views/pages/boarding/boarding.module */
          "./src/app/views/pages/boarding/boarding.module.ts")).then(function (m) {
            return m.BoardingModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'boarding',
        pathMatch: 'full'
      }]
    }, {
      path: '**',
      redirectTo: 'oops',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["iRoute", ""];

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'iRoute';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["body", "iRoute", ""]],
      attrs: _c0,
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGV2ZXIucm9qYXNcXERlc2t0b3BcXEFycXVldGlwb1xcaVJvdXRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10YWItaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbiIsIi5leGFtcGxlLXRhYi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: 'body[iRoute]',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _views_theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./views/theme/theme.module */
    "./src/app/views/theme/theme.module.ts");
    /* harmony import */


    var _views_pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./views/pages/auth/auth.module */
    "./src/app/views/pages/auth/auth.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _views_theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"], _views_pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _views_theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"], _views_pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _views_theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"], _views_pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/_base/models/audit.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/_base/models/audit.model.ts ***!
    \**************************************************/

  /*! exports provided: AuditModel */

  /***/
  function srcAppCore_baseModelsAuditModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditModel", function () {
      return AuditModel;
    });

    var AuditModel = /*#__PURE__*/function () {
      function AuditModel() {
        _classCallCheck(this, AuditModel);
      }

      _createClass(AuditModel, [{
        key: "clear",
        value: function clear() {
          this.Cliente = '';
          this.Token = '';
          this.IdAcceso = '';
          this.TipoAcceso = '';
          this.UsuarioFinal = '';
        }
      }]);

      return AuditModel;
    }();
    /***/

  },

  /***/
  "./src/app/core/_base/services/audit.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/_base/services/audit.service.ts ***!
    \******************************************************/

  /*! exports provided: AuditService */

  /***/
  function srcAppCore_baseServicesAuditServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditService", function () {
      return AuditService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var guid_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! guid-typescript */
    "./node_modules/guid-typescript/dist/guid.js");
    /* harmony import */


    var guid_typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _models_audit_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/audit.model */
    "./src/app/core/_base/models/audit.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var Cliente = 'WebOnboarding';
    var UsuarioFonalIni = 'Desconocido';
    var VarName = 'Audit';

    var AuditService = /*#__PURE__*/function () {
      function AuditService(router, http) {
        _classCallCheck(this, AuditService);

        this.router = router;
        this.http = http;
      }

      _createClass(AuditService, [{
        key: "star",
        value: function star() {
          var tempAudit = new _models_audit_model__WEBPACK_IMPORTED_MODULE_2__["AuditModel"]();
          tempAudit.clear();
          this.getIPAddress().subscribe(function (next) {
            tempAudit.Cliente = Cliente;
            tempAudit.IdAcceso = next.ip;
            tempAudit.TipoAcceso = 'IP';
            tempAudit.Token = String(guid_typescript__WEBPACK_IMPORTED_MODULE_1__["Guid"].create());
            tempAudit.UsuarioFinal = UsuarioFonalIni;
            sessionStorage.setItem(VarName, btoa(JSON.stringify(tempAudit)));
            return tempAudit;
          });
        }
      }, {
        key: "getAudit",
        value: function getAudit() {
          if (sessionStorage.getItem(VarName) !== null) {
            var guardado = atob(sessionStorage.getItem(VarName));
            return JSON.parse(guardado);
          } else {
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "setFinalUser",
        value: function setFinalUser(user) {
          var tempAudit = this.getAudit();
          tempAudit.UsuarioFinal = user;
          sessionStorage.setItem(VarName, btoa(JSON.stringify(tempAudit)));
        }
      }, {
        key: "getVarName",
        value: function getVarName() {
          return VarName;
        }
      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          // return  res.ip;
          return this.http.get('https://api.ipify.org/?format=json');
        }
      }]);

      return AuditService;
    }();

    AuditService.ɵfac = function AuditService_Factory(t) {
      return new (t || AuditService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AuditService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuditService,
      factory: AuditService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/_base/services/config.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/_base/services/config.service.ts ***!
    \*******************************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppCore_baseServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var VarName = '_config';

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService(router) {
        _classCallCheck(this, ConfigService);

        this.router = router;
      }

      _createClass(ConfigService, [{
        key: "getAll",
        value: function getAll() {
          if (localStorage.getItem(VarName) !== null) {
            var guardado = atob(localStorage.getItem(VarName));
            return JSON.parse(guardado);
          } else {
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "getValue",
        value: function getValue(parametro) {
          var b = this.getAll();
          var resutl = b.find(function (a) {
            return a.Parametro === parametro;
          });
          return resutl.Valor;
        }
      }, {
        key: "getVarName",
        value: function getVarName() {
          return VarName;
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ɵfac = function ConfigService_Factory(t) {
      return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigService,
      factory: ConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/auth/_guards/auth.guard.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/auth/_guards/auth.guard.ts ***!
    \*************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreAuth_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _base_services_audit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_base/services/audit.service */
    "./src/app/core/_base/services/audit.service.ts"); // Angular


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, auditService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.auditService = auditService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          // const loggedIn = true; !loggedIn ||
          if (!(sessionStorage.getItem(this.auditService.getVarName()) !== null)) {
            this.router.navigateByUrl('/iniciar');
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_services_audit_service__WEBPACK_IMPORTED_MODULE_2__["AuditService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _base_services_audit_service__WEBPACK_IMPORTED_MODULE_2__["AuditService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/boarding/_models/conyuge.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/boarding/_models/conyuge.model.ts ***!
    \********************************************************/

  /*! exports provided: ConyugeModel */

  /***/
  function srcAppCoreBoarding_modelsConyugeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConyugeModel", function () {
      return ConyugeModel;
    });

    var ConyugeModel = /*#__PURE__*/function () {
      function ConyugeModel() {
        _classCallCheck(this, ConyugeModel);
      }

      _createClass(ConyugeModel, [{
        key: "clear",
        value: function clear() {
          this.Cedula = '';
          this.Nombres = '';
        }
      }]);

      return ConyugeModel;
    }();
    /***/

  },

  /***/
  "./src/app/core/boarding/_models/datos-aspirante.model.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/boarding/_models/datos-aspirante.model.ts ***!
    \****************************************************************/

  /*! exports provided: DatosAspiranteModel */

  /***/
  function srcAppCoreBoarding_modelsDatosAspiranteModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosAspiranteModel", function () {
      return DatosAspiranteModel;
    });
    /* harmony import */


    var _conyuge_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./conyuge.model */
    "./src/app/core/boarding/_models/conyuge.model.ts");
    /* harmony import */


    var _domicilio_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./domicilio.model */
    "./src/app/core/boarding/_models/domicilio.model.ts");
    /* harmony import */


    var _informacion_economica_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./informacion-economica.model */
    "./src/app/core/boarding/_models/informacion-economica.model.ts");
    /* harmony import */


    var _residencia_fiscal_extranjero_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./residencia-fiscal-extranjero.model */
    "./src/app/core/boarding/_models/residencia-fiscal-extranjero.model.ts");

    var DatosAspiranteModel = /*#__PURE__*/function () {
      function DatosAspiranteModel() {
        _classCallCheck(this, DatosAspiranteModel);
      }

      _createClass(DatosAspiranteModel, [{
        key: "clear",
        value: function clear() {
          this.Cedula = '';
          this.CodigoDactilar = '';
          this.SelfieVida = false;
          this.Fotos = [];
          this.Nombres = '';
          this.Apellidos = '';
          this.FechaNacimiento = new Date();
          this.CodPaisNacionalidad = '';
          this.EstadoCivil = '';
          this.Conyuge = new _conyuge_model__WEBPACK_IMPORTED_MODULE_0__["ConyugeModel"]();
          this.Celular = '';
          this.CorreoElectronico = '';
          this.Domicilio = new _domicilio_model__WEBPACK_IMPORTED_MODULE_1__["DomicilioModel"]();
          this.InformacionEconomica = new _informacion_economica_model__WEBPACK_IMPORTED_MODULE_2__["InformacionEconomicaModel"]();
          this.ReferenciasPersonales = [];
          this.TieneCuentasSistemaFinancieroNacional = false;
          this.ReferenciasBancarias = [];
          this.TieneResidFiscalExtranjero = false;
          this.ResidFiscalExtranjero = new _residencia_fiscal_extranjero_model__WEBPACK_IMPORTED_MODULE_3__["ResidenciaFiscalExtranjeroModel"]();
        }
      }]);

      return DatosAspiranteModel;
    }();
    /***/

  },

  /***/
  "./src/app/core/boarding/_models/domicilio.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/boarding/_models/domicilio.model.ts ***!
    \**********************************************************/

  /*! exports provided: DomicilioModel */

  /***/
  function srcAppCoreBoarding_modelsDomicilioModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomicilioModel", function () {
      return DomicilioModel;
    });

    var DomicilioModel = /*#__PURE__*/function () {
      function DomicilioModel() {
        _classCallCheck(this, DomicilioModel);
      }

      _createClass(DomicilioModel, [{
        key: "clear",
        value: function clear() {
          this.Provincia = '';
          this.Canton = '';
          this.Parroquia = '';
          this.CodProvincia = '';
          this.CodCanton = '';
          this.CodParroquia = '';
          this.Direccion = '';
          this.Referencia = '';
          this.Coordenadas = '';
          this.CodigoArea = '';
          this.Telefono = '';
          this.TipoVivienda = '';
          this.ValorVivienda = 0;
          this.TiempoResidencia = 0;
        }
      }]);

      return DomicilioModel;
    }();
    /***/

  },

  /***/
  "./src/app/core/boarding/_models/informacion-economica.model.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/core/boarding/_models/informacion-economica.model.ts ***!
    \**********************************************************************/

  /*! exports provided: InformacionEconomicaModel */

  /***/
  function srcAppCoreBoarding_modelsInformacionEconomicaModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformacionEconomicaModel", function () {
      return InformacionEconomicaModel;
    });

    var InformacionEconomicaModel = /*#__PURE__*/function () {
      function InformacionEconomicaModel() {
        _classCallCheck(this, InformacionEconomicaModel);
      }

      _createClass(InformacionEconomicaModel, [{
        key: "clear",
        value: function clear() {
          this.NivelEstudios = '';
          this.RelacionLaboral = '';
          this.ActividadEconomica = '';
          this.FechaIngresoLaboralActual = new Date();
          this.FechaJubilacion = new Date();
          this.FechaInicioNegocio = new Date();
          this.MontoIngresosMensuales = 0;
          this.MontoVentasAnuales = 0;
          this.MontoEgresosMensuales = 0;
          this.MontoTotalActivos = 0;
          this.MontoTotalPasivos = 0;
          this.TieneOtrosIngresos = false;
          this.MontoOtrosIngresos = 0;
          this.FuenteOtrosIngresos = '';
        }
      }]);

      return InformacionEconomicaModel;
    }();
    /***/

  },

  /***/
  "./src/app/core/boarding/_models/residencia-fiscal-extranjero.model.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/core/boarding/_models/residencia-fiscal-extranjero.model.ts ***!
    \*****************************************************************************/

  /*! exports provided: ResidenciaFiscalExtranjeroModel */

  /***/
  function srcAppCoreBoarding_modelsResidenciaFiscalExtranjeroModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResidenciaFiscalExtranjeroModel", function () {
      return ResidenciaFiscalExtranjeroModel;
    });

    var ResidenciaFiscalExtranjeroModel = /*#__PURE__*/function () {
      function ResidenciaFiscalExtranjeroModel() {
        _classCallCheck(this, ResidenciaFiscalExtranjeroModel);
      }

      _createClass(ResidenciaFiscalExtranjeroModel, [{
        key: "clear",
        value: function clear() {
          this.CodPais = '';
          this.Direccion = '';
          this.IdentificacionTributaria = '';
        }
      }]);

      return ResidenciaFiscalExtranjeroModel;
    }();
    /***/

  },

  /***/
  "./src/app/core/boarding/_models/validarAspiranteResponse.model.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/core/boarding/_models/validarAspiranteResponse.model.ts ***!
    \*************************************************************************/

  /*! exports provided: ValidarAspiranteResponseModel */

  /***/
  function srcAppCoreBoarding_modelsValidarAspiranteResponseModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidarAspiranteResponseModel", function () {
      return ValidarAspiranteResponseModel;
    });
    /* harmony import */


    var _datos_aspirante_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./datos-aspirante.model */
    "./src/app/core/boarding/_models/datos-aspirante.model.ts");

    var ValidarAspiranteResponseModel = /*#__PURE__*/function () {
      function ValidarAspiranteResponseModel() {
        _classCallCheck(this, ValidarAspiranteResponseModel);
      }

      _createClass(ValidarAspiranteResponseModel, [{
        key: "clear",
        value: function clear() {
          this.EsCliente = false;
          this.DatosAspirante = new _datos_aspirante_model__WEBPACK_IMPORTED_MODULE_0__["DatosAspiranteModel"]();
        }
      }]);

      return ValidarAspiranteResponseModel;
    }();
    /***/

  },

  /***/
  "./src/app/core/boarding/_services/_resolvers/general-config-resolver.service.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/core/boarding/_services/_resolvers/general-config-resolver.service.ts ***!
    \***************************************************************************************/

  /*! exports provided: GeneralConfigResolverService */

  /***/
  function srcAppCoreBoarding_services_resolversGeneralConfigResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralConfigResolverService", function () {
      return GeneralConfigResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../parameters.service */
    "./src/app/core/boarding/_services/parameters.service.ts");
    /* harmony import */


    var _base_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../_base/services/config.service */
    "./src/app/core/_base/services/config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GeneralConfigResolverService = /*#__PURE__*/function () {
      function GeneralConfigResolverService(paramsService, cs, router) {
        _classCallCheck(this, GeneralConfigResolverService);

        this.paramsService = paramsService;
        this.cs = cs;
        this.router = router;
      }

      _createClass(GeneralConfigResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
          /* return this.paramsService.GetParameters().pipe(
            take(1),
            mergeMap(crisis => {
              if (crisis) {
                localStorage.setItem(this.cs.getVarName(), btoa(JSON.stringify(crisis)));
                return of(crisis);
              } else {
                this.router.navigate(['/oops']);
                return EMPTY;
              }
            })
          ); */
        }
      }]);

      return GeneralConfigResolverService;
    }();

    GeneralConfigResolverService.ɵfac = function GeneralConfigResolverService_Factory(t) {
      return new (t || GeneralConfigResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_parameters_service__WEBPACK_IMPORTED_MODULE_2__["ParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    GeneralConfigResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GeneralConfigResolverService,
      factory: GeneralConfigResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralConfigResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _parameters_service__WEBPACK_IMPORTED_MODULE_2__["ParametersService"]
        }, {
          type: _base_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/boarding/_services/parameters.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/boarding/_services/parameters.service.ts ***!
    \***************************************************************/

  /*! exports provided: ParametersService */

  /***/
  function srcAppCoreBoarding_servicesParametersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametersService", function () {
      return ParametersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ParametersService = /*#__PURE__*/function () {
      function ParametersService(http) {
        _classCallCheck(this, ParametersService);

        this.http = http;
        this.apiUrl = 'http://192.168.33.12:81';
        this.parameters = '/api/GetParametros';
        this.initialParameters = '/api/ConParametrosIniciales';
      }

      _createClass(ParametersService, [{
        key: "GetParameters",
        value: function GetParameters() {
          var endpointUrl = "".concat(this.urlParameters);
          return this.http.get(endpointUrl);
        }
      }, {
        key: "GetInitialParameters",
        value: function GetInitialParameters(body) {
          var endpointUrl = "".concat(this.urlInitialParameters);
          return this.http.post(endpointUrl, body);
        }
      }, {
        key: "urlParameters",
        get: function get() {
          return this.apiUrl + this.parameters;
        }
      }, {
        key: "urlInitialParameters",
        get: function get() {
          return this.apiUrl + this.initialParameters;
        }
      }]);

      return ParametersService;
    }();

    ParametersService.ɵfac = function ParametersService_Factory(t) {
      return new (t || ParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ParametersService,
      factory: ParametersService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/boarding/_services/references.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/boarding/_services/references.service.ts ***!
    \***************************************************************/

  /*! exports provided: ReferencesService */

  /***/
  function srcAppCoreBoarding_servicesReferencesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferencesService", function () {
      return ReferencesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ReferencesService = /*#__PURE__*/function () {
      function ReferencesService(http) {
        _classCallCheck(this, ReferencesService);

        this.http = http;
        this.apiUrl = 'http://192.168.33.12:81';
        this.tiposTelefono = '/api/ConTiposTelefono';
        this.entidadesFinancieras = '/api/ConEntidadesFinancieras';
        this.tiposProductos = '/api/ConTiposProducto';
        this.validarAspiranteCuentaDigital = '/api/ValidarAspiranteCuentaDigital';
        this.codigoActivacion = '/api/CodigoActivacion';
      }

      _createClass(ReferencesService, [{
        key: "ConsultaTiposTelefono",
        value: function ConsultaTiposTelefono(body) {
          var endpointUrl = "".concat(this.urlTiposTelefono);
          return this.http.post(endpointUrl, body);
        }
      }, {
        key: "ConsultaEntidadesFinancieras",
        value: function ConsultaEntidadesFinancieras(body) {
          var endpointUrl = "".concat(this.urlEntidadesFinancieras);
          return this.http.post(endpointUrl, body);
        }
      }, {
        key: "ConsultaTiposProductos",
        value: function ConsultaTiposProductos(body) {
          var endpointUrl = "".concat(this.urlTiposProductos);
          return this.http.post(endpointUrl, body);
        }
      }, {
        key: "ConsultaValidarAspiranteCuentaDigital",
        value: function ConsultaValidarAspiranteCuentaDigital(body) {
          var endpointUrl = "".concat(this.urlValidarAspiranteCuentaDigital);
          return this.http.post(endpointUrl, body);
        }
      }, {
        key: "ConsultaCodigoActivacion",
        value: function ConsultaCodigoActivacion(body) {
          var endpointUrl = "".concat(this.urlCodigoActivacion);
          return this.http.post(endpointUrl, body);
        }
      }, {
        key: "urlTiposTelefono",
        get: function get() {
          return this.apiUrl + this.tiposTelefono;
        }
      }, {
        key: "urlEntidadesFinancieras",
        get: function get() {
          return this.apiUrl + this.entidadesFinancieras;
        }
      }, {
        key: "urlTiposProductos",
        get: function get() {
          return this.apiUrl + this.tiposProductos;
        }
      }, {
        key: "urlValidarAspiranteCuentaDigital",
        get: function get() {
          return this.apiUrl + this.validarAspiranteCuentaDigital;
        }
      }, {
        key: "urlCodigoActivacion",
        get: function get() {
          return this.apiUrl + this.codigoActivacion;
        }
      }]);

      return ReferencesService;
    }();

    ReferencesService.ɵfac = function ReferencesService_Factory(t) {
      return new (t || ReferencesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ReferencesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReferencesService,
      factory: ReferencesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/pages/auth/auth.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/views/pages/auth/auth.component.ts ***!
    \****************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppViewsPagesAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _finger_code_finger_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finger-code/finger-code.component */
    "./src/app/views/pages/auth/finger-code/finger-code.component.ts");
    /* harmony import */


    var _statements_statements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./statements/statements.component */
    "./src/app/views/pages/auth/statements/statements.component.ts");
    /* harmony import */


    var src_app_core_base_models_audit_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/_base/models/audit.model */
    "./src/app/core/_base/models/audit.model.ts");
    /* harmony import */


    var src_app_core_boarding_models_validarAspiranteResponse_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/boarding/_models/validarAspiranteResponse.model */
    "./src/app/core/boarding/_models/validarAspiranteResponse.model.ts");
    /* harmony import */


    var _core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../core/_base/services/audit.service */
    "./src/app/core/_base/services/audit.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_core_boarding_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/core/boarding/_services/references.service */
    "./src/app/core/boarding/_services/references.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _core_base_services_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../core/_base/services/config.service */
    "./src/app/core/_base/services/config.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    function AuthComponent_mat_error_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "* Este campo es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingrese 10 d\xEDgitos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingrese solo n\xFAmeros");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "* Este campo es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingrese 10 caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "* Este campo es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_120_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingrese 10 d\xEDgitos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_121_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingrese solo n\xFAmeros");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "* Este campo es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_mat_error_130_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese 10 caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "check-error": a0
      };
    };

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(auditService, dialog, fb, router, coreService, sanitizer, route, configS) {
        _classCallCheck(this, AuthComponent);

        this.auditService = auditService;
        this.dialog = dialog;
        this.fb = fb;
        this.router = router;
        this.coreService = coreService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.configS = configS;
        this.divInicioMobile = true;
        this.alertaError = true;
        this.checkClass = false;
        this.body = {
          Cliente: 'POSTMAN',
          Token: '123',
          IdAcceso: '10.150.0.142',
          UsuarioFinal: 'PRUEBA LOCAL'
        };
        this.formulario = fb.group({
          cedula: [{
            value: '',
            disabled: false
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
          codigoDactilar: [{
            value: '',
            disabled: false
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
          checkAutorizo: [{
            value: false,
            disabled: false
          }]
        });
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    document.oncontextmenu = function () {
                      return false;
                    };

                    this.screenWidth = screen.width;

                    if (this.screenWidth <= 768) {
                      setTimeout(function () {
                        this.divInicioMobile = false;
                      }.bind(this), 3000);
                    }

                    this.msgBienvenida = this.configS.getValue('MENSAJE_BIENVENIDA');
                    this.numeroContacto = this.configS.getValue('NUM_CALL_CENTER');
                    this.auditService.star();
                    this.auditModel = new src_app_core_base_models_audit_model__WEBPACK_IMPORTED_MODULE_5__["AuditModel"]();
                    this.auditModel.clear();
                    this.validarAspiranteResponse = new src_app_core_boarding_models_validarAspiranteResponse_model__WEBPACK_IMPORTED_MODULE_6__["ValidarAspiranteResponseModel"]();
                    this.validarAspiranteResponse.clear();
                    this.auditModel = this.auditService.getAudit();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fingerCode",
        value: function fingerCode() {
          var dialogRef = this.dialog.open(_finger_code_finger_code_component__WEBPACK_IMPORTED_MODULE_3__["FingerCodeComponent"], {
            maxHeight: '90vh',
            maxWidth: '90vw'
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
              return;
            }
          });
        }
      }, {
        key: "statements",
        value: function statements() {
          var dialogRef = this.dialog.open(_statements_statements_component__WEBPACK_IMPORTED_MODULE_4__["StatementsComponent"], {
            maxHeight: '90vh',
            maxWidth: '90vw'
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
              return;
            }
          });
        }
      }, {
        key: "logIn",
        value: function logIn() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var body;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.validateCI(this.formulario.get('cedula').value)) {
                      _context2.next = 16;
                      break;
                    }

                    if (!this.formulario.get('checkAutorizo').value) {
                      _context2.next = 11;
                      break;
                    }

                    // Aqui se debe cambiar this.body por this.auditModel
                    body = {
                      Auditoria: this.body,
                      Cedula: this.formulario.get('cedula').value,
                      CodigoDactilar: this.formulario.get('codigoDactilar').value,
                      AutorizacionConsulta: this.formulario.get('checkAutorizo').value
                    };
                    _context2.next = 5;
                    return this.coreService.ConsultaValidarAspiranteCuentaDigital(body).toPromise();

                  case 5:
                    this.validarAspiranteResponse = _context2.sent;
                    sessionStorage.setItem('ValidaAspirante', JSON.stringify(this.validarAspiranteResponse));
                    this.auditService.setFinalUser(this.validarAspiranteResponse.DatosAspirante.Nombres + ' ' + this.validarAspiranteResponse.DatosAspirante.Apellidos);
                    this.router.navigateByUrl('/boarding');
                    _context2.next = 14;
                    break;

                  case 11:
                    this.msgAlertaError = 'Cliente no ha autorizado su consulta';
                    this.alertaError = false;
                    this.checkClass = true;

                  case 14:
                    _context2.next = 19;
                    break;

                  case 16:
                    this.msgAlertaError = 'Número de Cédula Erróneo';
                    this.alertaError = false;
                    this.checkClass = false;

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "cerrarAlertaError",
        value: function cerrarAlertaError() {
          this.alertaError = true;
        }
      }, {
        key: "validateKey",
        value: function validateKey(evt) {
          var code = evt.which ? evt.which : evt.keyCode;

          if (code == 8) {
            return true;
          } else if (code >= 48 && code <= 57) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "validateCI",
        value: function validateCI(ced) {
          var total = 0;
          var length = 10;
          var longcheck = length - 1;

          if (ced !== '' && length === 10) {
            for (var i = 0; i < longcheck; i++) {
              if (i % 2 === 0) {
                var _char = ced.charAt(i);

                var aux = +_char * 2;

                if (aux > 9) {
                  aux -= 9;
                }

                total += aux;
              } else {
                // tslint:disable-next-line: radix
                total += parseInt(ced.charAt(i));
              }
            }

            total = total % 10 ? 10 - total % 10 : 0;

            if (+ced.charAt(length - 1) === total) {
              return true;
            }

            return false;
          }
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_7__["AuditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_boarding_services_references_service__WEBPACK_IMPORTED_MODULE_10__["ReferencesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_base_services_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]));
    };

    AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      decls: 151,
      vars: 37,
      consts: [[1, "divInicioDesktop"], [2, "padding", "30px"], [1, "row"], [1, "col-6"], ["src", "assets/media/logo/logo.png", "height", "80", 2, "width", "inherit"], [2, "border-top", "3px solid black"], [1, "col-6", 2, "height", "50vh"], [1, "machala-title", 2, "margin-left", "50px", "color", "#92ce55", "text-transform", "uppercase", "text-align", "center", "font-size", "3vw", "line-height", "3vw"], [3, "innerHTML"], ["role", "alert", 1, "alert", "alert-login", 2, "margin-left", "40px"], [1, "col-1"], [1, "fas", "fa-exclamation-circle", "mr-2", 2, "font-size", "30px"], [1, "col-11"], [1, "m-0"], [1, "col-6", "text-center", 2, "height", "50vh"], ["role", "alert", 1, "alert", 2, "margin-left", "13%", "width", "70%", "background-color", "#920808", "color", "white", 3, "hidden"], [1, "fas", "fa-times-circle", 2, "color", "white", "font-size", "18px", 3, "click"], [1, "col-11", 2, "text-align", "left !important"], [3, "formGroup"], [1, "example-form"], [1, "fas", "fa-id-card", "mr-2", 2, "color", "#009845", "font-size", "30px"], [1, "example-full-width", 2, "width", "60%"], ["type", "text", "maxlength", "10", "formControlName", "cedula", "matInput", "", "placeholder", "0000000000", 3, "keypress"], ["style", "text-align: right;", 4, "ngIf"], [1, "fas", "fa-exclamation-circle", "ml-2", 2, "color", "white", "font-size", "30px"], [1, "example-form", "mt-3"], [1, "fas", "fa-fingerprint", "mr-2", 2, "color", "#009845", "font-size", "30px"], ["maxlength", "10", "formControlName", "codigoDactilar", "matInput", "", "placeholder", "AB0000"], [1, "fas", "fa-exclamation-circle", "ml-2", 2, "color", "#009845", "font-size", "30px", 3, "click"], [1, "form-check"], ["formControlName", "checkAutorizo", "color", "primary", "id", "flexCheckDefault", 1, "example-margin"], ["for", "flexCheckDefault", 1, "form-check-label", "mr-5", 2, "width", "70%", 3, "ngClass"], [2, "color", "#009845", 3, "ngClass", "click"], [1, "btn-primary", "btn", 2, "text-transform", "uppercase", 3, "disabled", "click"], [1, "fas", "fa-arrow-right"], [1, "p-2", 2, "background-color", "#009845", "bottom", "0", "position", "absolute", "width", "100%"], [1, "clearfix"], [1, "p-0", "m-0", "ml-5", "float-left", 2, "color", "white"], [1, "p-0", "m-0", "mr-5", "float-right", 2, "color", "white"], [1, "divInicioMobile", 2, "height", "100vh", "padding-top", "10%", 3, "hidden"], [1, "pl-3", "pr-3", 2, "overflow-y", "auto"], [1, "text-center"], ["src", "assets/media/logo/logo.png", 2, "width", "80%", "height", "20%"], [1, "machala-title", 2, "color", "#92ce55", "text-transform", "uppercase", "text-align", "center", "font-size", "35px", "line-height", "35pt"], ["role", "alert", 1, "alert", "alert-login", "mt-4", 2, "padding-top", "5px", "padding-left", "5px", "padding-right", "5px", "padding-bottom", "5px"], [1, "col-2"], [1, "col-10"], [1, "p-0", "m-0", 2, "color", "white", "font-size", "12px"], [1, "divInicioMobile", 2, "height", "100vh", 3, "hidden"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "p-3", "px-md-4", "mb-3", "bg-white", "border-bottom", "shadow-sm"], [1, "my-0", "mr-md-auto", "ml-4"], ["src", "assets/media/logo/logo.png", "height", "45"], [2, "padding-left", "10%", "padding-right", "10%"], [1, "row", "align-items-center", 2, "height", "70vh"], [1, "col"], ["role", "alert", 1, "alert", 2, "background-color", "#920808", "color", "white", "display", "flex", 3, "hidden"], [1, "fas", "fa-times-circle", "mr-2", 2, "color", "white", "font-size", "18px", 3, "click"], [1, "m-0", "p-0"], [1, "fas", "fa-id-card", "mr-2", 2, "color", "#009845", "font-size", "20px"], [1, "example-full-width", 2, "width", "80%"], [1, "fas", "fa-exclamation-circle", "ml-2", 2, "color", "white", "font-size", "20px"], [1, "fas", "fa-fingerprint", "mr-2", 2, "color", "#009845", "font-size", "20px"], [1, "fas", "fa-exclamation-circle", "ml-2", 2, "color", "#009845", "font-size", "20px", 3, "click"], ["formControlName", "checkAutorizo", "type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "text-center", 2, "width", "100%", 3, "ngClass"], [2, "text-align", "right"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "INSTRUCCIONES:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "a) Tener su c\xE9dula de identidad a la mano.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "b) Tener una buena conexi\xF3n a internet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "c) Ser mayor de edad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_i_click_33_listener() {
            return ctx.cerrarAlertaError();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "INGRESE C\xC9DULA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AuthComponent_Template_input_keypress_42_listener($event) {
            return ctx.validateKey($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AuthComponent_mat_error_43_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AuthComponent_mat_error_44_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AuthComponent_mat_error_45_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "INGRESE C\xD3DIGO DACTILAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AuthComponent_mat_error_53_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AuthComponent_mat_error_54_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_i_click_55_listener() {
            return ctx.fingerCode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "mat-checkbox", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Autorizo a Banco Machala S.A verificar mi informaci\xF3n y confirmo que he le\xEDdo y aceptado los ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "u", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_u_click_61_listener() {
            return ctx.statements();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "t\xE9rminos de contrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_65_listener() {
            return ctx.logIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Continuar \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "footer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Banco de Machala \xA9 2021. Todos los derechos reservados. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h1", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "INSTRUCCIONES:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "a) Tener su c\xE9dula de identidad a la mano.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "b) Tener una buena conexi\xF3n a internet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "c) Ser mayor de edad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "footer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Banco de Machala \xA9 2021. Todos los derechos reservados. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_i_click_109_listener() {
            return ctx.cerrarAlertaError();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-form-field", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "INGRESE C\xC9DULA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AuthComponent_Template_input_keypress_118_listener($event) {
            return ctx.validateKey($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, AuthComponent_mat_error_119_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, AuthComponent_mat_error_120_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, AuthComponent_mat_error_121_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "mat-form-field", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "INGRESE C\xD3DIGO DACTILAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, AuthComponent_mat_error_129_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, AuthComponent_mat_error_130_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_i_click_131_listener() {
            return ctx.fingerCode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Autorizo a Banco Machala S.A verificar mi informaci\xF3n y confirmo que he le\xEDdo y aceptado los ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "u", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_u_click_137_listener() {
            return ctx.statements();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "t\xE9rminos de contrato");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_141_listener() {
            return ctx.logIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " Continuar \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "footer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Banco de Machala \xA9 2021. Todos los derechos reservados. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.msgBienvenida, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.alertaError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.msgAlertaError, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formulario);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("cedula").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("cedula").hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("cedula").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("codigoDactilar").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("codigoDactilar").hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c0, ctx.checkClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c0, ctx.checkClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formulario.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Contact Center: ", ctx.numeroContacto, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.divInicioMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.msgBienvenida, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Contact Center: ", ctx.numeroContacto, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.divInicioMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.alertaError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.msgAlertaError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formulario);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("cedula").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("cedula").hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("cedula").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("codigoDactilar").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formulario.get("codigoDactilar").hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c0, ctx.checkClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c0, ctx.checkClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formulario.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Contact Center: ", ctx.numeroContacto, "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
      styles: ["@media only screen and (min-width: 768px) {\n  .divInicioDesktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .divInicioMobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .divInicioDesktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .divInicioMobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.check-error[_ngcontent-%COMP%] {\n  color: #920808 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYXV0aC9FOlxcZXZlci5yb2phc1xcRGVza3RvcFxcQXJxdWV0aXBvXFxpUm91dGUvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFBO0FBQ0E7RUFDSTtJQUNJLGNBQUE7RUNDTjs7RURFRTtJQUNJLGFBQUE7RUNDTjtBQUNGO0FERUEsc0VBQUE7QUFDQTtFQUNJO0lBQ0ksYUFBQTtFQ0FOOztFREdFO0lBQ0ksY0FBQTtFQ0FOO0FBQ0Y7QURHQTs7Ozs7Ozs7R0FBQTtBQVVBO0VBQ0kseUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGl2SW5pY2lvRGVza3RvcCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdkluaWNpb01vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA3NjhweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRpdkluaWNpb0Rlc2t0b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdkluaWNpb01vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIC5hYSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG4uY2hlY2stZXJyb3Ige1xyXG4gICAgY29sb3I6ICM5MjA4MDggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiIsIi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGl2SW5pY2lvRGVza3RvcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGl2SW5pY2lvTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDc2OHB4IGFuZCBkb3duKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGl2SW5pY2lvRGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5kaXZJbmljaW9Nb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLmFhIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59ICovXG4uY2hlY2stZXJyb3Ige1xuICBjb2xvcjogIzkyMDgwOCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-auth',
          templateUrl: './auth.component.html',
          styleUrls: ['./auth.component.scss']
        }]
      }], function () {
        return [{
          type: _core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_7__["AuditService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_core_boarding_services_references_service__WEBPACK_IMPORTED_MODULE_10__["ReferencesService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _core_base_services_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/pages/auth/auth.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/views/pages/auth/auth.module.ts ***!
    \*************************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppViewsPagesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/views/pages/auth/auth.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/auth/_guards/auth.guard */
    "./src/app/core/auth/_guards/auth.guard.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _finger_code_finger_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./finger-code/finger-code.component */
    "./src/app/views/pages/auth/finger-code/finger-code.component.ts");
    /* harmony import */


    var _statements_statements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./statements/statements.component */
    "./src/app/views/pages/auth/statements/statements.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_core_boarding_services_references_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/core/boarding/_services/references.service */
    "./src/app/core/boarding/_services/references.service.ts");
    /* harmony import */


    var src_app_core_boarding_services_parameters_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/core/boarding/_services/parameters.service */
    "./src/app/core/boarding/_services/parameters.service.ts");
    /* harmony import */


    var _core_boarding_services_resolvers_general_config_resolver_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../core/boarding/_services/_resolvers/general-config-resolver.service */
    "./src/app/core/boarding/_services/_resolvers/general-config-resolver.service.ts");

    var AuthModule = /*#__PURE__*/function () {
      function AuthModule() {
        _classCallCheck(this, AuthModule);
      }

      _createClass(AuthModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: AuthModule,
            providers: [_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], src_app_core_boarding_services_references_service__WEBPACK_IMPORTED_MODULE_13__["ReferencesService"], src_app_core_boarding_services_parameters_service__WEBPACK_IMPORTED_MODULE_14__["ParametersService"], _core_boarding_services_resolvers_general_config_resolver_service__WEBPACK_IMPORTED_MODULE_15__["GeneralConfigResolverService"]]
          };
        }
      }]);

      return AuthModule;
    }();

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        resolve: {
          para: _core_boarding_services_resolvers_general_config_resolver_service__WEBPACK_IMPORTED_MODULE_15__["GeneralConfigResolverService"]
        }
      }]), _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _finger_code_finger_code_component__WEBPACK_IMPORTED_MODULE_10__["FingerCodeComponent"], _statements_statements_component__WEBPACK_IMPORTED_MODULE_11__["StatementsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]],
        exports: [_finger_code_finger_code_component__WEBPACK_IMPORTED_MODULE_10__["FingerCodeComponent"], _statements_statements_component__WEBPACK_IMPORTED_MODULE_11__["StatementsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _finger_code_finger_code_component__WEBPACK_IMPORTED_MODULE_10__["FingerCodeComponent"], _statements_statements_component__WEBPACK_IMPORTED_MODULE_11__["StatementsComponent"]],
          exports: [_finger_code_finger_code_component__WEBPACK_IMPORTED_MODULE_10__["FingerCodeComponent"], _statements_statements_component__WEBPACK_IMPORTED_MODULE_11__["StatementsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
            resolve: {
              para: _core_boarding_services_resolvers_general_config_resolver_service__WEBPACK_IMPORTED_MODULE_15__["GeneralConfigResolverService"]
            }
          }]), _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/pages/auth/finger-code/finger-code.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/views/pages/auth/finger-code/finger-code.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FingerCodeComponent */

  /***/
  function srcAppViewsPagesAuthFingerCodeFingerCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FingerCodeComponent", function () {
      return FingerCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var FingerCodeComponent = /*#__PURE__*/function () {
      function FingerCodeComponent(dialogRef) {
        _classCallCheck(this, FingerCodeComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(FingerCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return FingerCodeComponent;
    }();

    FingerCodeComponent.ɵfac = function FingerCodeComponent_Factory(t) {
      return new (t || FingerCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    FingerCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FingerCodeComponent,
      selectors: [["app-finger-code"]],
      decls: 19,
      vars: 0,
      consts: [[2, "position", "relative"], [1, "fas", "fa-times-circle", 2, "color", "black", "position", "absolute", "top", "0px", "right", "0px", "font-size", "20px", 3, "click"], [1, "p-3"], [2, "color", "#009845"], ["role", "alert", 1, "alert", "alert-login"], [1, "fas", "fa-exclamation-circle", "mr-2", 2, "font-size", "30px"], ["viewBox", "0 0 620 391", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["width", "620", "height", "391", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0", "transform", "translate(-0.000512033) scale(0.00333675 0.00529101)"], ["id", "image0", "width", "300", "height", "189", 0, "xlink", "href", "data:image/png;base64,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"], [2, "height", "2vh"], [1, "text-right"], [1, "btn", 2, "text-transform", "uppercase", "color", "rgb(38,95,48)", 3, "click"], [1, "fas", "fa-check"]],
      template: function FingerCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerCodeComponent_Template_i_click_1_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C\xD3DIGO DACTILAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Se encuentra en el reverso de su C\xE9dula de Identidad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pattern", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "image", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerCodeComponent_Template_button_click_16_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Aceptar \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FingerCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-finger-code',
          templateUrl: './finger-code.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/pages/auth/statements/statements.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/pages/auth/statements/statements.component.ts ***!
    \*********************************************************************/

  /*! exports provided: StatementsComponent */

  /***/
  function srcAppViewsPagesAuthStatementsStatementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatementsComponent", function () {
      return StatementsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/_base/services/audit.service */
    "./src/app/core/_base/services/audit.service.ts");
    /* harmony import */


    var _core_boarding_services_parameters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../core/boarding/_services/parameters.service */
    "./src/app/core/boarding/_services/parameters.service.ts");

    var StatementsComponent = /*#__PURE__*/function () {
      function StatementsComponent(dialogRef, auditService, parametersService) {
        _classCallCheck(this, StatementsComponent);

        this.dialogRef = dialogRef;
        this.auditService = auditService;
        this.parametersService = parametersService;
        this.LeyendaAutorizacion = 'Autorizo de forma expresa a Banco Machala S.A para que obtenga o verifique mis datos';
      }

      _createClass(StatementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.parametersService.GetInitialParameters(this.auditService.getAudit()).subscribe(function (data) {
            _this.LeyendaAutorizacion = data.LeyendaAutorizacion;
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return StatementsComponent;
    }();

    StatementsComponent.ɵfac = function StatementsComponent_Factory(t) {
      return new (t || StatementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_2__["AuditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_boarding_services_parameters_service__WEBPACK_IMPORTED_MODULE_3__["ParametersService"]));
    };

    StatementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatementsComponent,
      selectors: [["app-statements"]],
      decls: 12,
      vars: 1,
      consts: [[2, "position", "relative"], [1, "fas", "fa-times-circle", 2, "color", "black", "position", "absolute", "right", "0px", "font-size", "20px", 3, "click"], [1, "p-3"], [2, "border-bottom", "2px solid #C8951A", "color", "#009845"], [1, "p-0", "ml-3", "mr-1"], [1, "text-right"], [1, "btn", 2, "text-transform", "uppercase", "color", "rgb(38,95,48)", 3, "click"], [1, "fas", "fa-check"]],
      template: function StatementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatementsComponent_Template_i_click_1_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DECLARACI\xD3N VALIDACI\xD3N DE INFORMACI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatementsComponent_Template_button_click_9_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aceptar \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.LeyendaAutorizacion, " ");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statements',
          templateUrl: './statements.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_2__["AuditService"]
        }, {
          type: _core_boarding_services_parameters_service__WEBPACK_IMPORTED_MODULE_3__["ParametersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/pages/boarding/_subs/facial-recognition/facial-recognition.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/views/pages/boarding/_subs/facial-recognition/facial-recognition.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: FacialRecognitionComponent */

  /***/
  function srcAppViewsPagesBoarding_subsFacialRecognitionFacialRecognitionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacialRecognitionComponent", function () {
      return FacialRecognitionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_views_partials_alert_block_alert_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/views/partials/alert-block/alert-block.component */
    "./src/app/views/partials/alert-block/alert-block.component.ts");
    /* harmony import */


    var src_app_views_partials_face_ok_face_ok_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/views/partials/face-ok/face-ok.component */
    "./src/app/views/partials/face-ok/face-ok.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function FacialRecognitionComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No se encontraron coincidencias, Favor Reintente, con mejor calidad de foto. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacialRecognitionComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacialRecognitionComponent_div_8_div_1_webcam_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "webcam", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCapture", function FacialRecognitionComponent_div_8_div_1_webcam_1_Template_webcam_imageCapture_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r14.handleImage($event);
        })("cameraSwitched", function FacialRecognitionComponent_div_8_div_1_webcam_1_Template_webcam_cameraSwitched_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r16.cameraWasSwitched($event);
        })("initError", function FacialRecognitionComponent_div_8_div_1_webcam_1_Template_webcam_initError_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r17.handleInitError($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r12.screenWidth)("height", 320)("trigger", ctx_r12.triggerObservable)("allowCameraSwitch", ctx_r12.allowCameraSwitch)("switchCamera", ctx_r12.nextWebcamObservable)("videoOptions", ctx_r12.videoOptions)("imageQuality", 0.1);
      }
    }

    function FacialRecognitionComponent_div_8_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacialRecognitionComponent_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FacialRecognitionComponent_div_8_div_1_webcam_1_Template, 1, 7, "webcam", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FacialRecognitionComponent_div_8_div_1_div_2_Template, 3, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.photoTaken);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.photoTaken);
      }
    }

    function FacialRecognitionComponent_div_8_ng_template_2_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "webcam", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCapture", function FacialRecognitionComponent_div_8_ng_template_2_div_0_Template_webcam_imageCapture_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r19.handleImage($event);
        })("cameraSwitched", function FacialRecognitionComponent_div_8_ng_template_2_div_0_Template_webcam_cameraSwitched_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r21.cameraWasSwitched($event);
        })("initError", function FacialRecognitionComponent_div_8_ng_template_2_div_0_Template_webcam_initError_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r22.handleInitError($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r18.widthCedCam)("height", 350)("trigger", ctx_r18.triggerObservable)("allowCameraSwitch", ctx_r18.allowCameraSwitch)("switchCamera", ctx_r18.nextWebcamObservable)("videoOptions", ctx_r18.videoOptionsCedula)("imageQuality", 0.1);
      }
    }

    function FacialRecognitionComponent_div_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FacialRecognitionComponent_div_8_ng_template_2_div_0_Template, 2, 7, "div", 25);
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.showWebcam && !ctx_r11.cedulaFailed);
      }
    }

    function FacialRecognitionComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FacialRecognitionComponent_div_8_div_1_Template, 3, 2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FacialRecognitionComponent_div_8_ng_template_2_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.showWebcam && !ctx_r2.rcFailed)("ngIfElse", _r10);
      }
    }

    function FacialRecognitionComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacialRecognitionComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "INSTRUCCIONES");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "a) Ubicarse de forma frontal a su c\xE1mara.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "b) Procure estar en un sitio iluminado.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "c) Cuando est\xE9 listo presiona bot\xF3n \"TOMAR SELFIE\".");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacialRecognitionComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacialRecognitionComponent_div_13_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.reconocimientoFacial();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " TOMAR SELFIE \xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacialRecognitionComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacialRecognitionComponent_div_14_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.showNextWebcam();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " GIRAR C\xC1MARA \xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FacialRecognitionComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacialRecognitionComponent_div_15_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.validacionCedula();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " CAPTURAR \xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var FacialRecognitionComponent = /*#__PURE__*/function () {
      function FacialRecognitionComponent(dialog, deviceService) {
        _classCallCheck(this, FacialRecognitionComponent);

        this.dialog = dialog;
        this.deviceService = deviceService;
        this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rcFailed = false;
        this.cedulaFailed = false;
        this.showWebcam = true;
        this.showFooterWebcam = false;
        this.finishprocess = true;
        this.cameraFrontal = true;
        this.contadorBloqueo = 0;
        this.compareSuccesfuly = false;
        this.photoTaken = false;
        this.falloReconocimientoFacial = false;
        this.haveWebCam = false;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
          width: {
            ideal: 170,
            max: 2400
          },
          height: {
            ideal: 160,
            max: 1800
          }
        };
        this.videoOptionsCedula = {
          width: {
            ideal: 220,
            max: 2400
          },
          height: {
            ideal: 120,
            max: 1800
          }
        };
        this.errors = [];
        this.fileToUpload = null;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getScreenSize();
      }

      _createClass(FacialRecognitionComponent, [{
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth - 50;
          window.innerWidth < 575 ? this.widthCedCam = this.screenWidth : this.widthCedCam = 450;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "triggerSnapshot",
        value: function triggerSnapshot() {
          this.trigger.next();
        }
      }, {
        key: "toggleWebcam",
        value: function toggleWebcam() {
          this.showWebcam = !this.showWebcam;
        }
      }, {
        key: "handleInitError",
        value: function handleInitError(error) {
          if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
            this.dialog.closeAll();
            var dialogRef = this.dialog.open(src_app_views_partials_alert_block_alert_block_component__WEBPACK_IMPORTED_MODULE_3__["AlertBlockComponent"], {
              data: {
                mensaje: 'Permisos Denegados, no se puede continuar con el proceso de apertura de cuenta.'
              }
            });
            this.showFooterWebcam = false;
          }

          this.errors = [];
          this.errors.push(error);
        }
      }, {
        key: "showNextWebcam",
        value: function showNextWebcam() {
          this.cameraFrontal = !this.cameraFrontal;
          this.nextWebcam.next(this.cameraFrontal);
        }
      }, {
        key: "handleImage",
        value: function handleImage(webcamImage) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var imageurl, response, blob;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.photoTaken = true;
                    this.falloReconocimientoFacial = false;
                    this.pictureTaken.emit(webcamImage);
                    imageurl = webcamImage.imageAsDataUrl;
                    _context4.next = 6;
                    return fetch(imageurl);

                  case 6:
                    response = _context4.sent;
                    _context4.next = 9;
                    return response.blob();

                  case 9:
                    blob = _context4.sent;

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "Paso1Succesfull",
        value: function Paso1Succesfull() {
          this.toggleWebcam();
          this.rcFailed = false;
          this.finishprocess = false;
        }
      }, {
        key: "Bloqueo",
        value: function Bloqueo() {
          this.toggleWebcam();
          this.rcFailed = false;
          this.finishprocess = false;
          this.alertBloqueo();
        }
      }, {
        key: "alertBloqueo",
        value: function alertBloqueo() {
          var dialogRef = this.dialog.open(src_app_views_partials_alert_block_alert_block_component__WEBPACK_IMPORTED_MODULE_3__["AlertBlockComponent"], {
            data: {
              mensaje: 'Ha excedido el número de intentos permitidos.'
            }
          });
        }
      }, {
        key: "alertSucces",
        value: function alertSucces() {
          var dialogRef = this.dialog.open(src_app_views_partials_face_ok_face_ok_component__WEBPACK_IMPORTED_MODULE_4__["FaceOkComponent"], {
            data: {}
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
              return;
            }
          });
        }
      }, {
        key: "cameraWasSwitched",
        value: function cameraWasSwitched(deviceId) {
          this.deviceId = deviceId;
        }
      }, {
        key: "reconocimientoFacial",
        value: function reconocimientoFacial() {
          this.triggerSnapshot();
        }
      }, {
        key: "validacionCedula",
        value: function validacionCedula() {
          this.triggerSnapshot();
        }
      }, {
        key: "triggerObservable",
        get: function get() {
          return this.trigger.asObservable();
        }
      }, {
        key: "nextWebcamObservable",
        get: function get() {
          return this.nextWebcam.asObservable();
        }
      }]);

      return FacialRecognitionComponent;
    }();

    FacialRecognitionComponent.ɵfac = function FacialRecognitionComponent_Factory(t) {
      return new (t || FacialRecognitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"]));
    };

    FacialRecognitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FacialRecognitionComponent,
      selectors: [["app-facial-recognition"]],
      hostBindings: function FacialRecognitionComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function FacialRecognitionComponent_resize_HostBindingHandler($event) {
            return ctx.getScreenSize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      outputs: {
        pictureTaken: "pictureTaken"
      },
      decls: 17,
      vars: 8,
      consts: [["role", "alert", 1, "alert", "alert-inf", "mb-0"], [1, "fas", "fa-exclamation-circle", "mr-2", 2, "color", "rgb(38, 95, 48)", "font-size", "20px"], ["style", "background-color: #920808", "class", "alert alert-inf mb-0", "role", "alert", 4, "ngIf"], [1, "container"], ["style", "text-align: center", "class", "row justify-content-center", 4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf", "ngIfElse"], ["noCamera", ""], ["class", "row row-cols-1 justify-content-center", "style", "margin-top: 15px", 4, "ngIf"], ["class", "row row-cols-1 justify-content-center", 4, "ngIf"], ["style", "margin-top: 5px", "class", "row row-cols-1 justify-content-center", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-inf", "mb-0", 2, "background-color", "#920808"], [1, "fas", "fa-times-circle", "mr-2", 2, "color", "#ffffff", "font-size", "20px"], [2, "color", "#ffffff"], [1, "row", "justify-content-center", 2, "text-align", "center"], [1, "col", "col-10", "col-sm-6", "col-md-5", "col-lg-4", "col-xl-3"], [2, "height", "300px", "width", "270px", "padding-top", "70px", "background-color", "#e7e3e2"], [1, "fas", "fa-user-alt", 2, "margin-left", "auto", "margin-right", "auto", "font-size", "130px", "color", "#707070"], [1, "row", "justify-content-center"], ["style", "text-align: center; padding: 0", "class", "col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5", 4, "ngIf", "ngIfElse"], ["validwithCedula", ""], [1, "col", "col-12", "col-sm-10", "col-md-8", "col-lg-6", "col-xl-5", 2, "text-align", "center", "padding", "0"], [3, "width", "height", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageQuality", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], [3, "width", "height", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageQuality", "imageCapture", "cameraSwitched", "initError"], [2, "height", "300px", "width", "270px", "padding-top", "90px", "background-color", "#e7e3e2"], [2, "margin-left", "auto", "margin-right", "auto", "font-size", "130px"], ["style", "text-align: center; padding: 0", "class", "col col-12 col-sm-12", 4, "ngIf"], [1, "col", "col-12", "col-sm-12", 2, "text-align", "center", "padding", "0"], [1, "row", "row-cols-1", "justify-content-center", 2, "margin-top", "15px"], [1, "col-auto"], [2, "color", "#707070"], [1, "row", "row-cols-1", "justify-content-center"], [1, "btn-primary", "btn", 2, "text-transform", "uppercase", "width", "200px", 3, "click"], [1, "fas", "fa-camera"], [1, "row", "row-cols-1", "justify-content-center", 2, "margin-top", "5px"]],
      template: function FacialRecognitionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Realice el proceso de verificaci\xF3n de identidad mediante reconocimiento facial\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FacialRecognitionComponent_div_4_Template, 4, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FacialRecognitionComponent_div_7_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FacialRecognitionComponent_div_8_Template, 4, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FacialRecognitionComponent_ng_template_9_Template, 6, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FacialRecognitionComponent_div_11_Template, 13, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FacialRecognitionComponent_div_13_Template, 5, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FacialRecognitionComponent_div_14_Template, 5, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FacialRecognitionComponent_div_15_Template, 5, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.falloReconocimientoFacial);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showFooterWebcam && ctx.errors.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceId != "" && ctx.errors.length == 0)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.length == 0 && !ctx.rcFailed && ctx.showFooterWebcam && ctx.finishprocess);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.length == 0 && !ctx.rcFailed && ctx.showFooterWebcam && ctx.finishprocess);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.length == 0 && ctx.rcFailed && ctx.showFooterWebcam && ctx.IsMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors.length == 0 && ctx.rcFailed && ctx.showFooterWebcam);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_8__["WebcamComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FacialRecognitionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-facial-recognition',
          templateUrl: './facial-recognition.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"]
        }];
      }, {
        pictureTaken: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/views/partials/alert-block/alert-block.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/partials/alert-block/alert-block.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AlertBlockComponent */

  /***/
  function srcAppViewsPartialsAlertBlockAlertBlockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertBlockComponent", function () {
      return AlertBlockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlertBlockComponent = /*#__PURE__*/function () {
      function AlertBlockComponent(data, router, dialogRef) {
        _classCallCheck(this, AlertBlockComponent);

        this.data = data;
        this.router = router;
        this.dialogRef = dialogRef;
      }

      _createClass(AlertBlockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mensaje = this.data.mensaje;
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.closeAll();
          this.router.navigateByUrl('/iniciar');
        }
      }]);

      return AlertBlockComponent;
    }();

    AlertBlockComponent.ɵfac = function AlertBlockComponent_Factory(t) {
      return new (t || AlertBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    AlertBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertBlockComponent,
      selectors: [["app-alert-block"]],
      decls: 10,
      vars: 1,
      consts: [[1, "container"], ["role", "alert", 1, "alert", "alert-inf", "mb-0", 2, "background-color", "#920808"], [1, "fas", "fa-times-circle", "mr-2", 2, "color", "#ffffff", "font-size", "20px"], [2, "color", "#ffffff"], [1, "row", "row-cols-1", "justify-content-center"], [1, "col-auto"], [1, "btn-infod", "btn", 2, "text-transform", "uppercase", "width", "150px", 3, "click"]],
      template: function AlertBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertBlockComponent_Template_button_click_8_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ACEPTAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mensaje, " ");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert-block',
          templateUrl: './alert-block.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/partials/face-ok/face-ok.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/partials/face-ok/face-ok.component.ts ***!
    \*************************************************************/

  /*! exports provided: FaceOkComponent */

  /***/
  function srcAppViewsPartialsFaceOkFaceOkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaceOkComponent", function () {
      return FaceOkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var FaceOkComponent = /*#__PURE__*/function () {
      function FaceOkComponent(dialogRef) {
        _classCallCheck(this, FaceOkComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(FaceOkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return FaceOkComponent;
    }();

    FaceOkComponent.ɵfac = function FaceOkComponent_Factory(t) {
      return new (t || FaceOkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    FaceOkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaceOkComponent,
      selectors: [["app-face-ok"]],
      decls: 15,
      vars: 0,
      consts: [[1, "d-flex"], [1, "ml-auto", "p-2", 2, "color", "#000000", "cursor", "pointer", 3, "click"], [1, "fas", "fa-times-circle", "mr-2", 2, "font-size", "20px"], ["role", "alert", 1, "alert", "mb-0", 2, "margin-left", "auto", "margin-right", "auto"], [2, "margin-left", "auto", "margin-right", "auto", "text-align", "center"], [1, "fas", "fa-check-circle", "mr-2", 2, "color", "#009845", "font-size", "35px", "margin-right", "auto", "margin-left", "auto"], [2, "color", "#009845", "font-size", "25px", "font-weight", "bold"], [1, "row", "row-cols-1", "justify-content-end"], [1, "col-auto"], [1, "btn", 2, "text-transform", "uppercase", "cursor", "pointer", "color", "#009845", "font-size", "15px", 3, "click"], [1, "fas", "fa-arrow-right"]],
      template: function FaceOkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaceOkComponent_Template_div_click_1_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " CONFIRMACI\xD3N EXITOSA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaceOkComponent_Template_a_click_12_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " CONTINUAR \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaceOkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-face-ok',
          templateUrl: './face-ok.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/theme/base/base.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/views/theme/base/base.component.ts ***!
    \****************************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcAppViewsThemeBaseBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/views/theme/header/header.component.ts");
    /* harmony import */


    var _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../subheader/subheader.component */
    "./src/app/views/theme/subheader/subheader.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/views/theme/footer/footer.component.ts");

    var BaseComponent = /*#__PURE__*/function () {
      function BaseComponent() {
        _classCallCheck(this, BaseComponent);
      }

      _createClass(BaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BaseComponent;
    }();

    BaseComponent.ɵfac = function BaseComponent_Factory(t) {
      return new (t || BaseComponent)();
    };

    BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BaseComponent,
      selectors: [["app-base"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container"], [1, "mt-3"]],
      template: function BaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-subheader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_2__["SubheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-base',
          templateUrl: './base.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/theme/footer/footer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/views/theme/footer/footer.component.ts ***!
    \********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppViewsThemeFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_base_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/_base/services/config.service */
    "./src/app/core/_base/services/config.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(configS) {
        _classCallCheck(this, FooterComponent);

        this.configS = configS;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.numeroContacto = this.configS.getValue('NUM_CALL_CENTER');
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_base_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 6,
      vars: 1,
      consts: [[1, "p-2", 2, "background-color", "#009845", "bottom", "0", "width", "100%"], [1, "clearfix"], [1, "p-0", "m-0", "ml-5", "float-left", 2, "color", "white"], [1, "p-0", "m-0", "mr-5", "float-right", 2, "color", "white"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Banco de Machala \xA9 2021. Todos los derechos reservados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Contact Center: ", ctx.numeroContacto, "");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _core_base_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/theme/header/header.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/views/theme/header/header.component.ts ***!
    \********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppViewsThemeHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "p-3", "px-md-4", "mb-3", "bg-white", "border-bottom", "shadow-sm"], [1, "my-0", "mr-md-auto", "ml-4"], ["src", "assets/media/logo/logo.png", "height", "45"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/theme/subheader/subheader.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/views/theme/subheader/subheader.component.ts ***!
    \**************************************************************/

  /*! exports provided: SubheaderComponent */

  /***/
  function srcAppViewsThemeSubheaderSubheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubheaderComponent", function () {
      return SubheaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/_base/services/audit.service */
    "./src/app/core/_base/services/audit.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var SubheaderComponent = /*#__PURE__*/function () {
      function SubheaderComponent(auditService) {
        _classCallCheck(this, SubheaderComponent);

        this.auditService = auditService;
        this.nombreCliente = 'NODATA';
      }

      _createClass(SubheaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nombreCliente = this.auditService.getAudit().UsuarioFinal;
        }
      }]);

      return SubheaderComponent;
    }();

    SubheaderComponent.ɵfac = function SubheaderComponent_Factory(t) {
      return new (t || SubheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_1__["AuditService"]));
    };

    SubheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubheaderComponent,
      selectors: [["app-subheader"]],
      decls: 7,
      vars: 1,
      consts: [[1, "d-flex", "pt-3", "mb-0", "pb-0"], [1, "hello", "text-uppercase", "machala-title"], ["inline", "true", 1, "mr-2"], [1, "mt-0", "mb-4", 2, "border", "1px solid #C8951A"]],
      template: function SubheaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hola, ", ctx.nombreCliente, " ");
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: [".material-icons[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding-bottom: 0.1vw;\n}\n\n.hello[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #009845;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGhlbWUvc3ViaGVhZGVyL0U6XFxldmVyLnJvamFzXFxEZXNrdG9wXFxBcnF1ZXRpcG9cXGlSb3V0ZS9zcmNcXGFwcFxcdmlld3NcXHRoZW1lXFxzdWJoZWFkZXJcXHN1YmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvdGhlbWUvc3ViaGVhZGVyL3N1YmhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL3N1YmhlYWRlci9zdWJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJpYWwtaWNvbnMge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMXZ3XHJcbn1cclxuXHJcbi5oZWxsbyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA5ODQ1O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIiwiLm1hdGVyaWFsLWljb25zIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1ib3R0b206IDAuMXZ3O1xufVxuXG4uaGVsbG8ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDA5ODQ1O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subheader',
          templateUrl: './subheader.component.html',
          styleUrls: ['./subheader.component.scss']
        }]
      }], function () {
        return [{
          type: _core_base_services_audit_service__WEBPACK_IMPORTED_MODULE_1__["AuditService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/theme/theme.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/views/theme/theme.module.ts ***!
    \*********************************************/

  /*! exports provided: ThemeModule */

  /***/
  function srcAppViewsThemeThemeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return ThemeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base/base.component */
    "./src/app/views/theme/base/base.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/views/theme/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/views/theme/header/header.component.ts");
    /* harmony import */


    var _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subheader/subheader.component */
    "./src/app/views/theme/subheader/subheader.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ThemeModule = function ThemeModule() {
      _classCallCheck(this, ThemeModule);
    };

    ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ThemeModule
    });
    ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ThemeModule_Factory(t) {
        return new (t || ThemeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, {
        declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_5__["SubheaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_5__["SubheaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\ever.rojas\Desktop\Arquetipo\iRoute\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map