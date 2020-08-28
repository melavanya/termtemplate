(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-temp2-temp2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp2/DetailsModal.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp2/DetailsModal.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  table {\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-form-field {\r\n    width: 100%;\r\n  }\r\n\r\n  .set-left {\r\n    float: right;\r\n  }\r\n</style>\r\n<mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-title>\r\n      <span>Termination Process: {{empName}}</span><button mat-raised-button class=\"set-left\"\r\n        (click)=\"NothanksClick()\">X</button>\r\n    </mat-card-title>\r\n    <mat-card-subtitle>\r\n      Badge ID - {{empID}}\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n        \r\n        <!-- Checkbox Column -->\r\n        <ng-container matColumnDef=\"select\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <!-- <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\r\n            </mat-checkbox> -->\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"onCheck($event, row)\"\r\n              [checked]=\"row.select\" [disabled]=\"row.select\"\r\n            >\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"stepDesc\">\r\n          <th mat-header-cell *matHeaderCellDef>Step Desc</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{element.stepDesc}}\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"activity\">\r\n          <th mat-header-cell *matHeaderCellDef>Completed Date</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{element.activity}}\r\n          </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"completedBy\">\r\n          <th mat-header-cell *matHeaderCellDef>Completed By</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{element.completedBy}}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"center\">\r\n      <button mat-raised-button color=\"primary\"\r\n        (click)=\"onSubmit()\">Submit</button>\r\n        <button mat-raised-button color=\"warn\"\r\n        (click)=\"onComplete()\">Sign Off</button>\r\n\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp2/temp2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp2/temp2.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <mat-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>HR/IT View</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <mat-card class=\"card\">\r\n    <mat-card-title>\r\n    <h2>Login: </h2>\r\n    <mat-radio-group [(ngModel)]=\"login\" (change)=\"loginChange()\">\r\n      <mat-radio-button class=\"login-margin\" value=\"HR\">HR</mat-radio-button>\r\n      <mat-radio-button class=\"login-margin\" value=\"IT\">IT</mat-radio-button>\r\n    </mat-radio-group>\r\n</mat-card-title>\r\n\r\n    <mat-card-content>\r\n <mat-form-field>\r\n          <mat-label>Search Employee</mat-label>\r\n          <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search\">\r\n        </mat-form-field>\r\n    \r\n    <div class=\"mat-elevation-z8\">\r\n      <table mat-table [dataSource]=\"dataSource\">\r\n  \r\n        <ng-container matColumnDef=\"empName\">\r\n          <th mat-header-cell *matHeaderCellDef> Name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empName}} </td>\r\n        </ng-container>\r\n    \r\n        <ng-container matColumnDef=\"empID\">\r\n          <th mat-header-cell *matHeaderCellDef> Badge ID </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empID}} </td>\r\n        </ng-container>\r\n    \r\n        <ng-container matColumnDef=\"empJobTitle\">\r\n          <th mat-header-cell *matHeaderCellDef>Job Title </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empJobTitle}} </td>\r\n        </ng-container>\r\n    \r\n        <ng-container matColumnDef=\"empReportsTo\">\r\n          <th mat-header-cell *matHeaderCellDef> Reports To </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empReportsTo}} </td>\r\n        </ng-container>\r\n    \r\n        <ng-container matColumnDef=\"empEndDate\">\r\n          <th mat-header-cell *matHeaderCellDef> End Date </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.empEndDate}} </td>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"reason\">\r\n          <th mat-header-cell *matHeaderCellDef> Termination Reason </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.reason}} </td>\r\n        </ng-container>\r\n        \r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef>Status </th>\r\n          <td mat-cell *matCellDef=\"let element\"><mat-chip-list><mat-chip color={{element[login].color}} selected>{{element[login].status}}</mat-chip></mat-chip-list>  </td>\r\n        </ng-container>\r\n  \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"></tr>\r\n      </table>\r\n    \r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </div> \r\n\r\n  </mat-card-content>\r\n  </mat-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/temp2/temp2-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/temp2/temp2-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Temp2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temp2PageRoutingModule", function() { return Temp2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _temp2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temp2.page */ "./src/app/pages/temp2/temp2.page.ts");




const routes = [
    {
        path: '',
        component: _temp2_page__WEBPACK_IMPORTED_MODULE_3__["Temp2Page"]
    }
];
let Temp2PageRoutingModule = class Temp2PageRoutingModule {
};
Temp2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Temp2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/temp2/temp2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/temp2/temp2.module.ts ***!
  \*********************************************/
/*! exports provided: Temp2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temp2PageModule", function() { return Temp2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _temp2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./temp2-routing.module */ "./src/app/pages/temp2/temp2-routing.module.ts");
/* harmony import */ var _temp2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./temp2.page */ "./src/app/pages/temp2/temp2.page.ts");
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");







let Temp2PageModule = class Temp2PageModule {
};
Temp2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _temp2_routing_module__WEBPACK_IMPORTED_MODULE_4__["Temp2PageRoutingModule"],
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_6__["SharedModuleModule"]
        ],
        declarations: [_temp2_page__WEBPACK_IMPORTED_MODULE_5__["Temp2Page"], _temp2_page__WEBPACK_IMPORTED_MODULE_5__["DetailsModal"]]
    })
], Temp2PageModule);



/***/ }),

