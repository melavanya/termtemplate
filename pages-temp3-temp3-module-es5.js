function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-temp3-temp3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp3/request-snack-bar.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp3/request-snack-bar.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp3RequestSnackBarHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"request\">\r\n   Termination Request Sent\r\n  </span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp3/temp3.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp3/temp3.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp3Temp3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <mat-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Termination Request Form</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <mat-card class=\"card\">\r\n    <mat-card-title>\r\n      <h2>Termination Request Form </h2>\r\n    </mat-card-title>\r\n  \r\n    <mat-card-content>\r\n  \r\n      <form class=\"form\"[formGroup]=\"requestForm\">\r\n  \r\n        <mat-form-field>\r\n          <mat-label>Supervisor Name</mat-label>\r\n          <input matInput formControlName=\"empReportsTo\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <mat-label>Employee Name</mat-label>\r\n          <input matInput formControlName=\"empName\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <mat-label>Employee ID</mat-label>\r\n          <input type=\"number\" matInput formControlName=\"empID\" [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <mat-label>Reason</mat-label>\r\n          <input matInput formControlName=\"reason\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <mat-label>End Date</mat-label>\r\n          <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" formControlName=\"empEndDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" (click)=\"sendRequest()\">Submit</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/temp3/temp3-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/temp3/temp3-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: Temp3PageRoutingModule */

  /***/
  function srcAppPagesTemp3Temp3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Temp3PageRoutingModule", function () {
      return Temp3PageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _temp3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./temp3.page */
    "./src/app/pages/temp3/temp3.page.ts");

    var routes = [{
      path: '',
      component: _temp3_page__WEBPACK_IMPORTED_MODULE_3__["Temp3Page"]
    }];

    var Temp3PageRoutingModule = function Temp3PageRoutingModule() {
      _classCallCheck(this, Temp3PageRoutingModule);
    };

    Temp3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Temp3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/temp3/temp3.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/temp3/temp3.module.ts ***!
    \*********************************************/

  /*! exports provided: Temp3PageModule */

  /***/
  function srcAppPagesTemp3Temp3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Temp3PageModule", function () {
      return Temp3PageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _temp3_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./temp3-routing.module */
    "./src/app/pages/temp3/temp3-routing.module.ts");
    /* harmony import */


    var _temp3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./temp3.page */
    "./src/app/pages/temp3/temp3.page.ts");
    /* harmony import */


    var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared-module/shared-module.module */
    "./src/app/shared-module/shared-module.module.ts");

    var Temp3PageModule = function Temp3PageModule() {
      _classCallCheck(this, Temp3PageModule);
    };

    Temp3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _temp3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Temp3PageRoutingModule"], src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_6__["SharedModuleModule"]],
      declarations: [_temp3_page__WEBPACK_IMPORTED_MODULE_5__["Temp3Page"], _temp3_page__WEBPACK_IMPORTED_MODULE_5__["RequestComponent"]]
    })], Temp3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/temp3/temp3.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/temp3/temp3.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTemp3Temp3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  width: 50%;\n}\n\n.form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.card {\n  margin: 12px;\n  text-align: left;\n  font-family: Helvetica;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVtcDMvQzpcXFVzZXJzXFxsc2V0aHVyYW1hblxcTGF2YW55YVxcV29ya2FyZWFcXFRlcm1pbmF0aW9uVGVtcGxhdGUvc3JjXFxhcHBcXHBhZ2VzXFx0ZW1wM1xcdGVtcDMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZW1wMy90ZW1wMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZW1wMy90ZW1wMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/temp3/temp3.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/temp3/temp3.page.ts ***!
    \*******************************************/

  /*! exports provided: Temp3Page, RequestComponent */

  /***/
  function srcAppPagesTemp3Temp3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Temp3Page", function () {
      return Temp3Page;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestComponent", function () {
      return RequestComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var Temp3Page = /*#__PURE__*/function () {
      function Temp3Page(appService, formBuilder, _snackBar) {
        _classCallCheck(this, Temp3Page);

        this.appService = appService;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.options = ['990156', '987654', '978654', '985643', '976543'];

        this.myFilter = function (d) {
          var day = (d || new Date()).getDay(); // Prevent Saturday and Sunday from being selected.

          return day !== 0 && day !== 6;
        };

        this.requestForm = formBuilder.group({
          empReportsTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          empName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          empID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          empEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
      }

      _createClass(Temp3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.filteredOptions = this.requestForm.controls['empID'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return _this._filter(value);
          }));
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value;
          return this.options.filter(function (option) {
            return option.indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "sendRequest",
        value: function sendRequest() {
          var data = this.requestForm.value;
          data.empEndDate = this.requestForm.value.empEndDate.toDateString();
          data.approved = 'requested';
          this.appService.submitTerminationRequest(data);
          this.requestForm.reset();

          this._snackBar.openFromComponent(RequestComponent, {
            duration: 2000
          });
        }
      }]);

      return Temp3Page;
    }();

    Temp3Page.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    Temp3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-temp3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./temp3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp3/temp3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./temp3.page.scss */
      "./src/app/pages/temp3/temp3.page.scss"))["default"]]
    })], Temp3Page);

    var RequestComponent = function RequestComponent() {
      _classCallCheck(this, RequestComponent);
    };

    RequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'request-component',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./request-snack-bar.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp3/request-snack-bar.html"))["default"],
      styles: ["\n    .request {\n      color: hotpink;\n    }\n  "]
    })], RequestComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-temp3-temp3-module-es5.js.map