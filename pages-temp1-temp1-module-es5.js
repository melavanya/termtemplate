function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-temp1-temp1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/temp1.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/temp1.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp1Temp1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <mat-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Admin View</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <mat-card class=\"card\">\r\n    <mat-card-title>\r\n    <h2>Admin Dashboard </h2>\r\n</mat-card-title>\r\n\r\n    <mat-card-content>\r\n\r\n      <mat-tab-group (selectedTabChange)=\"tabChange($event)\">\r\n        <mat-tab label=\"Termination Request\"> <app-termination-request></app-termination-request> </mat-tab>\r\n        <mat-tab label=\"Termination Process\"><app-termination-process [index]=\"tabIndex\"></app-termination-process> </mat-tab>\r\n        <mat-tab label=\"Termination Steps\"> <app-termination-steps></app-termination-steps> </mat-tab>\r\n      </mat-tab-group>\r\n\r\n  </mat-card-content>\r\n  </mat-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-process/DetailsModal.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-process/DetailsModal.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp1TerminationProcessDetailsModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n  table {\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-form-field {\r\n    width: 100%;\r\n  }\r\n\r\n  .set-left {\r\n    float: right;\r\n  }\r\n</style>\r\n<mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-title>\r\n      <span>Termination Process: {{empName}}</span><button mat-raised-button class=\"set-left\"\r\n        (click)=\"NothanksClick()\">X</button>\r\n    </mat-card-title>\r\n    <mat-card-subtitle>\r\n      Badge ID - {{empID}}\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n        \r\n        <!-- Checkbox Column -->\r\n        <ng-container matColumnDef=\"select\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <!-- <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\r\n            </mat-checkbox> -->\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"onCheck($event, row)\"\r\n              [checked]=\"row.select\" [disabled]=\"row.select\"\r\n            >\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"stepDesc\">\r\n          <th mat-header-cell *matHeaderCellDef>Step Desc</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{element.stepDesc}}\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"activity\">\r\n          <th mat-header-cell *matHeaderCellDef>Completed Date</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{element.activity}}\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"completedBy\">\r\n          <th mat-header-cell *matHeaderCellDef>Completed By</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{element.completedBy}}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"center\">\r\n      <button mat-raised-button color=\"primary\"\r\n        (click)=\"onSubmit()\">Submit</button>\r\n        <button mat-raised-button color=\"warn\"\r\n        (click)=\"onComplete()\">Sign Off</button>\r\n\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-process/termination-process.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-process/termination-process.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp1TerminationProcessTerminationProcessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"card\">\r\n  <mat-card-title>\r\n    <h2> </h2>\r\n  </mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <mat-form-field>\r\n      <mat-label>Search Employee</mat-label>\r\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search\">\r\n    </mat-form-field>\r\n    <div class=\"mat-elevation-z8\">\r\n\r\n      <table mat-table [dataSource]=\"dataSource\">\r\n\r\n        <ng-container matColumnDef=\"initiate\">\r\n          <th mat-header-cell *matHeaderCellDef>Initiate</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <mat-slide-toggle class=\"example-margin\" [checked]=\"element.initiate\" [disabled]=\"element.initiate\"\r\n              (change)=\"initiateProcess(element.empID,$event)\"></mat-slide-toggle>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"empName\">\r\n          <th mat-header-cell *matHeaderCellDef> Name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empName}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"empID\">\r\n          <th mat-header-cell *matHeaderCellDef> Badge ID </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empID}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"empJobTitle\">\r\n          <th mat-header-cell *matHeaderCellDef>Job Title </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empJobTitle}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"empReportsTo\">\r\n          <th mat-header-cell *matHeaderCellDef> Reports To </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empReportsTo}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"empEndDate\">\r\n          <th mat-header-cell *matHeaderCellDef> End Date </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empEndDate}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"reason\">\r\n          <th mat-header-cell *matHeaderCellDef> Termination Reason </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.reason}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef>Status </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <mat-chip-list>\r\n              <mat-chip color={{element.SUPER.color}} selected>{{element.SUPER.status}}</mat-chip>\r\n            </mat-chip-list>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></tr>\r\n      </table>\r\n\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-request/ApprovalModal.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-request/ApprovalModal.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp1TerminationRequestApprovalModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\n    <mat-card>\r\n        <h2 align=\"center\">Termination Request</h2>\r\n      \r\n        <h4>Employee: {{empData.empName}}</h4>\r\n      \r\n      <mat-card-subtitle>\r\n        <p>Badge ID - {{empData.empID}}</p>\r\n        <p>Reason - {{empData.reason}}</p>\r\n      </mat-card-subtitle>\r\n      <mat-card-actions align=\"center\">\r\n        <button mat-raised-button color=\"primary\"\r\n          (click)=\"onApprove()\">Approve</button>\r\n          <button mat-raised-button color=\"warn\"\r\n          (click)=\"onDeny()\">Decline</button>\r\n          <button mat-raised-button color=\"secondary\"\r\n          (click)=\"NothanksClick()\">Cancel</button>\r\n  \r\n      </mat-card-actions>\r\n</mat-card>\r\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-request/termination-request.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-request/termination-request.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp1TerminationRequestTerminationRequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"card\">\r\n  <mat-card-title>\r\n  <h2>Termination Requests</h2>\r\n</mat-card-title>\r\n\r\n  <mat-card-content>\r\n<mat-form-field>\r\n        <mat-label>Search Employee</mat-label>\r\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search\">\r\n      </mat-form-field>\r\n  \r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n\r\n      <ng-container matColumnDef=\"empName\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.empName}} </td>\r\n      </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"empID\">\r\n        <th mat-header-cell *matHeaderCellDef> Badge ID </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.empID}} </td>\r\n      </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"empReportsTo\">\r\n        <th mat-header-cell *matHeaderCellDef> Reports To </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.empReportsTo}} </td>\r\n      </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"empEndDate\">\r\n        <th mat-header-cell *matHeaderCellDef> End Date </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.empEndDate}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"reason\">\r\n        <th mat-header-cell *matHeaderCellDef> Termination Reason </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.reason}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef>Status </th>\r\n        <td mat-cell *matCellDef=\"let element\"><mat-chip-list>\r\n          <mat-chip *ngIf=\"element.approved === 'approved'\" color=\"primary\" selected>Approved</mat-chip>\r\n          <mat-chip *ngIf=\"element.approved === 'declined'\" color=\"warn\" selected>Declined</mat-chip>\r\n          <mat-chip *ngIf=\"element.approved === 'requested'\" color=\"black\" selected>Requested</mat-chip>\r\n        </mat-chip-list>  </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></tr>\r\n    </table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div> \r\n\r\n</mat-card-content>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-steps/add-new-step.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-steps/add-new-step.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp1TerminationStepsAddNewStepHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n    .example-button-row button {\r\n      display: table-cell;\r\n      margin-right: 8px;\r\n    }\r\n    .mat-card  {\r\n      box-shadow: none;\r\n    }\r\n    .mat-form-field {\r\n      width: 100%;\r\n    }\r\n        </style>\r\n    <mat-dialog-content>\r\n        <mat-card>\r\n    \r\n           <h3>Add a New Step</h3>\r\n    \r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                  <mat-label> Step Description</mat-label>\r\n                  <input matInput [formControl]=\"newstep\">\r\n                </mat-form-field>\r\n                <br>\r\n                <mat-form-field>\r\n                    <mat-label>Department</mat-label>\r\n                    <mat-select [formControl]=\"dept\">\r\n                      <mat-option value=\"HR\">HR</mat-option>\r\n                      <mat-option value=\"IT\">IT</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <br>\r\n                    <mat-checkbox [(ngModel)]=\"active\">Active</mat-checkbox>\r\n                    <br>\r\n                    <br>\r\n\r\n    \r\n                <div class=\"example-button-row\">\r\n                    <button mat-raised-button (click)=\"saveNewStep()\" color=\"primary\">Save</button>\r\n                  <button mat-raised-button (click)=\"NothanksClick()\">Cancel</button>\r\n                </div>\r\n    \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </mat-dialog-content>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-steps/termination-steps.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-steps/termination-steps.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTemp1TerminationStepsTerminationStepsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n  table {\r\n    width: 100%;\r\n  }\r\n  .mat-form-field {\r\n    width: 80%;\r\n  }\r\n  .button {\r\n    float: right;\r\n  }\r\n\r\n</style>\r\n    <mat-card class=\"card\">\r\n        <mat-card-title>\r\n            <span>Termination Steps</span>\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n\r\n          <mat-form-field>\r\n            <mat-label>Search Step</mat-label>\r\n            <input matInput (keyup)=\"applyFilter($event)\">\r\n          </mat-form-field>\r\n            <button mat-mini-fab color=\"primary\" class=\"button\" (click)=\"addNewStep()\">\r\n           <mat-icon>add</mat-icon>\r\n         </button>\r\n    \r\n        \r\n\r\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n            <ng-container matColumnDef=\"stepDesc\">\r\n              <th mat-header-cell *matHeaderCellDef>Termination Steps</th>\r\n              <td mat-cell *matCellDef=\"let element\">\r\n                {{element.stepDesc}}\r\n               </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"dept\">\r\n              <th mat-header-cell *matHeaderCellDef>Department</th>\r\n              <td mat-cell *matCellDef=\"let element\">\r\n                {{element.dept}}\r\n               </td>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container matColumnDef=\"active\">\r\n              <th mat-header-cell *matHeaderCellDef>Active</th>\r\n              <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle class=\"example-margin\" [checked]=\"element.active\" (change)=\"saveStepStatus(element.stepID,$event)\"></mat-slide-toggle>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n\r\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/temp1/temp1-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/temp1/temp1-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: Temp1PageRoutingModule */

  /***/
  function srcAppPagesTemp1Temp1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Temp1PageRoutingModule", function () {
      return Temp1PageRoutingModule;
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


    var _temp1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./temp1.page */
    "./src/app/pages/temp1/temp1.page.ts");

    var routes = [{
      path: '',
      component: _temp1_page__WEBPACK_IMPORTED_MODULE_3__["Temp1Page"]
    }];

    var Temp1PageRoutingModule = function Temp1PageRoutingModule() {
      _classCallCheck(this, Temp1PageRoutingModule);
    };

    Temp1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Temp1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/temp1/temp1.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/temp1/temp1.module.ts ***!
    \*********************************************/

  /*! exports provided: Temp1PageModule */

  /***/
  function srcAppPagesTemp1Temp1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Temp1PageModule", function () {
      return Temp1PageModule;
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


    var _temp1_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./temp1-routing.module */
    "./src/app/pages/temp1/temp1-routing.module.ts");
    /* harmony import */


    var _temp1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./temp1.page */
    "./src/app/pages/temp1/temp1.page.ts");
    /* harmony import */


    var _termination_process_termination_process_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./termination-process/termination-process.component */
    "./src/app/pages/temp1/termination-process/termination-process.component.ts");
    /* harmony import */


    var _termination_request_termination_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./termination-request/termination-request.component */
    "./src/app/pages/temp1/termination-request/termination-request.component.ts");
    /* harmony import */


    var _termination_steps_termination_steps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./termination-steps/termination-steps.component */
    "./src/app/pages/temp1/termination-steps/termination-steps.component.ts");
    /* harmony import */


    var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared-module/shared-module.module */
    "./src/app/shared-module/shared-module.module.ts");

    var Temp1PageModule = function Temp1PageModule() {
      _classCallCheck(this, Temp1PageModule);
    };

    Temp1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _temp1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Temp1PageRoutingModule"], src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_9__["SharedModuleModule"]],
      declarations: [_temp1_page__WEBPACK_IMPORTED_MODULE_5__["Temp1Page"], _termination_process_termination_process_component__WEBPACK_IMPORTED_MODULE_6__["DetailsModal"], _termination_request_termination_request_component__WEBPACK_IMPORTED_MODULE_7__["ApprovalModal"], _termination_steps_termination_steps_component__WEBPACK_IMPORTED_MODULE_8__["AddNewStepModal"], _termination_process_termination_process_component__WEBPACK_IMPORTED_MODULE_6__["TerminationProcessComponent"], _termination_request_termination_request_component__WEBPACK_IMPORTED_MODULE_7__["TerminationRequestComponent"], _termination_steps_termination_steps_component__WEBPACK_IMPORTED_MODULE_8__["TerminationStepsComponent"]]
    })], Temp1PageModule);
    /***/
  },

  /***/
  "./src/app/pages/temp1/temp1.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/temp1/temp1.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTemp1Temp1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.card {\n  margin: 12px;\n  text-align: left;\n  font-family: Helvetica;\n  padding: 30px;\n}\n\n.login-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.login-margin {\n  margin: 0 10px;\n}\n\ntr.mat-row {\n  cursor: pointer;\n}\n\n.mat-form-field {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVtcDEvQzpcXFVzZXJzXFxsc2V0aHVyYW1hblxcTGF2YW55YVxcV29ya2FyZWFcXFRlcm1pbmF0aW9uVGVtcGxhdGUvc3JjXFxhcHBcXHBhZ2VzXFx0ZW1wMVxcdGVtcDEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZW1wMS90ZW1wMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREZBO0VBQ0UsVUFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVtcDEvdGVtcDEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmxvZ2luLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4ubG9naW4tbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG50ci5tYXQtcm93IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogNTAlO1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5sb2dpbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxudHIubWF0LXJvdyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/temp1/temp1.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/temp1/temp1.page.ts ***!
    \*******************************************/

  /*! exports provided: Temp1Page */

  /***/
  function srcAppPagesTemp1Temp1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Temp1Page", function () {
      return Temp1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Temp1Page = /*#__PURE__*/function () {
      function Temp1Page() {
        _classCallCheck(this, Temp1Page);
      }

      _createClass(Temp1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tabChange",
        value: function tabChange($event) {
          this.tabIndex = $event.index;
        }
      }]);

      return Temp1Page;
    }();

    Temp1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-temp1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./temp1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/temp1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./temp1.page.scss */
      "./src/app/pages/temp1/temp1.page.scss"))["default"]]
    })], Temp1Page);
    /***/
  },

  /***/
  "./src/app/pages/temp1/termination-process/termination-process.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/temp1/termination-process/termination-process.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTemp1TerminationProcessTerminationProcessComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.login-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.login-margin {\n  margin: 0 10px;\n}\n\ntr.mat-row {\n  cursor: pointer;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVtcDEvdGVybWluYXRpb24tcHJvY2Vzcy9DOlxcVXNlcnNcXGxzZXRodXJhbWFuXFxMYXZhbnlhXFxXb3JrYXJlYVxcVGVybWluYXRpb25UZW1wbGF0ZS9zcmNcXGFwcFxccGFnZXNcXHRlbXAxXFx0ZXJtaW5hdGlvbi1wcm9jZXNzXFx0ZXJtaW5hdGlvbi1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZW1wMS90ZXJtaW5hdGlvbi1wcm9jZXNzL3Rlcm1pbmF0aW9uLXByb2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbXAxL3Rlcm1pbmF0aW9uLXByb2Nlc3MvdGVybWluYXRpb24tcHJvY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgdHIubWF0LXJvdyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmxvZ2luLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG50ci5tYXQtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/temp1/termination-process/termination-process.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/temp1/termination-process/termination-process.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TerminationProcessComponent, DetailsModal */

  /***/
  function srcAppPagesTemp1TerminationProcessTerminationProcessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminationProcessComponent", function () {
      return TerminationProcessComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsModal", function () {
      return DetailsModal;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

    var TerminationProcessComponent = /*#__PURE__*/function () {
      function TerminationProcessComponent(dialog, appService) {
        _classCallCheck(this, TerminationProcessComponent);

        this.dialog = dialog;
        this.appService = appService;
        this.displayedColumns = ['initiate', 'empName', 'empID', 'empJobTitle', 'empReportsTo', 'empEndDate', 'reason', 'status'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.employees = [];
        this.allStepDetails = [];
      }

      _createClass(TerminationProcessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createTable();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.createTable();
        }
      }, {
        key: "createTable",
        value: function createTable() {
          var _this = this;

          this.appService.getApprovedEmployees().subscribe(function (employees) {
            return _this.employees = employees;
          });
          this.appService.getStepDetails().subscribe(function (stepDetails) {
            return _this.allStepDetails = stepDetails;
          });
          this.dataSource.data = this.employees;
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "initiateProcess",
        value: function initiateProcess(empID, event) {
          this.appService.initiateTerminationProcess(empID, event.checked);
        }
      }, {
        key: "selectRow",
        value: function selectRow(row) {
          var _this2 = this;

          this.appService.getTerminationProcessDetails(row.empID).subscribe(function (result) {
            _this2.allStepDetails.forEach(function (step) {
              if (result.stepID.length !== 0 && result.stepID.includes(step.stepID)) {
                step.select = true;
                step.activity = result.activity;
                step.completedBy = step.dept;
              } else {
                step.select = false;
                step.activity = '';
                step.completedBy = '';
              }
            });
          });

          if (this.employees[lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](this.employees, ['empID', row.empID])].initiate) {
            var dialogRef = this.dialog.open(DetailsModal, {
              width: '600px',
              data: {
                row: row,
                steps: this.allStepDetails
              }
            });
            dialogRef.afterClosed().subscribe(function () {
              return _this2.createTable();
            });
          }
        }
      }]);

      return TerminationProcessComponent;
    }();

    TerminationProcessComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index')], TerminationProcessComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], TerminationProcessComponent.prototype, "paginator", void 0);
    TerminationProcessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-termination-process',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./termination-process.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-process/termination-process.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./termination-process.component.scss */
      "./src/app/pages/temp1/termination-process/termination-process.component.scss"))["default"]]
    })], TerminationProcessComponent);

    var DetailsModal = /*#__PURE__*/function () {
      function DetailsModal(appService, dialogRef, data) {
        _classCallCheck(this, DetailsModal);

        this.appService = appService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['select', 'stepDesc', 'activity', 'completedBy'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.selectedSteps = [];
        this.empName = this.data.row.empName;
        this.empID = this.data.row.empID;
        this.stepDetails = this.data.steps;
        this.status = this.data.row.SUPER.status;
      }

      _createClass(DetailsModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.data = this.stepDetails;
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "NothanksClick",
        value: function NothanksClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onCheck",
        value: function onCheck(event, row) {
          if (event.checked) {
            this.selectedSteps.push(row.stepID);
          } else {
            this.selectedSteps = this.selectedSteps.filter(function (item) {
              return item !== row.stepID;
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var data = {
            empID: this.empID,
            empName: this.empName,
            stepID: this.selectedSteps,
            completedBy: '',
            activity: new Date().getMonth() + 1 + '/' + new Date().getDate() + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes()
          };
          this.appService.saveTerminationProcessDetails(data);
          this.dialogRef.close();
        }
      }, {
        key: "onComplete",
        value: function onComplete() {
          this.appService.completeTerminationProcessDetails(this.empID);
          this.dialogRef.close();
        }
      }]);

      return DetailsModal;
    }();

    DetailsModal.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], DetailsModal.prototype, "paginator", void 0);
    DetailsModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'details-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./DetailsModal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-process/DetailsModal.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], DetailsModal);
    /***/
  },

  /***/
  "./src/app/pages/temp1/termination-request/termination-request.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/temp1/termination-request/termination-request.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTemp1TerminationRequestTerminationRequestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVtcDEvdGVybWluYXRpb24tcmVxdWVzdC9DOlxcVXNlcnNcXGxzZXRodXJhbWFuXFxMYXZhbnlhXFxXb3JrYXJlYVxcVGVybWluYXRpb25UZW1wbGF0ZS9zcmNcXGFwcFxccGFnZXNcXHRlbXAxXFx0ZXJtaW5hdGlvbi1yZXF1ZXN0XFx0ZXJtaW5hdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZW1wMS90ZXJtaW5hdGlvbi1yZXF1ZXN0L3Rlcm1pbmF0aW9uLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZW1wMS90ZXJtaW5hdGlvbi1yZXF1ZXN0L3Rlcm1pbmF0aW9uLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/temp1/termination-request/termination-request.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/temp1/termination-request/termination-request.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TerminationRequestComponent, ApprovalModal */

  /***/
  function srcAppPagesTemp1TerminationRequestTerminationRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminationRequestComponent", function () {
      return TerminationRequestComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApprovalModal", function () {
      return ApprovalModal;
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


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var TerminationRequestComponent = /*#__PURE__*/function () {
      function TerminationRequestComponent(appService, dialog) {
        _classCallCheck(this, TerminationRequestComponent);

        this.appService = appService;
        this.dialog = dialog;
        this.requestedEmployees = [];
        this.displayedColumns = ['empName', 'empID', 'empReportsTo', 'empEndDate', 'reason', 'status'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
      }

      _createClass(TerminationRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createTable();
        }
      }, {
        key: "createTable",
        value: function createTable() {
          var _this3 = this;

          this.appService.getRequestedEmployees().subscribe(function (employees) {
            _this3.requestedEmployees = employees;
          });
          this.dataSource.data = this.requestedEmployees;
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "selectRow",
        value: function selectRow(row) {
          var _this4 = this;

          var dialogRef = this.dialog.open(ApprovalModal, {
            width: '400px',
            data: row
          });
          dialogRef.afterClosed().subscribe(function () {
            return _this4.createTable();
          });
        }
      }]);

      return TerminationRequestComponent;
    }();

    TerminationRequestComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], TerminationRequestComponent.prototype, "paginator", void 0);
    TerminationRequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-termination-request',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./termination-request.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-request/termination-request.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./termination-request.component.scss */
      "./src/app/pages/temp1/termination-request/termination-request.component.scss"))["default"]]
    })], TerminationRequestComponent);

    var ApprovalModal = /*#__PURE__*/function () {
      function ApprovalModal(appService, dialogRef, data) {
        _classCallCheck(this, ApprovalModal);

        this.appService = appService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.empData = this.data;
      }

      _createClass(ApprovalModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "NothanksClick",
        value: function NothanksClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onApprove",
        value: function onApprove() {
          this.appService.approveRequestDetails(this.empData);
          this.dialogRef.close();
        }
      }, {
        key: "onDeny",
        value: function onDeny() {
          this.appService.denyRequestDetails(this.empData);
          this.dialogRef.close();
        }
      }]);

      return ApprovalModal;
    }();

    ApprovalModal.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ApprovalModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'approval-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ApprovalModal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-request/ApprovalModal.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))], ApprovalModal);
    /***/
  },

  /***/
  "./src/app/pages/temp1/termination-steps/termination-steps.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/temp1/termination-steps/termination-steps.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTemp1TerminationStepsTerminationStepsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVtcDEvdGVybWluYXRpb24tc3RlcHMvQzpcXFVzZXJzXFxsc2V0aHVyYW1hblxcTGF2YW55YVxcV29ya2FyZWFcXFRlcm1pbmF0aW9uVGVtcGxhdGUvc3JjXFxhcHBcXHBhZ2VzXFx0ZW1wMVxcdGVybWluYXRpb24tc3RlcHNcXHRlcm1pbmF0aW9uLXN0ZXBzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZW1wMS90ZXJtaW5hdGlvbi1zdGVwcy90ZXJtaW5hdGlvbi1zdGVwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbXAxL3Rlcm1pbmF0aW9uLXN0ZXBzL3Rlcm1pbmF0aW9uLXN0ZXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/temp1/termination-steps/termination-steps.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/temp1/termination-steps/termination-steps.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TerminationStepsComponent, AddNewStepModal */

  /***/
  function srcAppPagesTemp1TerminationStepsTerminationStepsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminationStepsComponent", function () {
      return TerminationStepsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewStepModal", function () {
      return AddNewStepModal;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TerminationStepsComponent = /*#__PURE__*/function () {
      function TerminationStepsComponent(appService, dialog) {
        _classCallCheck(this, TerminationStepsComponent);

        this.appService = appService;
        this.dialog = dialog;
        this.displayedColumns = ['stepDesc', 'dept', 'active'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
      }

      _createClass(TerminationStepsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createTable();
        }
      }, {
        key: "createTable",
        value: function createTable() {
          var _this5 = this;

          this.appService.getAllStepDetails().subscribe(function (stepDetils) {
            return _this5.stepDetailsList = stepDetils;
          });
          this.dataSource.data = this.stepDetailsList;
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "saveStepStatus",
        value: function saveStepStatus(stepID, status) {
          var data = {
            stepID: stepID,
            status: status.checked
          };
          this.appService.saveStepStatus(data);
        }
      }, {
        key: "addNewStep",
        value: function addNewStep() {
          var _this6 = this;

          var dialogRef = this.dialog.open(AddNewStepModal, {
            width: '400px'
          });
          dialogRef.afterClosed().subscribe(function () {
            return _this6.createTable();
          });
        }
      }]);

      return TerminationStepsComponent;
    }();

    TerminationStepsComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], TerminationStepsComponent.prototype, "paginator", void 0);
    TerminationStepsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-termination-steps',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./termination-steps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-steps/termination-steps.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./termination-steps.component.scss */
      "./src/app/pages/temp1/termination-steps/termination-steps.component.scss"))["default"]]
    })], TerminationStepsComponent);

    var AddNewStepModal = /*#__PURE__*/function () {
      function AddNewStepModal(appService, dialogRef) {
        _classCallCheck(this, AddNewStepModal);

        this.appService = appService;
        this.dialogRef = dialogRef;
        this.newstep = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.dept = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.active = false;
      }

      _createClass(AddNewStepModal, [{
        key: "NothanksClick",
        value: function NothanksClick() {
          this.dialogRef.close();
        }
      }, {
        key: "saveNewStep",
        value: function saveNewStep() {
          var data = {
            stepDesc: this.newstep.value,
            select: false,
            dept: this.dept.value,
            active: this.active
          };
          this.appService.addNewStep(data);
          this.dialogRef.close();
        }
      }]);

      return AddNewStepModal;
    }();

    AddNewStepModal.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }];
    };

    AddNewStepModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'add-new-step-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-new-step.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp1/termination-steps/add-new-step.html"))["default"]
    })], AddNewStepModal);
    /***/
  }
}]);
//# sourceMappingURL=pages-temp1-temp1-module-es5.js.map