/***/ "./src/app/pages/temp2/temp2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/temp2/temp2.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.card {\n  margin: 12px;\n  text-align: left;\n  font-family: Helvetica;\n  padding: 30px;\n}\n\n.expand {\n  width: 100%;\n}\n\n.login-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.login-margin {\n  margin: 0 10px;\n}\n\ntr.mat-row {\n  cursor: pointer;\n}\n\n.mat-form-field {\n  width: 50%;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVtcDIvQzpcXFVzZXJzXFxsc2V0aHVyYW1hblxcTGF2YW55YVxcV29ya2FyZWFcXFRlcm1pbmF0aW9uVGVtcGxhdGUvc3JjXFxhcHBcXHBhZ2VzXFx0ZW1wMlxcdGVtcDIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZW1wMi90ZW1wMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERFO0VBQ0UsY0FBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtBQ0tKOztBREhFO0VBQ0UsVUFBQTtBQ01KOztBREpFO0VBQ0EsV0FBQTtBQ09GOztBREpBO0VBQ0UsU0FBQTtBQ09GOztBREpBO0VBQ0Usc0JBQUE7QUNPRjs7QURKQTtFQUNFLG1CQUFBO0FDT0Y7O0FESkE7RUFDRSxzQkFBQTtBQ09GOztBREpBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZW1wMi90ZW1wMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuICAuZXhwYW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubG9naW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgdHIubWF0LXJvdyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5leHBhbmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmxvZ2luLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG50ci5tYXQtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNTAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/temp2/temp2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/temp2/temp2.page.ts ***!
  \*******************************************/
/*! exports provided: Temp2Page, DetailsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temp2Page", function() { return Temp2Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModal", function() { return DetailsModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");






let Temp2Page = class Temp2Page {
    constructor(dialog, appService) {
        this.dialog = dialog;
        this.appService = appService;
        this.displayedColumns = ['empName', 'empID', 'empJobTitle', 'empReportsTo', 'empEndDate', 'reason', 'status'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.login = 'HR';
        this.employees = [];
        this.allStepDetails = [];
        this.loginStepDetails = [];
    }
    ngOnInit() {
        this.createTable();
    }
    createTable() {
        this.dataSource.data = [];
        this.loginStepDetails = [];
        let empDetails = [];
        this.appService.getEmployees().subscribe(employees => this.employees = employees);
        this.appService.getStepDetails().subscribe(stepDetails => this.allStepDetails = stepDetails);
        this.allStepDetails.forEach(step => {
            if (step.dept === this.login) {
                this.loginStepDetails.push(step);
            }
        });
        this.employees.forEach(employee => {
            if (employee[this.login].status !== 'Complete') {
                empDetails.push(employee);
            }
        });
        this.dataSource.data = empDetails;
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    loginChange() {
        this.dataSource.data = [];
        this.loginStepDetails = [];
        let empDetails = [];
        this.allStepDetails.forEach(step => {
            if (step.dept === this.login) {
                this.loginStepDetails.push(step);
            }
        });
        this.employees.forEach(employee => {
            if (employee[this.login].status !== 'Complete') {
                empDetails.push(employee);
            }
        });
        this.dataSource.data = empDetails;
        this.dataSource.paginator = this.paginator;
    }
    selectRow(row) {
        this.appService.getTerminationProcessDetails(row.empID).subscribe(result => {
            this.loginStepDetails.forEach(step => {
                if (result.stepID.length !== 0 && result.stepID.includes(step.stepID)) {
                    step.select = true;
                    step.activity = result.activity;
                    step.completedBy = step.dept;
                }
                else {
                    step.select = false;
                    step.activity = '';
                    step.completedBy = '';
                }
            });
        });
        let dialogRef = this.dialog.open(DetailsModal, {
            width: '600px',
            data: { row: row, steps: this.loginStepDetails, login: this.login }
        });
        dialogRef.afterClosed().subscribe(() => this.createTable());
    }
};
Temp2Page.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], Temp2Page.prototype, "paginator", void 0);
Temp2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temp2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./temp2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp2/temp2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./temp2.page.scss */ "./src/app/pages/temp2/temp2.page.scss")).default]
    })
], Temp2Page);

let DetailsModal = class DetailsModal {
    constructor(appService, dialogRef, data) {
        this.appService = appService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['select', 'stepDesc', 'activity', 'completedBy'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.selectedSteps = [];
        this.empName = this.data.row.empName;
        this.empID = this.data.row.empID;
        this.login = this.data.login;
        this.stepDetails = this.data.steps;
        this.status = this.data.row.SUPER.status;
    }
    ngOnInit() {
        this.dataSource.data = this.stepDetails;
        this.dataSource.paginator = this.paginator;
    }
    NothanksClick() {
        this.dialogRef.close();
    }
    onCheck(event, row) {
        if (event.checked) {
            this.selectedSteps.push(row.stepID);
        }
        else {
            this.selectedSteps = this.selectedSteps.filter(item => item !== row.stepID);
        }
    }
    onSubmit() {
        let data = {
            empID: this.empID,
            empName: this.empName,
            stepID: this.selectedSteps,
            completedBy: '',
            activity: (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes()
        };
        this.appService.saveTerminationProcessDetails(data);
        this.dialogRef.close();
    }
    onComplete() {
        this.appService.loginCompleteTerminationProcessDetails(this.empID, this.login);
        this.dialogRef.close();
    }
};
DetailsModal.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], DetailsModal.prototype, "paginator", void 0);
DetailsModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'details-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./DetailsModal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp2/DetailsModal.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], DetailsModal);



/***/ })

}]);
//# sourceMappingURL=pages-temp2-temp2-module-es2015.js.map