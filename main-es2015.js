(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n  \n    <span class=\"menu-spacer\"></span>\n    <div>\n      <a mat-button [routerLink]=\"'/'\"> Home </a>\n      <button mat-button [matMenuTriggerFor] = \"menu\">Master</button>\n      <mat-menu #menu = \"matMenu\">\n          <button mat-menu-item [routerLink]=\"'/customerlist'\" >Customer</button>\n          <button mat-menu-item  [routerLink]=\"'/manufacturer'\">Manufacturer</button>\n          <button mat-menu-item [routerLink]=\"'/productDetails'\" >Product Details</button>\n\n       </mat-menu>\n           \n     \n\n       <button mat-button [matMenuTriggerFor] = \"menu1\">Accounts</button>\n       <mat-menu #menu1 = \"matMenu\">\n          <button mat-menu-item [routerLink]=\"'/billingList'\" >Billing</button>\n          <button mat-menu-item [routerLink]=\"'/billingView'\" >Billing List</button>\n       </mat-menu>\n     \n    </div>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    </mat-toolbar-row>\n</mat-toolbar>.\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billing-update/billing-update.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billing-update/billing-update.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n\n  <form  (ngSubmit)=\"onSubmitSave(billingFrm, dataSource.data)\" [formGroup]=\"billingFrm\">\n        <div>\n    \n            <mat-form-field appearance=\"outline\">  \n                <mat-label>Customer Code</mat-label>  \n                <input matInput placeholder=\"Customer Code\"  [readonly]=\"hideDiv\" formControlName=\"code\" \n                   > \n              </mat-form-field> \n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    \n              <mat-form-field appearance=\"outline\">  \n                <mat-label>Customer Mobile</mat-label>  \n                <input matInput  placeholder=\"Mobile\" [readonly]=\"hideDiv\" formControlName=\"mobile\" \n                   > \n              </mat-form-field> \n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n             \n              &nbsp;&nbsp;\n              \n    \n        </div>\n    \n    \n    \n    \n    \n        <div>\n    \n          <mat-form-field appearance=\"outline\">  \n            <mat-label>Bill Number</mat-label>  \n            <input matInput placeholder=\"Bill Number\" [readonly]=\"hideDiv\" formControlName=\"bill\" \n               > \n          </mat-form-field> \n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    \n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" [readonly]=\"hideDiv\"  formControlName=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n    \n      \n    \n    \n    \n    \n    \n        </div>\n    <!--  Customer Namee && Address  -->\n    \n    \n    \n    <div>\n      <mat-form-field fxFlex=\"40%\">\n        <input matInput type=\"text\" [readonly]=\"hideDiv\" formControlName=\"cusName\"  placeholder=\"Customer Name\">\n      </mat-form-field>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <mat-form-field fxFlex=\"100%\">\n        <input matInput type=\"text\"  [readonly]=\"hideDiv\" formControlName=\"CusAddress\"  placeholder=\"Customer Address\">\n      </mat-form-field>\n    </div>\n            <div>\n    \n                    <mat-form-field appearance=\"outline\"  >  \n                            <mat-label>Select Product Name</mat-label>  \n                            <mat-select placeholder=\"Select a Product\" (selectionChange)=\"selected($event)\" formControlName=\"name\">  \n                              <mat-option>-- None --</mat-option>  \n                              <mat-option *ngFor=\"let product of productList;let idx = index;\" \n                              [value]=\"product.id\">  \n                                {{ product.name }}   \n                              </mat-option>  \n                              \n                            </mat-select>  \n                         \n                          </mat-form-field>\n    </div>\n    <div>\n                   <!--  <mat-form-field appearance=\"outline\">  \n                    <mat-label>product Name</mat-label>  \n                    <input matInput placeholder=\"Name\" formControlName=\"name\">   \n                   <mat-error *ngIf=\"formErrors.name\">  \n                     {{ formErrors.name }}  \n                    </mat-error>  \n                  </mat-form-field> -->  \n                 <mat-form-field appearance=\"outline\">  \n       <mat-label>Product</mat-label>  \n       <input matInput  [readonly]=\"hideDiv\" placeholder=\"Product Name\" formControlName=\"name\" \n                       > \n     </mat-form-field> \n                  \n                  <mat-form-field appearance=\"outline\">  \n                    <mat-label>Price</mat-label>  \n                    <input matInput [readonly]=\"hideDiv\" placeholder=\"Price\" formControlName=\"price\" \n                       > \n                  </mat-form-field> \n    \n                  <mat-form-field appearance=\"outline\">  \n                    <mat-label>Quantity</mat-label>  \n                    <input matInput (input)=\"onSearchChange($event.target.value)\" type=\"number\" placeholder=\"Quantity\"  formControlName=\"quantity\">   \n                  <!--  <mat-error *ngIf=\"formErrors.name\">  \n                     {{ formErrors.name }}  \n                    </mat-error>  --> \n                  </mat-form-field> \n    \n                  \n                  <mat-form-field appearance=\"outline\">  \n                    <mat-label>Amount</mat-label>  \n                     <input matInput type=\"number\" [readonly]=\"hideDiv\" placeholder=\"Amount\" formControlName=\"amount\">  \n                 \n                  </mat-form-field>  \n                  &nbsp;\n                  <button type=\"button\" #txtVal  mat-raised-button color=\"primary\" (click)=\"onSubmit(billingFrm)\" >\n                    \n                    Add\n                  \n                    <i class=\"material-icons\">\n                        add_circle_outline\n                        </i>\n                      </button>  \n                </div> \n    \n    \n                <table mat-table #table [dataSource]=\"dataSource\"> \n    \n                    \n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell *matHeaderCellDef> Product Name </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container> \n              \n                    <!-- Code Column -->\n                    <ng-container matColumnDef=\"price\">\n                      <th mat-header-cell *matHeaderCellDef> Price </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n                    </ng-container>\n              \n                <!-- Tax Column -->\n                <ng-container matColumnDef=\"quantity\">\n                  <th mat-header-cell *matHeaderCellDef> Quantity </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n                </ng-container>\n              \n                  <!-- Type Column -->\n                  <ng-container matColumnDef=\"amount\">\n                    <th mat-header-cell *matHeaderCellDef> Amount </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n                  </ng-container>\n            \n                          \n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef> Action </th>\n                      <td mat-cell *matCellDef=\"let element;let i = index;\">\n                        <button type=\"button\" title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editBilling(i,element)\">Edit\n                            <i class=\"material-icons\">\n                                edit\n                                </i>\n    \n                        </button>\n                        <button type=\"button\"  title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"removeSelectedRows(i,element)\">Delete\n                            <i class=\"material-icons\">\n                                delete\n                                </i>  \n    \n                              \n                        </button>\n                      </td>\n                    </ng-container>\n                    \n                     <!--  <h1 ng-repeat=\"xSave in dataSource.data\">{{x}}</h1>-->\n              \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                 </table><br>\n                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \n                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    \n    \n                 <mat-form-field fxFlex=\"40%\">\n                  <input matInput type=\"text\" [readonly]=\"hideDiv\" formControlName=\"totalAddAmount\"  placeholder=\"Total Amount\">\n                </mat-form-field>\n    \n    <br>\n    <br>\n    \n                 <div>\n    \n                    <mat-form-field appearance=\"outline\"  >  \n                            <mat-label>Payment Type</mat-label>  \n                            <mat-select placeholder=\"Select a Payment Type\" formControlName=\"paymentType\">  \n                              <mat-option>-- None --</mat-option>  \n                              <mat-option *ngFor=\"let payment of paymentListd;\"\n                              [value]=\"payment.paymentType\">  \n                                {{ payment.paymentType}}  \n                              </mat-option>  \n                            </mat-select>  \n                         \n                          </mat-form-field>\n    \n    \n                  \n                  <mat-form-field appearance=\"outline\">  \n                    <mat-label>Reference Number</mat-label>  \n                    <input matInput placeholder=\"Reference Number\" formControlName=\"referenceNo\" \n                       > \n                  </mat-form-field> \n    &nbsp;\n                  <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onSubmitpayment(billingFrm)\" >Add\n    \n                      <i class=\"material-icons\">\n                          add_circle_outline\n                          </i>\n                          \n                  </button>  \n    \n                  </div>\n    \n    \n                 <table mat-table #table [dataSource]=\"dataSourcePayment\"> \n    \n                    \n                    <ng-container matColumnDef=\"paymentType\">\n                      <th mat-header-cell *matHeaderCellDef> Payment Type </th>\n                      <td mat-cell *matCellDef=\"let elements\"> {{elements.paymentType}} </td>\n                    </ng-container> \n              \n                    <ng-container matColumnDef=\"referenceNo\">\n                      <th mat-header-cell *matHeaderCellDef> Reference Number </th>\n                      <td mat-cell *matCellDef=\"let elements\"> {{elements.referenceNo}} </td>\n                    </ng-container>\n              &nbsp;&nbsp;\n                      \n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef> Action </th>\n                      <td mat-cell *matCellDef=\"let elements;let i = index;\">\n                        <button type=\"button\" title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editPayment(i,elements)\">Edit\n                            <i class=\"material-icons\">\n                                edit\n                                </i>\n    \n                        </button>\n                        <button type=\"button\"  title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"removeSelectedRowsPayment(i,elements)\">Delete\n                            <i class=\"material-icons\">\n                                delete\n                                </i>\n    \n                        </button>\n                      </td>\n                    </ng-container>\n              \n                     <!--  <h1 ng-repeat=\"xSave in dataSource.data\">{{x}}</h1>-->\n              \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumnspayment\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumnspayment;\"></tr>\n                 </table>\n                 <br>\n                 <br>\n                 <button type=\"button\" title=\"Save\" mat-raised-button color=\"primary\" (click)=\"deleteAll(billingFrm,dataSource.data,dataSourcePayment.data)\">Update\n    \n                    <i class=\"material-icons\">\n                        save\n                        </i>\n    \n                 </button>\n        </form>\n    \n           "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billing-view/billing-view.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billing-view/billing-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n\n  <form  (ngSubmit)=\"onSubmitSave(billingListFrm, dataSource.data)\" [formGroup]=\"billingListFrm\">\n    <div>\n\n        <mat-form-field appearance=\"outline\">  \n            <mat-label>Customer Code</mat-label>  \n            <input matInput placeholder=\"Customer Code\"   formControlName=\"code\" \n               > \n          </mat-form-field> \n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <mat-form-field appearance=\"outline\">  \n            <mat-label>Mobile Number</mat-label>  \n            <input matInput placeholder=\"Mobile Number\"   formControlName=\"mobile\"> \n          </mat-form-field> \n          &nbsp;&nbsp;&nbsp;\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" formControlName=\"fromDate\" >\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n          &nbsp;&nbsp;&nbsp;\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"myDatepicker\" placeholder=\"To Date\" formControlName=\"toDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #myDatepicker></mat-datepicker>\n          </mat-form-field>\n\n          &nbsp;&nbsp;&nbsp;\n          <button type=\"button\" title=\"Search Customer\" mat-raised-button color=\"primary\" (click)=\"billDetailList()\">Search Customer\n          \n            <i class=\"material-icons\">\n              search\n              </i>\n\n          </button>\n          &nbsp;\n          <button type=\"button\" title=\"Reset\" mat-raised-button color=\"primary\" (click)=\"resetPage()\">Reset\n          \n            <i class=\"material-icons\">\n              cached\n              </i>\n\n          </button>\n\n             </div>\n\n            </form>\n\n              <table mat-table #table [dataSource]=\"dataSource\"> \n\n                \n                <ng-container matColumnDef=\"bill\">\n                  <th mat-header-cell *matHeaderCellDef> Bill Number </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.bill}} </td>\n                </ng-container> \n          \n             \n                <ng-container matColumnDef=\"date\">\n                  <th mat-header-cell *matHeaderCellDef> Bill Date </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n                </ng-container>\n          \n          \n            <ng-container matColumnDef=\"cusName\">\n              <th mat-header-cell *matHeaderCellDef> Customer Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"mobile\">\n              <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n            </ng-container>\n\n              <ng-container matColumnDef=\"amount\">\n                <th mat-header-cell *matHeaderCellDef> Total Cost </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>  \n              </ng-container>\n                            \n              <ng-container matColumnDef=\"action\">\n                  <th mat-header-cell *matHeaderCellDef> Action </th>\n                  <td mat-cell *matCellDef=\"let element;let i = index;\">\n                    <button type=\"button\" title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editBilling(i,element)\">Edit\n                        <i class=\"material-icons\">\n                            edit\n                            </i>\n\n                    </button>\n                    </td>\n                </ng-container>\n          \n                 <!--  <h1 ng-repeat=\"xSave in dataSource.data\">{{x}}</h1>-->\n          \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n             </table>\n\n<br>\n<br>\n\n   \n                        \n   \n\n       "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billinglist/billinglist.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billinglist/billinglist.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n\r\n  <form  (ngSubmit)=\"onSubmitSave(billingFrm, dataSource.data)\" [formGroup]=\"billingFrm\">\r\n    <div>\r\n\r\n        <mat-form-field appearance=\"outline\">  \r\n            <mat-label>Customer Code</mat-label>  \r\n            <input matInput placeholder=\"Customer Code\"   formControlName=\"code\" \r\n               > \r\n          </mat-form-field> \r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n          <mat-form-field appearance=\"outline\">  \r\n            <mat-label>Customer Mobile</mat-label>  \r\n            <input matInput  placeholder=\"Mobile\" formControlName=\"mobile\" \r\n               > \r\n          </mat-form-field> \r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          <button type=\"button\" title=\"Search Customer\" mat-raised-button color=\"primary\" (click)=\"searchCustomer(billingFrm)\">Search Customer\r\n          \r\n            <i class=\"material-icons\">\r\n              search\r\n              </i>\r\n\r\n          </button>\r\n          &nbsp;&nbsp;\r\n          <button type=\"button\" title=\"Reset\" mat-raised-button color=\"primary\" (click)=\"reset()\">Reset\r\n          \r\n            <i class=\"material-icons\">\r\n              cached\r\n              </i>\r\n\r\n          </button>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    <div>\r\n\r\n      <mat-form-field appearance=\"outline\">  \r\n        <mat-label>Bill Number</mat-label>  \r\n        <input matInput  placeholder=\"Bill Number\" formControlName=\"bill\" \r\n           > \r\n      </mat-form-field> \r\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n      <mat-form-field>\r\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" formControlName=\"date\" [formControl]=\"date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n<!--  Customer Namee && Address  -->\r\n\r\n\r\n\r\n<div>\r\n  <mat-form-field fxFlex=\"40%\">\r\n    <input matInput type=\"text\" [readonly]=\"hideDiv\" formControlName=\"cusName\"  placeholder=\"Customer Name\">\r\n  </mat-form-field>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  <mat-form-field fxFlex=\"100%\">\r\n    <input matInput type=\"text\"  [readonly]=\"hideDiv\" formControlName=\"CusAddress\"  placeholder=\"Customer Address\">\r\n  </mat-form-field>\r\n</div>\r\n        <div>\r\n\r\n                <mat-form-field appearance=\"outline\"  >  \r\n                        <mat-label>Select Product Name</mat-label>  \r\n                        <mat-select placeholder=\"Select a Product\" (selectionChange)=\"selected($event)\" formControlName=\"name\">  \r\n                          <mat-option>-- None --</mat-option>  \r\n                          <mat-option *ngFor=\"let product of productList;let idx = index;\" \r\n                          [value]=\"product.id\">  \r\n                            {{ product.name }}   \r\n                          </mat-option>  \r\n                          \r\n                        </mat-select>  \r\n                     \r\n                      </mat-form-field>\r\n</div>\r\n<div>\r\n               <!--  <mat-form-field appearance=\"outline\">  \r\n                <mat-label>product Name</mat-label>  \r\n                <input matInput placeholder=\"Name\" formControlName=\"name\">   \r\n               <mat-error *ngIf=\"formErrors.name\">  \r\n                 {{ formErrors.name }}  \r\n                </mat-error>  \r\n              </mat-form-field> -->  \r\n             <mat-form-field appearance=\"outline\">  \r\n   <mat-label>Product</mat-label>  \r\n   <input matInput  [readonly]=\"hideDiv\" placeholder=\"Product Name\" formControlName=\"name\" \r\n                   > \r\n </mat-form-field> \r\n              \r\n              <mat-form-field appearance=\"outline\">  \r\n                <mat-label>Price</mat-label>  \r\n                <input matInput [readonly]=\"hideDiv\" placeholder=\"Price\" formControlName=\"price\" \r\n                   > \r\n              </mat-form-field> \r\n\r\n              <mat-form-field appearance=\"outline\">  \r\n                <mat-label>Quantity</mat-label>  \r\n                <input matInput (input)=\"onSearchChange($event.target.value)\" type=\"number\" placeholder=\"Quantity\"  formControlName=\"quantity\">   \r\n              <!--  <mat-error *ngIf=\"formErrors.name\">  \r\n                 {{ formErrors.name }}  \r\n                </mat-error>  --> \r\n              </mat-form-field> \r\n\r\n              \r\n              <mat-form-field appearance=\"outline\">  \r\n                <mat-label>Amount</mat-label>  \r\n                 <input matInput type=\"number\" [readonly]=\"hideDiv\" placeholder=\"Amount\" formControlName=\"amount\">  \r\n             \r\n              </mat-form-field>  \r\n              &nbsp;\r\n              <button type=\"button\" #txtVal  mat-raised-button color=\"primary\" (click)=\"onSubmit(billingFrm)\" >\r\n                \r\n                Add\r\n              \r\n                <i class=\"material-icons\">\r\n                    add_circle_outline\r\n                    </i>\r\n                  </button>  \r\n            </div> \r\n\r\n\r\n            <table mat-table #table [dataSource]=\"dataSource\"> \r\n\r\n                \r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef> Product Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container> \r\n          \r\n                <!-- Code Column -->\r\n                <ng-container matColumnDef=\"price\">\r\n                  <th mat-header-cell *matHeaderCellDef> Price </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\r\n                </ng-container>\r\n          \r\n            <!-- Tax Column -->\r\n            <ng-container matColumnDef=\"quantity\">\r\n              <th mat-header-cell *matHeaderCellDef> Quantity </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\r\n            </ng-container>\r\n          \r\n              <!-- Type Column -->\r\n              <ng-container matColumnDef=\"amount\">\r\n                <th mat-header-cell *matHeaderCellDef> Amount </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\r\n              </ng-container>\r\n        \r\n                      \r\n                <ng-container matColumnDef=\"action\">\r\n                  <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                  <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                    <button type=\"button\" title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editBilling(i,element)\">Edit\r\n                        <i class=\"material-icons\">\r\n                            edit\r\n                            </i>\r\n\r\n                    </button>\r\n                    <button type=\"button\"  title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"removeSelectedRows(i,element)\">Delete\r\n                        <i class=\"material-icons\">\r\n                            delete\r\n                            </i>  \r\n\r\n                          \r\n                    </button>\r\n                  </td>\r\n                </ng-container>\r\n                \r\n                 <!--  <h1 ng-repeat=\"xSave in dataSource.data\">{{x}}</h1>-->\r\n          \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n             </table><br>\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n\r\n             <mat-form-field fxFlex=\"40%\">\r\n              <input matInput type=\"text\" [readonly]=\"hideDiv\" formControlName=\"totalAddAmount\"  placeholder=\"Total Amount\">\r\n            </mat-form-field>\r\n\r\n<br>\r\n<br>\r\n\r\n             <div>\r\n\r\n                <mat-form-field appearance=\"outline\"  >  \r\n                        <mat-label>Payment Type</mat-label>  \r\n                        <mat-select placeholder=\"Select a Payment Type\" formControlName=\"paymentType\">  \r\n                          <mat-option>-- None --</mat-option>  \r\n                          <mat-option *ngFor=\"let payment of paymentList;\"\r\n                          [value]=\"payment.paymentType\">  \r\n                            {{ payment.paymentType}}  \r\n                          </mat-option>  \r\n                        </mat-select>  \r\n                     \r\n                      </mat-form-field>\r\n\r\n\r\n              \r\n              <mat-form-field appearance=\"outline\">  \r\n                <mat-label>Reference Number</mat-label>  \r\n                <input matInput placeholder=\"Reference Number\" formControlName=\"referenceNo\" \r\n                   > \r\n              </mat-form-field> \r\n&nbsp;\r\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onSubmitpayment(billingFrm)\" >Add\r\n\r\n                  <i class=\"material-icons\">\r\n                      add_circle_outline\r\n                      </i>\r\n                      \r\n              </button>  \r\n\r\n              </div>\r\n\r\n\r\n             <table mat-table #table [dataSource]=\"dataSourcePayment\"> \r\n\r\n                \r\n                <ng-container matColumnDef=\"paymentType\">\r\n                  <th mat-header-cell *matHeaderCellDef> Payment Type </th>\r\n                  <td mat-cell *matCellDef=\"let elements\"> {{elements.paymentType}} </td>\r\n                </ng-container> \r\n          \r\n                <ng-container matColumnDef=\"referenceNo\">\r\n                  <th mat-header-cell *matHeaderCellDef> Reference Number </th>\r\n                  <td mat-cell *matCellDef=\"let elements\"> {{elements.referenceNo}} </td>\r\n                </ng-container>\r\n          &nbsp;&nbsp;\r\n                  \r\n                <ng-container matColumnDef=\"action\">\r\n                  <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                  <td mat-cell *matCellDef=\"let elements;let i = index;\">\r\n                    <button type=\"button\" title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editPayment(i,elements)\">Edit\r\n                        <i class=\"material-icons\">\r\n                            edit\r\n                            </i>\r\n\r\n                    </button>\r\n                    <button type=\"button\"  title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"removeSelectedRowsPayment(i,elements)\">Delete\r\n                        <i class=\"material-icons\">\r\n                            delete\r\n                            </i>\r\n\r\n                    </button>\r\n                  </td>\r\n                </ng-container>\r\n          \r\n                 <!--  <h1 ng-repeat=\"xSave in dataSource.data\">{{x}}</h1>-->\r\n          \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumnspayment\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumnspayment;\"></tr>\r\n             </table>\r\n             <br>\r\n             <br>\r\n             <button type=\"button\" title=\"Save\" mat-raised-button color=\"primary\" (click)=\"onSubmitSaved(billingFrm,dataSource.data,dataSourcePayment.data)\">Save\r\n\r\n                <i class=\"material-icons\">\r\n                    save\r\n                    </i>\r\n\r\n             </button>\r\n    </form>\r\n\r\n       "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contactform/contactform.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contactform/contactform.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(contactFrm)\"  [formGroup]=\"contactFrm\">  \n    <h2>{{data.modalTitle}}</h2>  \n      \n    <div>\n        <mat-form-field appearance=\"outline\">  \n        <mat-label>Name</mat-label>  \n        <input matInput placeholder=\"Name\" formControlName=\"name\">   \n        <mat-error *ngIf=\"formErrors.name\">  \n          {{ formErrors.name }}  \n        </mat-error>  \n      </mat-form-field>  \n    \n      &nbsp;\n      <mat-form-field appearance=\"outline\">  \n        <mat-label>Code</mat-label>  \n        <input matInput placeholder=\"code\" formControlName=\"code\">  \n        <mat-error *ngIf=\"formErrors.code\">  \n          {{ formErrors.code }}  \n        </mat-error>  \n      </mat-form-field>  \n\n      &nbsp;\n      <mat-form-field appearance=\"outline\">  \n          <mat-label>Tax</mat-label>  \n          <input matInput type=\"number\" placeholder=\"Tax\" formControlName=\"tax\" appTwoDigitDecimaNumber>  \n          <mat-error *ngIf=\"formErrors.tax\">  \n            {{ formErrors.tax }}  \n          </mat-error>  \n        </mat-form-field> \n       \n    </div>\n      <div>  \n         \n      &nbsp;\n      <mat-form-field appearance=\"outline\">  \n          <mat-label>Type</mat-label>  \n        <mat-select placeholder=\"Select a Type\" formControlName=\"type\">  \n          <mat-option>-- None --</mat-option>  \n          <mat-option *ngFor=\"let types of typeList\" [value]=\"types.id\">  \n            {{ types.value }}  \n          </mat-option>  \n        </mat-select>  \n        <mat-error *ngIf=\"formErrors.type \">  \n          {{ formErrors.type }}  \n        </mat-error>  \n      </mat-form-field>  \n\n      &nbsp;\n      <mat-form-field appearance=\"outline\">  \n          <mat-label>Medicine Type</mat-label>  \n        <mat-select placeholder=\"Select a Type\" formControlName=\"medicineType\">  \n          <mat-option>-- None --</mat-option>  \n          <mat-option *ngFor=\"let types of medicineTypeList\" [value]=\"types\">  \n            {{ types }}  \n          </mat-option>  \n        </mat-select>  \n        <mat-error *ngIf=\"formErrors.medicineType \">  \n          {{ formErrors.medicineType }}  \n        </mat-error>  \n      </mat-form-field> \n    </div>  \n    \n    <div> \n\n        <mat-form-field appearance=\"outline\"  >  \n            <mat-label>Manufacturer</mat-label>  \n            <mat-select placeholder=\"Select a Manufacturer\" formControlName=\"manufacturer\">  \n              <mat-option>-- None --</mat-option>  \n              <mat-option *ngFor=\"let manufacturers of dbManuList\" [value]=\"manufacturers.id\">  \n                {{ manufacturers.name }}  \n              </mat-option>  \n            </mat-select>  \n            <mat-error *ngIf=\"formErrors.manufacturer \">  \n              {{ formErrors.manufacturer   }}  \n            </mat-error>  \n          </mat-form-field> \n     <!---- <mat-form-field appearance=\"outline\">  \n      <mat-label>Manufacturer</mat-label>  \n      <input matInput placeholder=\"Manufacturer\" formControlName=\"manufacturer\">  \n      <mat-error *ngIf=\"formErrors.manufacturer\">  \n        {{ formErrors.manufacturer }}  \n      </mat-error>  \n    </mat-form-field>  -->\n    &nbsp;\n    <mat-form-field appearance=\"outline\">  \n      <mat-label>Packing Cost</mat-label>  \n      <input matInput type=\"number\" placeholder=\"Packing Cost\" formControlName=\"packing\">  \n      <mat-error *ngIf=\"formErrors.packing\">  \n        {{ formErrors.packing }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div> \n\n  <div>  \n    <mat-form-field appearance=\"outline\">  \n    <mat-label>Purchase Cost</mat-label>  \n    <input matInput type=\"number\" placeholder=\"Purchase Cost\" formControlName=\"purchaseCost\">  \n    <mat-error *ngIf=\"formErrors.purchaseCost\">  \n      {{ formErrors.purchaseCost }}  \n    </mat-error>  \n  </mat-form-field>  \n  &nbsp;\n  <mat-form-field appearance=\"outline\">  \n    <mat-label>MRP</mat-label>  \n    <input matInput type=\"number\" placeholder=\"MRP\" formControlName=\"mrp\">  \n    <mat-error *ngIf=\"formErrors.mrp\">  \n      {{ formErrors.mrp }}  \n    </mat-error>  \n  </mat-form-field>  \n  \n  &nbsp;\n  <mat-form-field appearance=\"outline\">  \n    <mat-label>Selling Cost</mat-label>  \n    <input matInput type=\"number\" placeholder=\"Selling Cost\" formControlName=\"sellingCost\">  \n    <mat-error *ngIf=\"formErrors.sellingCost\">  \n      {{ formErrors.sellingCost }}  \n    </mat-error>  \n  </mat-form-field>  \n</div> \n   \n    <div>  \n      \n      <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n      <button type=\"submit\" mat-raised-button color=\"primary\" >{{data.modalBtnTitle}}</button>  \n    </div>  \n      \n    </form>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contactlist/contactlist.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contactlist/contactlist.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else contactlist\">\n    <mat-spinner></mat-spinner>\n    </div>\n    <ng-template class=\"contactlist\" #contactlist>\n      <h2 style=\"text-align: center;\">Product List</h2>\n     \n      <div class=\"contactlist-container mat-elevation-z8\">\n          \n        <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addContact()\">Create</button>\n&nbsp;&nbsp;\n          <mat-form-field fxFlex=\"40%\">\n            <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Search\">\n          </mat-form-field>\n        </div>\n        \n       <table mat-table #table [dataSource]=\"dataSource\"> \n    \n          <!-- Id Column -->\n          <!-- <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> Id </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container> -->\n    \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"code\">\n            <th mat-header-cell *matHeaderCellDef> Code </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n          </ng-container>\n    \n      <!-- Tax Column -->\n      <ng-container matColumnDef=\"tax\">\n        <th mat-header-cell *matHeaderCellDef> Tax </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.tax}} </td>\n      </ng-container>\n    \n        <!-- Type Column -->\n        <ng-container matColumnDef=\"type\">\n          <th mat-header-cell *matHeaderCellDef> Type </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n        </ng-container>\n\n\n\n        <ng-container matColumnDef=\"medicineType\">\n          <th mat-header-cell *matHeaderCellDef> Medicine Type </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.medicineType}} </td>\n        </ng-container>\n\n          <!-- Tax Column -->\n      <ng-container matColumnDef=\"manufacturer\">\n        <th mat-header-cell *matHeaderCellDef> Manufacturer </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.manufacturer}} </td>\n      </ng-container>\n     \n\n      <!-- Packing  Column -->\n      <ng-container matColumnDef=\"packing\">\n        <th mat-header-cell *matHeaderCellDef> Packing Cost</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.packing}} </td>\n      </ng-container>\n\n\n           <!--  Purchase Cost Column -->\n      <ng-container matColumnDef=\"purchaseCost\">\n        <th mat-header-cell *matHeaderCellDef> Purchase Cost </th>\n    \n        <td mat-cell *matCellDef=\"let element\"> {{element.purchaseCost}} </td>\n      </ng-container>\n    \n\n        <!-- MRP Column -->\n      <ng-container matColumnDef=\"mrp\">\n        <th mat-header-cell *matHeaderCellDef> MRP </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.mrp}} </td>\n      </ng-container>\n\n      <!-- Selling Column -->\n      <ng-container matColumnDef=\"sellingCost\">\n        <th mat-header-cell *matHeaderCellDef> selling Cost </th>\n    \n        <td mat-cell *matCellDef=\"let element\"> {{element.sellingCost}} </td>\n      </ng-container>\n\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editContact(element.id)\">Edit\n                  <i class=\"material-icons\">\n                      edit\n                      </i>\n              </button>\n              <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteContact(element.id)\">Delete\n                  <i class=\"material-icons\">\n                      delete\n                      </i>\n              </button>\n            </td>\n          </ng-container>\n    \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n       </table>\n      \n          </div>\n    </ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer-addform/customer-addform.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer-addform/customer-addform.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(customerFrm)\" [formGroup]=\"customerFrm\">\n        <div>\n           \n\n                <mat-form-field appearance=\"outline\">  \n                <mat-label>Name</mat-label>  \n                <input matInput placeholder=\"Name\" formControlName=\"name\">   \n              <!--  <mat-error *ngIf=\"formErrors.name\">  \n                 {{ formErrors.name }}  \n                </mat-error>  --> \n              </mat-form-field>  \n            \n              &nbsp;\n              <mat-form-field appearance=\"outline\">  \n                <mat-label>Code</mat-label>  \n                <input matInput placeholder=\"code\" formControlName=\"code\">  \n               <!--  <mat-error *ngIf=\"formErrors.code\">  \n               {{ formErrors.code }}  \n                </mat-error>   --> \n              </mat-form-field>  \n               \n            </div>\n\n            <div>\n                <mat-form-field appearance=\"outline\">  \n                <mat-label>Address</mat-label>  \n                <input matInput placeholder=\"Address\" formControlName=\"address\">   \n      \n              </mat-form-field>  \n            \n              &nbsp;\n              <mat-form-field appearance=\"outline\">  \n                <mat-label>Mobile</mat-label>  \n                <input matInput placeholder=\"mobile\" formControlName=\"mobile\">  \n              </mat-form-field>  \n               \n            </div>\n            <div>  \n      \n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n              <button type=\"submit\" mat-raised-button color=\"primary\" >{{data.modalBtnTitle}}</button>  \n            </div> \n    </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer-list/customer-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer-list/customer-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addCustomer()\">Create</button>\n    &nbsp;&nbsp;\n              <mat-form-field fxFlex=\"40%\">\n                <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Search\">\n              </mat-form-field>&nbsp;&nbsp;&nbsp;&nbsp;\n              <h1> Customer Details</h1>\n            </div>\n  <table mat-table #table [dataSource]=\"dataSource\"> \n      \n          <!-- Id Column -->\n          <!-- <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> Id </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container> -->\n    \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"code\">\n            <th mat-header-cell *matHeaderCellDef> Code </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"address\">\n                <th mat-header-cell *matHeaderCellDef> Address </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"mobile\">\n                    <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n                  </ng-container>\n                  \n  &nbsp;&nbsp;&nbsp;\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editCustomer(element.id)\">Edit\n\n                  <i class=\"material-icons\">\n                      edit\n                      </i>\n              </button>\n             <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteCustomer(element.id)\">Delete\n                <i class=\"material-icons\">\n                    delete\n                    </i>\n              \n             </button>\n            </td>\n          </ng-container>\n    \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n       </table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Theme Made By www.w3schools.com - No Copyright -->\n  <title>Bootstrap Theme Simply Me</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n  <style>\n  body {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n  }\n  p {font-size: 16px;}\n  .margin {margin-bottom: 45px;}\n  .bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n  }\n  .bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n  }\n  .bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n  }\n  .bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n  }\n  .container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n  .navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n  }\n  .navbar-nav  li a:hover {\n    color: #1abc9c !important;\n  }\n  </style>\n</head>\n<body>\n\n<!-- Navbar -->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Welcome!</a>\n    </div>\n  \n  </div>\n</nav>\n\n<!-- Second Container -->\n<div class=\"container-fluid bg-2 text-center\">\n        <h3 class=\"margin\">Products & Billing</h3>\n        <p>Instead of focusing on the competition, focus on the customer.</p>\n      </div>\n      \n<!-- Footer -->\n<footer class=\"container-fluid bg-4 text-center\">\n  <p>@<a href=\"https://www.tofler.in/exabyte-software-private-limited/company/U72900TN2019PTC130497\">ExaByte Software Pvt Ltd</a></p> \n</footer>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manufacturer-add/manufacturer-add.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manufacturer-add/manufacturer-add.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(manuFrm)\" [formGroup]=\"manuFrm\">\r\n    <h2>{{data.modalTitle}}</h2> \r\n        <div>\r\n                <mat-form-field appearance=\"outline\">  \r\n                <mat-label>Name</mat-label>  \r\n                <input matInput placeholder=\"Name\" formControlName=\"name\">   \r\n              <!--  <mat-error *ngIf=\"formErrors.name\">  \r\n                 {{ formErrors.name }}  \r\n                </mat-error>  --> \r\n              </mat-form-field>  \r\n            \r\n              &nbsp;\r\n              <mat-form-field appearance=\"outline\">  \r\n                <mat-label>Code</mat-label>  \r\n                <input matInput placeholder=\"code\" formControlName=\"code\">  \r\n               <!--  <mat-error *ngIf=\"formErrors.code\">  \r\n               {{ formErrors.code }}  \r\n                </mat-error>   --> \r\n              </mat-form-field>  \r\n               \r\n            </div>\r\n            <div>  \r\n      \r\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \r\n              <button type=\"submit\" mat-raised-button color=\"primary\" >{{data.modalBtnTitle}}</button>  \r\n            </div> \r\n    </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manufacturer/manufacturer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manufacturer/manufacturer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addManufacturer()\">Create</button>\n  &nbsp;&nbsp;\n            <mat-form-field fxFlex=\"40%\">\n              <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Search\">\n            </mat-form-field>\n          </div>\n<table mat-table #table [dataSource]=\"dataSource\"> \n    \n        <!-- Id Column -->\n        <!-- <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> Id </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container> -->\n  \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n  \n        <!-- Code Column -->\n        <ng-container matColumnDef=\"code\">\n          <th mat-header-cell *matHeaderCellDef> Code </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n        </ng-container>\n&nbsp;&nbsp;&nbsp;\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef> Action </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editManu(element.id)\">Edit\n                <i class=\"material-icons\">\n                    edit\n                    </i>\n            </button>\n           <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteManu(element.id)\">Delete\n              <i class=\"material-icons\">\n                  delete\n                  </i>\n           </button>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n     </table>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Contact Application';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
        ],
    })
], AppMaterialModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _manufacturer_add_Manufacturer_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manufacturer-add/Manufacturer-add.component */ "./src/app/manufacturer-add/Manufacturer-add.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_addform_customer_addform_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-addform/customer-addform.component */ "./src/app/customer-addform/customer-addform.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _billinglist_billinglist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./billinglist/billinglist.component */ "./src/app/billinglist/billinglist.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _billing_view_billing_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./billing-view/billing-view.component */ "./src/app/billing-view/billing-view.component.ts");
/* harmony import */ var _billing_update_billing_update_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./billing-update/billing-update.component */ "./src/app/billing-update/billing-update.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
























//import { FlexLayoutModule } from '@angular/flex-layout';

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_10__["ContactformComponent"],
            _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_11__["ContactlistComponent"],
            _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_13__["ManufacturerComponent"],
            _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_15__["CustomerListComponent"],
            _customer_addform_customer_addform_component__WEBPACK_IMPORTED_MODULE_16__["CustomerAddformComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
            _billinglist_billinglist_component__WEBPACK_IMPORTED_MODULE_19__["BillinglistComponent"],
            _billing_view_billing_view_component__WEBPACK_IMPORTED_MODULE_21__["BillingViewComponent"],
            _billing_update_billing_update_component__WEBPACK_IMPORTED_MODULE_22__["BillingUpdateComponent"],
            _manufacturer_add_Manufacturer_add_component__WEBPACK_IMPORTED_MODULE_14__["ManufacturerAddComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot()
        ],
        // entryComponents:[
        // ManufacturerAddComponent
        //],
        providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _manufacturer_add_Manufacturer_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manufacturer-add/Manufacturer-add.component */ "./src/app/manufacturer-add/Manufacturer-add.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_addform_customer_addform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-addform/customer-addform.component */ "./src/app/customer-addform/customer-addform.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _billinglist_billinglist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billinglist/billinglist.component */ "./src/app/billinglist/billinglist.component.ts");
/* harmony import */ var _billing_view_billing_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./billing-view/billing-view.component */ "./src/app/billing-view/billing-view.component.ts");
/* harmony import */ var _billing_update_billing_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./billing-update/billing-update.component */ "./src/app/billing-update/billing-update.component.ts");











const appRoutes = [{
        path: 'productDetails',
        component: _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_1__["ContactlistComponent"]
    }, {
        path: 'contactform',
        component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__["ContactformComponent"]
    }, {
        path: 'manufacturer',
        component: _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_3__["ManufacturerComponent"]
    },
    {
        path: 'manufacturerAdd',
        component: _manufacturer_add_Manufacturer_add_component__WEBPACK_IMPORTED_MODULE_4__["ManufacturerAddComponent"]
    },
    {
        path: 'customerlist',
        component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomerListComponent"]
    },
    {
        path: 'customerAdd',
        component: _customer_addform_customer_addform_component__WEBPACK_IMPORTED_MODULE_6__["CustomerAddformComponent"]
    },
    {
        path: '',
        //pathMatch: 'full',  
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    },
    {
        path: 'billingList',
        component: _billinglist_billinglist_component__WEBPACK_IMPORTED_MODULE_8__["BillinglistComponent"]
    },
    {
        path: 'billingView',
        component: _billing_view_billing_view_component__WEBPACK_IMPORTED_MODULE_9__["BillingViewComponent"]
    },
    {
        path: 'billingUpdate/:bill/:code/:date/:name/:amount/:mobile',
        component: _billing_update_billing_update_component__WEBPACK_IMPORTED_MODULE_10__["BillingUpdateComponent"]
    }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/billing-update/billing-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/billing-update/billing-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 70%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy11cGRhdGUvYmlsbGluZy11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmctdXBkYXRlL2JpbGxpbmctdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/billing-update/billing-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/billing-update/billing-update.component.ts ***!
  \************************************************************/
/*! exports provided: BillingUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingUpdateComponent", function() { return BillingUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let BillingUpdateComponent = class BillingUpdateComponent {
    constructor(snackBar, fb, route, _contactService) {
        this.snackBar = snackBar;
        this.fb = fb;
        this.route = route;
        this._contactService = _contactService;
        this.displayedColumns = ['name', 'price', 'quantity', 'amount', 'action'];
        this.displayedColumnspayment = ['paymentType', 'referenceNo', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.dataSourcePayment = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.billingDtlDup = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.paymentDtlDup = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.paymentListd = [{
                paymentType: 'Cash'
            }, {
                paymentType: 'Cheque'
            }, {
                paymentType: 'Online'
            }
        ];
    }
    ngOnInit() {
        this.billNumber = this.route.snapshot.params.bill;
        this.datehdr = this.route.snapshot.params.date;
        this.customerName = this.route.snapshot.params.name;
        this.totalAmount = this.route.snapshot.params.amount;
        this.mobileNumber = this.route.snapshot.params.mobile;
        this.cusCode = this.route.snapshot.params.code;
        this.route.snapshot.paramMap.get('bill');
        this.billDetailListAmountList();
        this.paymentList();
        this.manuList();
        this.productInitList();
        this.customerListMeth();
        this.billingFrm = this.fb.group({
            name: [this.productName],
            amount: [''],
            quantity: [''],
            price: [''],
            sellingCost: [''],
            code: [this.cusCode],
            date: [this.datehdr],
            bill: [this.billNumber],
            mobile: [this.mobileNumber],
            paymentType: [''],
            referenceNo: [''],
            cusName: [this.customerName],
            CusAddress: [this.customerAddress],
            totalAddAmount: [this.totalAmount]
        });
    }
    ///Quantity List
    onSearchChange(searchValue) {
        this.totalCost = this.billingFrm.value.price * searchValue;
        this.billingFrm = this.fb.group({
            id: [this.indexValueRename],
            price: [this.billingFrm.value.price],
            name: [this.billingFrm.value.name],
            amount: [this.totalCost],
            quantity: [searchValue],
            sellingCost: [''],
            code: [this.cusCode],
            date: [this.datehdr],
            bill: [this.billNumber],
            mobile: [this.mobileNumber],
            paymentType: [''],
            referenceNo: [''],
            cusName: [this.customerName],
            CusAddress: [this.customerAddress],
            totalAddAmount: [this.totalAmount]
        });
    }
    customerListMeth() {
        this._contactService.getCustomerList(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'getCustomerList')
            .subscribe(customers => {
            this.customerList = customers;
            let cusNamendex = this.customerList.findIndex(x => x.code.trim().toLocaleLowerCase() === this.cusCode);
            const cusAddress = this.customerList[cusNamendex].address;
            this.customerAddress = cusAddress;
            this.billingFrm = this.fb.group({
                name: [this.productName],
                amount: [''],
                quantity: [''],
                price: [''],
                sellingCost: [''],
                code: [this.cusCode],
                date: [this.datehdr],
                bill: [this.billNumber],
                mobile: [this.mobileNumber],
                paymentType: [''],
                referenceNo: [''],
                cusName: [this.customerName],
                CusAddress: [this.customerAddress],
                totalAddAmount: [this.totalAmount]
            });
        });
    }
    //Product table List
    manuList() {
        this._contactService.getManuList2(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getAllProd')
            .subscribe(manufacturer => {
            this.productList = manufacturer;
        });
    }
    paymentList() {
        this._contactService.getManuListPaymentLatest(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getPaymentListCtrl', this.billNumber).subscribe(paymetList => {
            this.paymentDetlList = paymetList;
            this.dataSourcePayment.data = this.paymentDetlList;
            //this.getpaymentDetails();
        });
    }
    productInitList() {
        this._contactService.productInitList(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getproductInitList', this.billNumber).subscribe(productInitList => {
            this.productInitListData = productInitList;
            for (var kt = 0; kt < this.dataSource.data.length; kt++) {
                this.dataSource.data[kt].name = this.productInitListData[kt].name;
            }
            this.dataSource.data = this.BillingDtlList;
        });
    }
    //*****************billing details list*****************
    billDetailListAmountList() {
        this._contactService.getManuList2134(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getAmounrDtlListUpdate', this.billNumber).subscribe(amountDetails => {
            this.BillingDtlList = amountDetails;
            this.dataSource.data = this.BillingDtlList;
        });
    }
    getblgDetails() {
        for (var i = 0; i < this.BillingDtlList.length; i++) {
            if (this.BillingDtlList[i].bill == this.billNumber) {
                let billIndex = this.BillingDtlList.findIndex(x => x.bill === this.billNumber);
                this.billingDtlDup.data[i] = this.BillingDtlList[billIndex];
                console.log(this.billingDtlDup.data);
            }
        }
        this.dataSource.data = this.billingDtlDup.data;
    }
    getpaymentDetails() {
        for (var i = 0; i < this.paymentDetlList.length; i++) {
            if (this.paymentDetlList[i].bill == this.billNumber) {
                let paymentIndex = this.paymentDetlList.findIndex(x => x.bill === this.billNumber);
                this.paymentDtlDup.data[i] = this.paymentDetlList[paymentIndex];
                console.log(this.paymentDtlDup.data);
            }
        }
        this.dataSourcePayment.data = this.paymentDtlDup.data;
    }
    deleteAll(formDataz, datattt, dataPayment) {
        this._contactService.deleteBillingHeader(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'deleteBillingHeader', this.billNumber).subscribe(data => {
            //deletePayment    
            this._contactService.deleteBillingDtl(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'deleteBillingDtl', this.billNumber).subscribe(data => {
                alert(data);
            }, error => {
                //  alert(error);
                // this.dialogRef.close('error');
            });
        }, error => {
            //  alert(error);
            // this.dialogRef.close('error');
        });
        this._contactService.paymenttes(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'deletePaymentAmt', this.billNumber).subscribe(data => {
            this._contactService.deletePaymentdtl(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'deletePaymentdtl', this.billNumber).subscribe(data => {
            }, error => {
                this.onSubmitSaved(formDataz, datattt, dataPayment);
                // alert(error);
                // this.dialogRef.close('error');
            });
        });
    }
    //Update
    onSubmitSaved(formDataz, datattt, dataPayment) {
        if (formDataz.value.CusAddress != null && formDataz.value.bill != null && datattt.length != 0 && dataPayment != null) {
            this._contactService.saveBillingHdr(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'saveBillingHdr', formDataz.value).subscribe(data => {
                // Success
                if (data.message) {
                    this.returnId = data.message;
                    if (datattt.length == 0) {
                        alert("Please Add Product Details..");
                    }
                    else {
                        // datattt.length = (datattt.length)-1;
                        //  dataPayment.length = (dataPayment.length)-1;
                        //Payment Loop
                        for (var i = 0; i < dataPayment.length; i++) {
                            dataPayment[i].billingHdrId = this.returnId;
                            this._contactService.savePayment(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'addPayment', dataPayment[i]).subscribe(data => {
                                this._contactService.totalAmountCalculation(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'totalAmount', formDataz.value).subscribe(data => {
                                    // Success
                                    if (data.id) {
                                        //    this.dialogRef.close('success');
                                    }
                                    else {
                                        //    this.dialogRef.close('error');
                                    }
                                }, error => {
                                    //   this.dialogRef.close('error');
                                });
                                // Success
                                if (data.message) {
                                    //    this.dialogRef.close('success');
                                }
                                else {
                                    //    this.dialogRef.close('error');
                                }
                            }, error => {
                                //   this.dialogRef.close('error');
                            });
                        }
                        for (var i = 0; i < datattt.length; i++) {
                            datattt[i].bill = formDataz.value.bill;
                            datattt[i].billingHdrId = this.returnId;
                            // var eachObject = data[i];
                            this._contactService.saveBillingUpdate(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'addBillingUpdate', datattt[i]).subscribe(data => {
                                // Success
                                if (data.message == 'Billing is deleted successfully.') {
                                    //    this.dialogRef.close('success');
                                }
                                else {
                                    //    this.dialogRef.close('error');
                                }
                            }, error => {
                                //   this.dialogRef.close('error');
                            });
                        }
                    }
                    //    this.dialogRef.close('success');
                }
                else {
                    //    this.dialogRef.close('error');
                }
                this.snackBar.open("Data Saved Successfully", '', {
                    duration: 3000
                });
                this.dataSource.data = [];
                this.dataSourcePayment.data = [];
                this.billingFrm = this.fb.group({
                    name: [],
                    amount: [],
                    quantity: [''],
                    price: [''],
                    sellingCost: [''],
                    code: [''],
                    date: [],
                    bill: [''],
                    mobile: [''],
                    paymentType: [''],
                    referenceNo: [''],
                    cusName: [''],
                    CusAddress: ['']
                });
            }, error => {
                //   this.dialogRef.close('error');
            });
        }
        else {
            this.snackBar.open("Please fill Details", '', {
                duration: 3000
            });
        }
    }
    onSubmitpayment(formData) {
        const finaldata = formData.value;
        this.addRowPayment(finaldata);
        this.dataSourcePayment.data.push(finaldata);
    }
    //AMount Add button func
    onSubmit(formData) {
        const finaldata = formData.value;
        this.addRow(finaldata);
        this.totalAddAmount = this.dataSource.data.reduce((summ, v) => summ += (v.amount), 0);
        this.billingFrm = this.fb.group({
            id: [this.indexValueRename],
            price: [this.resultRename],
            name: [this.prodNameRename],
            quantity: [this.billingFrm.value.quantity],
            amount: [this.totalCost],
            sellingCost: [''],
            code: [this.cusCode],
            date: [this.datehdr],
            bill: [this.billNumber],
            mobile: [this.mobileNumber],
            paymentType: [''],
            referenceNo: [''],
            cusName: [this.customerName],
            CusAddress: [this.customerAddress],
            totalAddAmount: [this.totalAddAmount]
        });
        this.dataSource.data.push(finaldata);
        this.dataSource.data.length = (this.dataSource.data.length) - 1;
    }
    addRow(finaldata) {
        if (this.isEdit == true) {
            this.dataSource.data.splice(finaldata.id, 1);
            //this.dataSource.data.length = (this.dataSource.data.length)-1;
            this.dataSource.data = [...this.dataSource.data, finaldata];
            this.isEdit = undefined;
        }
        else {
            this.dataSource.data = [...this.dataSource.data, finaldata];
        }
    }
    addRowPayment(finaldata) {
        if (this.dataSourcePayment.data.length > 1) {
            this.dataSourcePayment.data.length = (this.dataSourcePayment.data.length) - 1;
            this.dataSourcePayment.data = [...this.dataSourcePayment.data, finaldata];
        }
        else {
            this.dataSourcePayment.data = [...this.dataSourcePayment.data, finaldata];
        }
    }
    //product drop down change
    selected(indexs) {
        let indexValue = this.productList.findIndex(x => x.id === indexs.value);
        const prodName = this.productList[indexValue].name;
        const result = this.productList[indexValue].sellingCost;
        this.indexValueRename = indexs.value;
        this.resultRename = result;
        this.prodNameRename = prodName;
        this.billAmount = this.billingFrm.value.bill;
        this.billingFrm = this.fb.group({
            id: [this.indexValueRename],
            price: [this.resultRename],
            name: [this.prodNameRename],
            amount: [''],
            quantity: [''],
            sellingCost: [''],
            code: [this.cusCode],
            date: [this.datehdr],
            bill: [this.billNumber],
            mobile: [this.mobileNumber],
            paymentType: [''],
            referenceNo: [''],
            cusName: [this.customerName],
            CusAddress: [this.customerAddress],
            totalAddAmount: [this.totalAmount]
        });
    }
    editBilling(id, datas) {
        this.isEdit = true;
        const finaldatus = datas;
        this.dataSource.data;
        console.log(id, finaldatus);
        this.billingFrm = this.fb.group({
            id: [id],
            name: [datas.name],
            amount: [datas.amount],
            quantity: [datas.quantity],
            price: [datas.price],
            sellingCost: [datas.sellingCost]
        }); //this.dataSource.data
    }
    editPayment(id, datas) {
        const finaldatus = datas;
        this.dataSourcePayment.data;
        console.log(id, finaldatus);
        this.billingFrm = this.fb.group({
            paymentType: [datas.paymentType],
            referenceNo: [datas.referenceNo]
        }); //this.dataSource.data
    }
    removeSelectedRowsPayment(index, formDatatab) {
        if (this.dataSourcePayment.data.length < 1) {
            this.dataSourcePayment.data = [...this.dataSourcePayment.data];
        }
        else {
            this.dataSourcePayment.data.length = (this.dataSourcePayment.data.length) - 1;
            this.dataSourcePayment.data.splice(index, 1);
            this.dataSourcePayment.data = [...this.dataSourcePayment.data];
        }
    }
    removeSelectedRows(index, formDatatab) {
        if (this.dataSource.data.length < 1) {
            this.dataSource.data = [...this.dataSource.data];
        }
        else {
            // this.dataSource.data.length = (this.dataSource.data.length)-1;
            this.dataSource.data.splice(index, 1);
            this.dataSource.data = [...this.dataSource.data];
            this.totalAddAmount = this.dataSource.data.reduce((summ, v) => summ += (v.amount), 0);
            this.billingFrm = this.fb.group({
                id: [this.indexValueRename],
                price: [this.billingFrm.value.price],
                name: [this.billingFrm.value.name],
                amount: [this.totalCost],
                quantity: [this.billingFrm.value.quantity],
                sellingCost: [''],
                code: [this.cusCode],
                date: [this.datehdr],
                bill: [this.billNumber],
                mobile: [this.mobileNumber],
                paymentType: [''],
                referenceNo: [''],
                cusName: [this.customerName],
                CusAddress: [this.customerAddress],
                totalAddAmount: [this.totalAmount]
            });
        }
    }
    hideDiv() {
    }
};
BillingUpdateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] }
];
BillingUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing-update',
        template: __webpack_require__(/*! raw-loader!./billing-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/billing-update/billing-update.component.html"),
        styles: [__webpack_require__(/*! ./billing-update.component.css */ "./src/app/billing-update/billing-update.component.css")]
    })
], BillingUpdateComponent);



/***/ }),

/***/ "./src/app/billing-view/billing-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/billing-view/billing-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 70%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy12aWV3L2JpbGxpbmctdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy12aWV3L2JpbGxpbmctdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/billing-view/billing-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/billing-view/billing-view.component.ts ***!
  \********************************************************/
/*! exports provided: BillingViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingViewComponent", function() { return BillingViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let BillingViewComponent = class BillingViewComponent {
    constructor(snackBar, router, dialog, fb, datePipe, _contactService) {
        this.snackBar = snackBar;
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.datePipe = datePipe;
        this._contactService = _contactService;
        this.displayedColumns = ['bill', 'date', 'cusName', 'mobile', 'amount', 'action'];
        this.displayedColumnspayment = ['paymentType', 'referenceNo'];
        this.dataSourceDup = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceDup2 = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceDup5 = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceDup3 = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceCustomer = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.BillingHeaderDetails = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.codeNotEmpty = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceCustomerDup = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.LastDatasrc = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.savedTotalAMount = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.codeList = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.amountListDataSrc = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.testAmount = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.getBillingHeaderDetails();
        this.billDetailListAmountList();
        this.customerList();
        this.TestList();
        this.billingListFrm = this.fb.group({
            code: [''],
            mobile: [''],
            fromDate: [''],
            toDate: ['']
        });
    }
    //Customer Detail List
    customerList() {
        this._contactService.getCustomerList(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT_CUST + 'getCustomerList')
            .subscribe(customers => {
            this.dataSourceCustomer.data = customers;
        });
    }
    TestList() {
        this._contactService.getAmountTest(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT_CUST + 'getAmountTest')
            .subscribe(test => {
            this.testData = test;
        });
    }
    totalValues() {
        this._contactService.totalAmount(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'totalAmount', this.billNumberParam).subscribe(amountDetails => {
            this.amountListDataSrc.data = amountDetails;
        });
    }
    ///EDIT
    editBilling(id, datas) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_7__["DBOperation"].update;
        this.modalTitle = 'Edit Billing';
        this.modalBtnTitle = 'Update';
        this.manufacturer = this.dataSource.data.filter(x => x.bill === datas.bill)[0];
        // this.router.navigateByUrl('/billingUpdate', { state: { bill:this.manufacturer.bill } });
        this.router.navigate(['/billingUpdate', datas.bill, datas.code, datas.date, datas.name, datas.amount, datas.mobile]);
    }
    //Detail List
    billDetailListAmountList() {
        this._contactService.getManuList213(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'getAmounrDtlList').subscribe(amountDetails => {
            this.amountListDataSrc.data = amountDetails;
            this.savedTotalAMount.data = amountDetails;
        });
    }
    //*****************Biliing Header Details************** */
    getBillingHeaderDetails() {
        this._contactService.getManuList21(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'getbillingDtl')
            .subscribe(headerLst => {
            this.BillingHeaderDetails.data = headerLst;
        });
    }
    billDetailList() {
        this.dataSource.data = [];
        this.dataSourceDup2.data = [];
        this.codeNotEmpty.data = [];
        if (this.billingListFrm.value.fromDate != '' && this.billingListFrm.value.toDate != '' && this.billingListFrm.value.code != '') {
            if (this.billingListFrm.value.fromDate.getTime() < this.billingListFrm.value.toDate.getTime()) {
                this._contactService.getManuList21(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'getbillingDtl')
                    .subscribe(billingDtl => {
                    this.dataSourceDup.data = billingDtl;
                    if (this.billingListFrm.value.code != '' && this.billingListFrm.value.mobile == '') {
                        for (var i = 0; i < this.dataSourceDup.data.length; i++) {
                            if (this.dataSourceDup.data[i].code == this.billingListFrm.value.code) {
                                let cusMbilendex = this.dataSourceCustomer.data.findIndex(x => x.code === this.billingListFrm.value.code);
                                this.customerName = this.dataSourceCustomer.data[cusMbilendex].name;
                                this.customerMobileNum = this.dataSourceCustomer.data[cusMbilendex].mobile;
                                this.customerBillNumber = this.dataSourceDup.data[i].bill;
                                this.billNumberParam = this.dataSourceDup.data[i].bill;
                                this.dataSourceDup2.data.push(this.dataSourceDup.data[i]);
                            }
                            else if (this.dataSourceDup.data[i].mobile == this.billingListFrm.value.mobile) {
                            }
                        }
                        for (var leng = 0; leng < this.dataSourceDup2.data.length; leng++) {
                            let newDate = new Date(this.dataSourceDup2.data[leng].date);
                            let fromDate = new Date(this.billingListFrm.value.fromDate);
                            let toDate = new Date(this.billingListFrm.value.toDate);
                            if (fromDate < newDate && newDate < toDate) {
                                this.dataSourceDup5.data[leng] = this.dataSourceDup2.data[leng];
                            }
                            else {
                                this.snackBar.open("No Records Found Between the Given Date", '', {
                                    duration: 3000
                                });
                            }
                        }
                        this.dataSource.data = this.dataSourceDup5.data;
                        for (i = 0; i < this.dataSource.data.length; i++) {
                            this.dataSource.data[i].name = this.customerName;
                            this.dataSource.data[i].mobile = this.customerMobileNum;
                            // this.dataSource.data[i].amount=this.testAmount[i];
                            let amntIndx = this.testData.findIndex(x => x.bill.trim().toLocaleLowerCase() === this.dataSource.data[i].bill);
                            this.dataSource.data[i].amount = this.testData[amntIndx].totalAddAmount;
                        }
                        //     let cusMbilendex = this.dataSourceDup.data.findIndex(x => x.code === this.billingListFrm.value.code );
                    }
                    //Both EMpyty
                });
            }
            else {
                this.snackBar.open("From date Should Not greater To Date", '', {
                    duration: 3000
                });
            }
        }
        else if (this.billingListFrm.value.code == '' && this.billingListFrm.value.mobile != '' && this.billingListFrm.value.fromDate == '' && this.billingListFrm.value.toDate == '') {
            let datas = this.dataSourceCustomer.data.findIndex(x => x.mobile === this.billingListFrm.value.mobile);
            this.billingListFrm.value.code = this.dataSourceCustomer.data[datas].code;
            for (var loott = 0; loott < this.BillingHeaderDetails.data.length; loott++) {
                if (this.BillingHeaderDetails.data[loott].code == this.billingListFrm.value.code) {
                    let cusMbilendex = this.dataSourceCustomer.data.findIndex(x => x.code === this.billingListFrm.value.code);
                    this.customerName = this.dataSourceCustomer.data[cusMbilendex].name;
                    this.customerMobileNum = this.dataSourceCustomer.data[cusMbilendex].mobile;
                    //this.customerBillNumber=this.BillingHeaderDetails.data[loot].bill;
                    this.codeNotEmpty.data.push(this.BillingHeaderDetails.data[loott]);
                }
            }
            this.dataSource.data = this.codeNotEmpty.data;
            for (i = 0; i < this.dataSource.data.length; i++) {
                this.dataSource.data[i].name = this.customerName;
                this.dataSource.data[i].mobile = this.customerMobileNum;
                let amntIndx = this.testData.findIndex(x => x.bill.trim().toLocaleLowerCase() === this.dataSource.data[i].bill);
                this.dataSource.data[i].amount = this.testData[amntIndx].totalAddAmount;
            }
        }
        //******************************ALL EMPTY************************************************
        else if (this.billingListFrm.value.code == '' && this.billingListFrm.value.mobile == '' && this.billingListFrm.value.fromDate == '' && this.billingListFrm.value.toDate == '') {
            this.dataSource.data = this.BillingHeaderDetails.data;
            for (var i = 0; i < this.dataSource.data.length; i++) {
                let cusMbilendex = this.dataSourceCustomer.data.findIndex(x => x.code === this.dataSource.data[i].code);
                this.customerName = this.dataSourceCustomer.data[cusMbilendex].name;
                this.customerMobileNum = this.dataSourceCustomer.data[cusMbilendex].mobile;
                let amntIndx = this.testData.findIndex(x => x.bill.trim().toLocaleLowerCase() === this.dataSource.data[i].bill);
                this.dataSource.data[i].amount = this.testData[amntIndx].totalAddAmount;
                this.dataSource.data[i].name = this.customerName;
                this.dataSource.data[i].mobile = this.customerMobileNum;
            }
        }
        //***********CODE NOT EMPTY***************** */
        else if (this.billingListFrm.value.code != '' && this.billingListFrm.value.mobile == '' && this.billingListFrm.value.fromDate == '' && this.billingListFrm.value.toDate == '') {
            for (var loot = 0; loot < this.BillingHeaderDetails.data.length; loot++) {
                if (this.BillingHeaderDetails.data[loot].code == this.billingListFrm.value.code) {
                    let cusMbilendex = this.dataSourceCustomer.data.findIndex(x => x.code === this.billingListFrm.value.code);
                    this.customerName = this.dataSourceCustomer.data[cusMbilendex].name;
                    this.customerMobileNum = this.dataSourceCustomer.data[cusMbilendex].mobile;
                    //this.customerBillNumber=this.BillingHeaderDetails.data[loot].bill;
                    this.codeNotEmpty.data.push(this.BillingHeaderDetails.data[loot]);
                }
            }
            this.dataSource.data = this.codeNotEmpty.data;
            for (i = 0; i < this.dataSource.data.length; i++) {
                this.dataSource.data[i].name = this.customerName;
                this.dataSource.data[i].mobile = this.customerMobileNum;
                let amntIndx = this.testData.findIndex(x => x.bill.trim().toLocaleLowerCase() === this.dataSource.data[i].bill);
                this.dataSource.data[i].amount = this.testData[amntIndx].totalAddAmount;
            }
        }
        //**********FROM DATE & TO DATA**************** */
        else if (this.billingListFrm.value.code == '' && this.billingListFrm.value.mobile == '' && this.billingListFrm.value.fromDate != '' && this.billingListFrm.value.toDate != '') {
            for (var leng = 0; leng < this.BillingHeaderDetails.data.length; leng++) {
                let newDate = new Date(this.BillingHeaderDetails.data[leng].date);
                let fromDate = new Date(this.billingListFrm.value.fromDate);
                let toDate = new Date(this.billingListFrm.value.toDate);
                if (fromDate < newDate && newDate < toDate) {
                    this.dataSourceDup2.data[leng] = this.BillingHeaderDetails.data[leng];
                    this.billingListFrm.value.code = this.dataSourceDup2.data[leng].code;
                    let cusMbilendex = this.dataSourceCustomer.data.findIndex(x => x.code === this.billingListFrm.value.code);
                    this.dataSourceDup2.data[leng].name = this.dataSourceCustomer.data[cusMbilendex].name;
                    this.dataSourceDup2.data[leng].mobile = this.dataSourceCustomer.data[cusMbilendex].mobile;
                    let amntIndx = this.testData.findIndex(x => x.bill.trim().toLocaleLowerCase() === this.dataSourceDup2.data[leng].bill);
                    this.dataSourceDup2.data[leng].amount = this.testData[amntIndx].totalAddAmount;
                }
                else {
                    this.snackBar.open("No Records Found Between the Given Date", '', {
                        duration: 3000
                    });
                }
            }
            this.dataSource.data = this.dataSourceDup2.data;
        }
    }
    resetPage() {
        this.billingListFrm = this.fb.group({
            code: [''],
            mobile: [''],
            fromDate: [''],
            toDate: ['']
        });
        this.dataSource.data = [];
    }
    onSubmitSave(data, formData) {
    }
    searchCustomer(formData) {
        //this.contact = this.billingDtlList.filter(x => x.bill === formData.value.bill)[0];
        //alert(this.contact);
        if (formData.value.mobile != '' && formData.value.code == '') {
            for (var i = 0; i < this.billingDtlList.length; i++) {
                if (this.billingDtlList[i].bill == formData.value.bill) {
                    let cusMbilendex = this.dataSourceCustomer.data.findIndex(x => x.code === this.billingListFrm.value.code);
                    const customerName = this.dataSourceCustomer.data[cusMbilendex].name;
                    //this.billingDtlList[i]= this. billingDtlList[i];
                    //this.dataSource.data.push(this.billingDtlList[i].amount);
                    this.detailsDataFinal[i] = this.billingDtlList[i];
                    //this.billingListFrm= this.fb.group({
                    //price : [this.billingDtlList[i].price]
                    //});
                }
                else {
                }
                let cusMbilendex = this.billingDtlList[i].findIndex(x => x.bill.trim().toLocaleLowerCase() === formData.value.bill);
                //// let cusMbilendex = this.billingDtlList[i].bill == formData.value.bill ;
                //
                //alert(this.dataSource.data);
            }
            this.dataSource.data = this.detailsDataFinal;
        }
        else {
        }
    }
};
BillingViewComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }
];
BillingViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing-view',
        template: __webpack_require__(/*! raw-loader!./billing-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/billing-view/billing-view.component.html"),
        styles: [__webpack_require__(/*! ./billing-view.component.css */ "./src/app/billing-view/billing-view.component.css")]
    })
], BillingViewComponent);



/***/ }),

/***/ "./src/app/billinglist/billinglist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/billinglist/billinglist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 70%;\r\n}\r\n\r\n.add-on .input-group-btn > .btn {\r\n  border-left-width:0;left:-2px;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n/* stop the glowing blue shadow */\r\n\r\n.add-on .form-control:focus {\r\n box-shadow:none;\r\n -webkit-box-shadow:none; \r\n border-color:#cccccc; \r\n}\r\n\r\n.form-control{width:20%}\r\n\r\n.navbar-nav > li > a {\r\n  border-right: 1px solid #ddd;\r\n  padding-bottom: 15px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.navbar-nav:last-child{ border-right:0}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZ2xpc3QvYmlsbGluZ2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQixDQUFDLFNBQVM7RUFFN0IsZ0RBQWdEO0FBQ2xEOztBQUNBLGlDQUFpQzs7QUFDakM7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtBQUNyQjs7QUFDQSxjQUFjLFNBQVM7O0FBQ3ZCO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBQ0Esd0JBQXdCLGNBQWMiLCJmaWxlIjoic3JjL2FwcC9iaWxsaW5nbGlzdC9iaWxsaW5nbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5hZGQtb24gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOjA7bGVmdDotMnB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxufVxyXG4vKiBzdG9wIHRoZSBnbG93aW5nIGJsdWUgc2hhZG93ICovXHJcbi5hZGQtb24gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiBib3gtc2hhZG93Om5vbmU7XHJcbiAtd2Via2l0LWJveC1zaGFkb3c6bm9uZTsgXHJcbiBib3JkZXItY29sb3I6I2NjY2NjYzsgXHJcbn1cclxuLmZvcm0tY29udHJvbHt3aWR0aDoyMCV9XHJcbi5uYXZiYXItbmF2ID4gbGkgPiBhIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5uYXZiYXItbmF2Omxhc3QtY2hpbGR7IGJvcmRlci1yaWdodDowfSJdfQ== */"

/***/ }),

/***/ "./src/app/billinglist/billinglist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/billinglist/billinglist.component.ts ***!
  \******************************************************/
/*! exports provided: BillinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillinglistComponent", function() { return BillinglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");







let BillinglistComponent = class BillinglistComponent {
    constructor(snackBar, fb, _contactService) {
        this.snackBar = snackBar;
        this.fb = fb;
        this._contactService = _contactService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dataSourcePayment = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.BillingHeaderDetails = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['name', 'price', 'quantity', 'amount', 'action'];
        this.displayedColumnspayment = ['paymentType', 'referenceNo', 'action'];
        this.paymentList = [{
                paymentType: 'Cash'
            }, {
                paymentType: 'Cheque'
            }, {
                paymentType: 'Online'
            }
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
    }
    onSearchChange(searchValue) {
        this.totalCost = this.billingFrm.value.price * searchValue;
        this.billingFrm = this.fb.group({
            id: [this.indexValueRename],
            price: [this.billingFrm.value.price],
            name: [this.billingFrm.value.name],
            amount: [this.totalCost],
            quantity: [searchValue],
            sellingCost: [''],
            code: [this.codeRename],
            date: [this.date.value],
            bill: [this.billAmount],
            mobile: [this.mobileRename],
            paymentType: [''],
            referenceNo: [''],
            cusName: [this.cusNameRename],
            CusAddress: [this.cusAddressRename],
            totalAddAmount: ['']
        });
    }
    manuList() {
        this._contactService.getManuList2(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getAllProd')
            .subscribe(manufacturer => {
            this.productList = manufacturer;
        });
    }
    changeClient(data) {
        alert("selected --->" + data);
    }
    findForeignKey() {
        this._contactService.getBillingHdrDetails(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getBillingHdrDetails')
            .subscribe(manufacturer => {
            this.hdrDetails = manufacturer;
        });
    }
    onSubmitSaved(formDataz, datattt, dataPayment) {
        this._contactService.totalAmountCalculation(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'totalAmount', formDataz.value).subscribe(data => {
            // Success
            if (data.id) {
                //    this.dialogRef.close('success');
            }
            else {
                //    this.dialogRef.close('error');
            }
        }, error => {
            //   this.dialogRef.close('error');
        });
        if (formDataz.value.CusAddress != null && formDataz.value.bill != null && datattt.length != 0 && dataPayment != null) {
            this._contactService.saveBillingHdr(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'saveBillingHdr', formDataz.value).subscribe(data => {
                // Success
                if (data.message) {
                    this.returnId = data.message;
                    if (datattt.length == 0) {
                        // this.dataSource.data = [...this.dataSource.data, data];
                        alert("Please Add Product Details..");
                    }
                    else {
                        datattt.length = (datattt.length) - 1;
                        //this.dataSource.data.splice(this.dataSource.data.length, 1);
                        //     this.dataSource.data = [...this.dataSource.data, data];
                        // this.dataSourcePayment.data.length = (this.dataSourcePayment.data.length)-1;
                        // this.dataSourcePayment.data = [...this.dataSourcePayment.data, data];
                        for (var i = 0; i < datattt.length; i++) {
                            //  let foreignKeyIndex = this.hdrDetails.findIndex(x => x.bill=== formDataz.value.bill );  
                            //  const foreignKey= this.hdrDetails[foreignKeyIndex].id;
                            //  this.foreignKeyFinal=foreignKey;
                            // data[i].push(this.foreignKeyFinal);
                            // formDataz.value.bill.push(data[i]);
                            // data[i].push(this.bill);
                            datattt[i].bill = formDataz.value.bill;
                            datattt[i].billingHdrId = this.returnId;
                            // var eachObject = data[i];
                            this._contactService.saveBilling(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'addBilling', datattt[i]).subscribe(data => {
                                // Success
                                if (data.id) {
                                    //    this.dialogRef.close('success');
                                }
                                else {
                                    //    this.dialogRef.close('error');
                                }
                            }, error => {
                                //   this.dialogRef.close('error');
                            });
                        }
                        dataPayment.length = (dataPayment.length) - 1;
                        //Payment Loop
                        for (var i = 0; i < dataPayment.length; i++) {
                            // formDataz.value.bill.push(data[i]);
                            // data[i].push(this.bill);
                            // dataPayment[i].bill=formDataz.value.bill;
                            // var eachObject = data[i];
                            dataPayment[i].billingHdrId = this.returnId;
                            this._contactService.savePayment(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'addPayment', dataPayment[i]).subscribe(data => {
                                // Success
                                if (data.message) {
                                    //    this.dialogRef.close('success');
                                }
                                else {
                                    //    this.dialogRef.close('error');
                                }
                            }, error => {
                                //   this.dialogRef.close('error');
                            });
                        }
                        //saveBillingHdr
                    }
                    //    this.dialogRef.close('success');
                }
                else {
                    //    this.dialogRef.close('error');
                }
                this.snackBar.open("Data Saved Successfully", '', {
                    duration: 3000
                });
                this.dataSource.data = [];
                this.dataSourcePayment.data = [];
                this.billingFrm = this.fb.group({
                    name: [],
                    amount: [],
                    quantity: [''],
                    price: [''],
                    sellingCost: [''],
                    code: [''],
                    date: [this.date.value],
                    bill: [''],
                    mobile: [''],
                    paymentType: [''],
                    referenceNo: [''],
                    cusName: [''],
                    CusAddress: [''],
                    totalAddAmount: ['']
                });
            }, error => {
                //   this.dialogRef.close('error');
            });
        }
        else {
            this.snackBar.open("Please fill Details", '', {
                duration: 3000
            });
        }
    }
    ngOnInit() {
        this.manuList();
        this.customerListMeth();
        this.findForeignKey();
        this.billingFrm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sellingCost: [''],
            code: [''],
            date: [this.date.value],
            bill: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            mobile: [''],
            paymentType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            referenceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cusName: [''],
            CusAddress: [''],
            totalAddAmount: ['']
        });
    }
    onSubmit(formData) {
        const finaldata = formData.value;
        this.addRow(finaldata);
        this.totalAddAmount = this.dataSource.data.reduce((summ, v) => summ += (v.amount), 0);
        this.billingFrm = this.fb.group({
            id: [this.indexValueRename],
            price: [this.resultRename],
            name: [this.prodNameRename],
            quantity: [this.billingFrm.value.quantity],
            amount: [this.totalCost],
            sellingCost: [''],
            code: [this.codeRename],
            date: [this.date.value],
            bill: [this.billAmount],
            mobile: [this.mobileRename],
            paymentType: [''],
            referenceNo: [''],
            cusName: [this.cusNameRename],
            CusAddress: [this.cusAddressRename],
            totalAddAmount: [this.totalAddAmount]
        });
        this.dataSource.data.push(finaldata);
    }
    finalForeign() {
        this._contactService.getBillingHdrDetails(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getBillingHdrDetails')
            .subscribe(manufacturer => {
            this.hdrDetailsFinal = manufacturer;
        });
    }
    onSubmitpayment(formData) {
        const finaldata = formData.value;
        this.addRowPayment(finaldata);
        this.dataSourcePayment.data.push(finaldata);
    }
    applyFilter(val) {
        console.log(val);
    }
    addRowPayment(finaldata) {
        if (this.dataSourcePayment.data.length == 0) {
            this.dataSourcePayment.data = [...this.dataSourcePayment.data, finaldata];
        }
        else {
            console.log((this.dataSourcePayment.data.length) - 1);
            this.dataSourcePayment.data.length = (this.dataSourcePayment.data.length) - 1;
            this.dataSourcePayment.data = [...this.dataSourcePayment.data, finaldata];
        }
    }
    addRow(finaldata) {
        if (this.isEdit == true) {
            this.dataSource.data.splice(finaldata.id, 1);
            this.dataSource.data.length = (this.dataSource.data.length) - 1;
            this.dataSource.data = [...this.dataSource.data, finaldata];
            this.isEdit = undefined;
        }
        else {
            if (this.dataSource.data.length == 0) {
                this.dataSource.data = [...this.dataSource.data, finaldata];
            }
            else {
                console.log((this.dataSource.data.length) - 1);
                this.dataSource.data.length = (this.dataSource.data.length) - 1;
                this.dataSource.data = [...this.dataSource.data, finaldata];
            }
        }
    }
    editBilling(id, datas) {
        this.isEdit = true;
        const finaldatus = datas;
        this.dataSource.data;
        console.log(id, finaldatus);
        this.billingFrm = this.fb.group({
            id: [id],
            name: [datas.name],
            amount: [datas.amount],
            quantity: [datas.quantity],
            price: [datas.price],
            sellingCost: [datas.sellingCost]
        }); //this.dataSource.data
    }
    editPayment(id, datas) {
        const finaldatus = datas;
        this.dataSourcePayment.data;
        console.log(id, finaldatus);
        this.billingFrm = this.fb.group({
            paymentType: [datas.paymentType],
            referenceNo: [datas.referenceNo]
        }); //this.dataSource.data
    }
    calculate(first, second) {
        this.third = first + second;
    }
    removeSelectedRows(index, formDatatab) {
        if (this.dataSource.data.length < -1) {
            this.dataSource.data = [...this.dataSource.data];
        }
        else {
            this.dataSource.data.length = (this.dataSource.data.length) - 1;
            this.dataSource.data.splice(index, 1);
            this.dataSource.data = [...this.dataSource.data];
            this.totalAddAmount = this.dataSource.data.reduce((summ, v) => summ += (v.amount), 0);
            this.billingFrm = this.fb.group({
                id: [this.indexValueRename],
                price: [this.resultRename],
                name: [this.prodNameRename],
                quantity: [this.billingFrm.value.quantity],
                amount: [this.totalCost],
                sellingCost: [''],
                code: [this.codeRename],
                date: [this.date.value],
                bill: [this.billAmount],
                mobile: [this.mobileRename],
                paymentType: [''],
                referenceNo: [''],
                cusName: [this.cusNameRename],
                CusAddress: [this.cusAddressRename],
                totalAddAmount: [this.totalAddAmount]
            });
        }
    }
    removeSelectedRowsPayment(index, formDatatab) {
        if (this.dataSourcePayment.data.length < -1) {
            this.dataSourcePayment.data = [...this.dataSourcePayment.data];
        }
        else {
            this.dataSource.data.length = (this.dataSource.data.length) - 1;
            this.dataSourcePayment.data.splice(index, 1);
            this.dataSourcePayment.data = [...this.dataSourcePayment.data];
        }
    }
    selected(indexs) {
        let indexValue = this.productList.findIndex(x => x.id === indexs.value);
        const prodName = this.productList[indexValue].name;
        const result = this.productList[indexValue].sellingCost;
        this.indexValueRename = indexs.value;
        this.resultRename = result;
        this.prodNameRename = prodName;
        this.billAmount = this.billingFrm.value.bill;
        this.billNum = this.billingFrm.value.bill;
        this._contactService.getManuList21(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getbillingDtl')
            .subscribe(headerLst => {
            this.BillingHeaderDetails.data = headerLst;
            let findBillExIndex = this.BillingHeaderDetails.data.findIndex(x => x.bill === this.billNum);
            if (findBillExIndex != -1) {
                this.snackBar.open("Bill Number Already Exist", '', {
                    duration: 3000
                });
                this.billingFrm = this.fb.group({
                    id: [this.indexValueRename],
                    price: [this.resultRename],
                    name: [this.prodNameRename],
                    quantity: [''],
                    amount: [''],
                    sellingCost: [''],
                    code: [this.codeRename],
                    date: [this.date.value],
                    bill: [''],
                    mobile: [this.mobileRename],
                    paymentType: [''],
                    referenceNo: [''],
                    cusName: [this.cusNameRename],
                    CusAddress: [this.cusAddressRename],
                    totalAddAmount: [this.totalAddAmount]
                });
                this.dataSource.data = [];
            }
            else {
                this.billingFrm = this.fb.group({
                    id: [this.indexValueRename],
                    price: [this.resultRename],
                    name: [this.prodNameRename],
                    quantity: [''],
                    amount: [''],
                    sellingCost: [''],
                    code: [this.codeRename],
                    date: [this.date.value],
                    bill: [this.billAmount],
                    mobile: [this.mobileRename],
                    paymentType: [''],
                    referenceNo: [''],
                    cusName: [this.cusNameRename],
                    CusAddress: [this.cusAddressRename],
                    totalAddAmount: [this.totalAddAmount]
                });
            }
        });
    }
    trackHero(index, product) {
        console.log(product);
        //this.bill
        //  this.billingFrm.price= product.sellingCost;
        return product ? product.id : undefined;
    }
    hideDiv() {
        this.billingFrm.controls['price'].disable();
        this.billingFrm.controls['name'].disable();
    }
    //Customer List
    customerListMeth() {
        this._contactService.getCustomerList(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'getCustomerList')
            .subscribe(customers => {
            this.customerList = customers;
        });
    }
    reset() {
        this.billingFrm = this.fb.group({
            id: [this.indexValueRename],
            price: [this.resultRename],
            name: [this.prodNameRename],
            amount: [this.totalCost],
            quantity: [this.billingFrm.value.quantity],
            sellingCost: [''],
            code: [],
            date: [this.date.value],
            bill: [this.billAmount],
            mobile: [],
            paymentType: [''],
            referenceNo: [''],
            cusName: [''],
            CusAddress: [''],
            totalAddAmount: [this.totalAddAmount]
        });
    }
    searchCustomer(formData) {
        if (formData.value.code != '' && formData.value.mobile == '' || formData.value.mobile == null) {
            let cusNamendex = this.customerList.findIndex(x => x.code.trim().toLocaleLowerCase() === formData.value.code);
            if (cusNamendex >= 0) {
                const cusName = this.customerList[cusNamendex].name;
                const cusAddress = this.customerList[cusNamendex].address;
                this.codeRename = formData.value.code;
                this.mobileRename = formData.value.mobile;
                this.cusNameRename = cusName;
                this.cusAddressRename = cusAddress;
                this.billingFrm = this.fb.group({
                    id: [this.indexValueRename],
                    price: [this.resultRename],
                    name: [this.prodNameRename],
                    amount: [this.totalCost],
                    quantity: [''],
                    sellingCost: [''],
                    code: [this.codeRename],
                    date: [this.date.value],
                    bill: [this.billAmount],
                    mobile: [this.mobileRename],
                    paymentType: [''],
                    referenceNo: [''],
                    cusName: [this.cusNameRename],
                    CusAddress: [this.cusAddressRename],
                    totalAddAmount: [this.totalAddAmount]
                });
            }
            else {
                this.snackBar.open("Customer Not Available", '', {
                    duration: 3000
                });
                //alert("Customer Not Available");
            }
        }
        else if (formData.value.code == '' && formData.value.mobile != '') {
            let cusMbilendex = this.customerList.findIndex(x => x.mobile.trim().toLocaleLowerCase() === formData.value.mobile);
            if (cusMbilendex >= 0) {
                const cusName = this.customerList[cusMbilendex].name;
                const cusAddress = this.customerList[cusMbilendex].address;
                this.codeRename = formData.value.code;
                this.mobileRename = formData.value.mobile;
                this.cusNameRename = cusName;
                this.cusAddressRename = cusAddress;
                this.billingFrm = this.fb.group({
                    id: [this.indexValueRename],
                    price: [this.resultRename],
                    name: [this.prodNameRename],
                    amount: [this.totalCost],
                    quantity: [''],
                    sellingCost: [''],
                    code: [this.codeRename],
                    date: [this.date.value],
                    bill: [this.billAmount],
                    mobile: [this.mobileRename],
                    paymentType: [''],
                    referenceNo: [''],
                    cusName: [this.cusNameRename],
                    CusAddress: [this.cusAddressRename],
                    totalAddAmount: [this.totalAddAmount]
                });
            }
            else {
                this.snackBar.open("Customer Not Available", '', {
                    duration: 3000
                });
            }
        }
        else if (formData.value.code != '' && formData.value.mobile != '') {
            let cusNamendex = this.customerList.findIndex(x => x.code.trim().toLocaleLowerCase() === formData.value.code);
            if (cusNamendex < 0) {
                this.snackBar.open("Customer Not Available", '', {
                    duration: 3000
                });
            }
            else {
                let cusMbilendex = this.customerList.findIndex(x => x.mobile.trim().toLocaleLowerCase() === formData.value.mobile);
                if (cusNamendex == cusMbilendex) {
                    const cusName = this.customerList[cusNamendex].name;
                    const cusAddress = this.customerList[cusNamendex].address;
                    this.codeRename = formData.value.code;
                    this.mobileRename = formData.value.mobile;
                    this.cusNameRename = cusName;
                    this.cusAddressRename = cusAddress;
                    this.billingFrm = this.fb.group({
                        id: [this.indexValueRename],
                        price: [this.resultRename],
                        name: [this.prodNameRename],
                        amount: [this.totalCost],
                        quantity: [''],
                        sellingCost: [''],
                        code: [this.codeRename],
                        date: [this.date.value],
                        bill: [this.billAmount],
                        mobile: [this.mobileRename],
                        paymentType: [''],
                        referenceNo: [''],
                        cusName: [this.cusNameRename],
                        CusAddress: [this.cusAddressRename],
                        totalAddAmount: [this.totalAddAmount]
                    });
                }
                else {
                    this.snackBar.open("Customer Not Available", '', {
                        duration: 3000
                    });
                }
            }
        }
    }
};
BillinglistComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] }
];
BillinglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billinglist',
        template: __webpack_require__(/*! raw-loader!./billinglist.component.html */ "./node_modules/raw-loader/index.js!./src/app/billinglist/billinglist.component.html"),
        styles: [__webpack_require__(/*! ./billinglist.component.css */ "./src/app/billinglist/billinglist.component.css")]
    })
], BillinglistComponent);



/***/ }),

/***/ "./src/app/contactform/contactform.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactform/contactform.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Rmb3JtL2NvbnRhY3Rmb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contactform/contactform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactform/contactform.component.ts ***!
  \******************************************************/
/*! exports provided: ContactformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactformComponent", function() { return ContactformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");








let ContactformComponent = class ContactformComponent {
    constructor(data, fb, _contactService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // contact: IContact;
        this.typeList = [{ id: 1, value: 'Schedule-H' }, { id: 2, value: 'Schedule-H1' }];
        //manufacturerList =[{ value : 'Manufacturer 1'},{value: 'Manufacturer 2'}];
        this.medicineTypeList = ['Govt Generic', 'Re-Generic', 'Brand', 'Others'];
        this.formErrors = {
            'id': '',
            'name': '',
            'code': '',
            'tax': '',
            'type': '',
            'manufacturer': '',
            'packing': '',
            'purchaseCost': '',
            'mrp': '',
            'sellingCost': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'name': {
                'maxlength': 'Name cannot be more than 50 characters long.',
                'required': 'Name is required.'
            },
            'code': {
                'code': 'Invalid code format.',
                'required': 'Code is required.'
            },
            'tax': {
                'required': 'Tax is required.'
            },
            'type': {
                'required': 'Type is required.'
            },
            'manufacturer': {
                'required': 'Manufacturer is required.'
            },
            'packing': {
                'required': 'Packing is required.'
            },
            'purchaseCost': {
                'required': 'Purchase Cost is required.'
            },
            'mrp': {
                'required': 'MRP is required.'
            },
            'sellingCost': {
                'required': 'Selling Cost is required.'
            }
        };
    }
    ngOnInit() {
        // built contact form
        this.manuList();
        this.contactFrm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tax: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            manufacturer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            packing: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            purchaseCost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mrp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sellingCost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            medicineType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        //this.technologies = Global.technologies;
        // subscribe on value changed event of form to show validation message
        this.contactFrm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.contactFrm.reset();
        }
        else {
            this.contactFrm.setValue(this.data.contact);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
    }
    // form value change event
    onValueChanged(data) {
        if (!this.contactFrm) {
            return;
        }
        const form = this.contactFrm;
        // tslint:disable-next-line:forin
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    manuList() {
        this._contactService.getManuList(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'getAllManu')
            .subscribe(manufacturer => {
            this.dbManuList = manufacturer;
        });
    }
    onSubmit(formData) {
        const contactData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                formData.value.id = 5;
                this._contactService.addContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'addContact', contactData).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._contactService.updateContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'updateContact', contactData.id, contactData).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                this._contactService.deleteContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'deleteContact', contactData.id).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
        }
    }
    SetControlsState(isEnable) {
        isEnable ? this.contactFrm.enable() : this.contactFrm.disable();
    }
    mapDateData(contact) {
        //contact.birth = new Date(contact.birth).toISOString();
        return contact;
    }
};
ContactformComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
ContactformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactform',
        template: __webpack_require__(/*! raw-loader!./contactform.component.html */ "./node_modules/raw-loader/index.js!./src/app/contactform/contactform.component.html"),
        styles: [__webpack_require__(/*! ./contactform.component.css */ "./src/app/contactform/contactform.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ContactformComponent);



/***/ }),

/***/ "./src/app/contactlist/contactlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .contactlist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.contactlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGxpc3QvY29udGFjdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0bGlzdC9jb250YWN0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhY3RsaXN0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG5cclxuLnNwaW5uZXJ7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6IDQ3JTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiAgLmNvbnRhY3RsaXN0LWNvbnRhaW5lciwgI3BhZ2luYXRvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.ts ***!
  \******************************************************/
/*! exports provided: ContactlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistComponent", function() { return ContactlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");








let ContactlistComponent = class ContactlistComponent {
    constructor(snackBar, _contactService, dialog) {
        this.snackBar = snackBar;
        this._contactService = _contactService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['name', 'code', 'tax', 'type', 'medicineType', 'manufacturer', 'packing', 'purchaseCost', 'mrp', 'sellingCost', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.doFilter = (value) => {
            this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    ngOnInit() {
        this.loadingState = true;
        this.loadContacts();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, contact: this.contact }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result === 'success') {
                this.loadingState = true;
                this.loadContacts();
                switch (this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                        this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                        this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                        this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    }
    loadContacts() {
        this._contactService.getAllContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'getAllContact')
            .subscribe(contacts => {
            this.loadingState = false;
            this.dataSource.data = contacts;
        });
    }
    addContact() {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create;
        this.modalTitle = 'Add New Product';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    }
    editContact(id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update;
        this.modalTitle = 'Edit Product';
        this.modalBtnTitle = 'Update';
        this.contact = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
    }
    deleteContact(id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.contact = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
    }
    showMessage(msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    }
};
ContactlistComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { read: true, static: true })
], ContactlistComponent.prototype, "paginator", void 0);
ContactlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactlist',
        template: __webpack_require__(/*! raw-loader!./contactlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/contactlist/contactlist.component.html"),
        styles: [__webpack_require__(/*! ./contactlist.component.css */ "./src/app/contactlist/contactlist.component.css")]
    })
], ContactlistComponent);



/***/ }),

/***/ "./src/app/customer-addform/customer-addform.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/customer-addform/customer-addform.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWFkZGZvcm0vY3VzdG9tZXItYWRkZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer-addform/customer-addform.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-addform/customer-addform.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerAddformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddformComponent", function() { return CustomerAddformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");







let CustomerAddformComponent = class CustomerAddformComponent {
    constructor(data, fb, _contactService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.customerFrm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        //fetch data into edit
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            customerFrm: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
            this.customerFrm.reset();
        }
        else {
            this.customerFrm.setValue(this.data.contact);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    }
    onSubmit(formData) {
        const customerData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                formData.value.id = 5;
                this._contactService.addCustomer(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'addCustomer', customerData).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._contactService.updateCustomer(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'updateCustomer', customerData.id, customerData).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._contactService.deleteCustomer(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT_CUST + 'deleteCustomer', customerData.id).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
        }
    }
    mapDateData(customerData) {
        return customerData;
    }
    SetControlsState(isEnable) {
        isEnable ? this.customerFrm.enable() : this.customerFrm.disable();
    }
};
CustomerAddformComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
CustomerAddformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-addform',
        template: __webpack_require__(/*! raw-loader!./customer-addform.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer-addform/customer-addform.component.html"),
        styles: [__webpack_require__(/*! ./customer-addform.component.css */ "./src/app/customer-addform/customer-addform.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], CustomerAddformComponent);



/***/ }),

/***/ "./src/app/customer-list/customer-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItbGlzdC9jdXN0b21lci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer-list/customer-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _customer_addform_customer_addform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-addform/customer-addform.component */ "./src/app/customer-addform/customer-addform.component.ts");








let CustomerListComponent = class CustomerListComponent {
    constructor(snackBar, _contactService, dialog) {
        this.snackBar = snackBar;
        this._contactService = _contactService;
        this.dialog = dialog;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.sorted = false;
        this.displayedColumns = ['name', 'code', 'address', 'mobile', 'action'];
        this.doFilter = (value) => {
            this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    ngOnInit() {
        this.customerList();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_customer_addform_customer_addform_component__WEBPACK_IMPORTED_MODULE_6__["CustomerAddformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, contact: this.customer }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result === 'success') {
                this.loadingState = true;
                this.customerList();
                switch (this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                        this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                        this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                        this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    }
    customerList() {
        this._contactService.getCustomerList(_shared_Global__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_USER_ENDPOINT_CUST + 'getCustomerList')
            .subscribe(customers => {
            this.dataSource.data = customers;
        });
    }
    deleteCustomer(id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete;
        this.modalTitle = 'Delete Customer';
        this.modalBtnTitle = 'Delete';
        this.customer = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
    }
    editCustomer(id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update;
        this.modalTitle = 'Edit Product';
        this.modalBtnTitle = 'Update';
        this.customer = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
    }
    addCustomer() {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create;
        this.modalTitle = 'Add Customer';
        this.modalBtnTitle = 'Save';
        this.openDialog();
    }
    showMessage(msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    }
};
CustomerListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { read: true, static: true })
], CustomerListComponent.prototype, "paginator", void 0);
CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-list',
        template: __webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer-list/customer-list.component.html"),
        styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer-list/customer-list.component.css")]
    })
], CustomerListComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  min-width: 80%;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBtaW4td2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/manufacturer-add/Manufacturer-add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manufacturer-add/Manufacturer-add.component.ts ***!
  \****************************************************************/
/*! exports provided: ManufacturerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerAddComponent", function() { return ManufacturerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");








let ManufacturerAddComponent = class ManufacturerAddComponent {
    constructor(data, fb, _contactService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.manuFrm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        //fetch data into Edit
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].create) {
            manuFrm: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
            this.manuFrm.reset();
        }
        else {
            this.manuFrm.setValue(this.data.manufacturer);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].delete ? false : true);
    }
    onSubmit(formData) {
        const manufData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].create:
                formData.value.id = 5;
                this._contactService.addManufacturer(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT_MANU + 'addManufacturer', manufData).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].update:
                this._contactService.updateManufacturer(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT_MANU + 'updateManufacturer', manufData.id, manufData).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_3__["DBOperation"].delete:
                this._contactService.deleteManufacturer(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT_MANU + 'deleteManufacturer', manufData.id).subscribe(data => {
                    // Success
                    if (data.message) {
                        this.dialogRef.close('success');
                    }
                    else {
                        this.dialogRef.close('error');
                    }
                }, error => {
                    this.dialogRef.close('error');
                });
                break;
        }
    }
    mapDateData(manufac) {
        //contact.birth = new Date(contact.birth).toISOString();
        return manufac;
    }
    SetControlsState(isEnable) {
        isEnable ? this.manuFrm.enable() : this.manuFrm.disable();
    }
};
ManufacturerAddComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }
];
ManufacturerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manufacturer-add',
        template: __webpack_require__(/*! raw-loader!./manufacturer-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/manufacturer-add/manufacturer-add.component.html"),
        styles: [__webpack_require__(/*! ./manufacturer-add.component.css */ "./src/app/manufacturer-add/manufacturer-add.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], ManufacturerAddComponent);



/***/ }),

/***/ "./src/app/manufacturer-add/manufacturer-add.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/manufacturer-add/manufacturer-add.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci1hZGQvbWFudWZhY3R1cmVyLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFudWZhY3R1cmVyL21hbnVmYWN0dXJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWFudWZhY3R1cmVyL21hbnVmYWN0dXJlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.ts ***!
  \********************************************************/
/*! exports provided: ManufacturerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerComponent", function() { return ManufacturerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _manufacturer_add_Manufacturer_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manufacturer-add/Manufacturer-add.component */ "./src/app/manufacturer-add/Manufacturer-add.component.ts");








let ManufacturerComponent = class ManufacturerComponent {
    constructor(snackBar, _contactService, dialog) {
        this.snackBar = snackBar;
        this._contactService = _contactService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'code', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.doFilter = (value) => {
            this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    ngOnInit() {
        this.loadingState = true;
        this.manuList();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_manufacturer_add_Manufacturer_add_component__WEBPACK_IMPORTED_MODULE_6__["ManufacturerAddComponent"], {
            width: '1500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, manufacturer: this.manufacturer }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result === 'success') {
                this.loadingState = true;
                this.manuList();
                switch (this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                        this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                        this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                        this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    }
    manuList() {
        this._contactService.getManuList(_shared_Global__WEBPACK_IMPORTED_MODULE_4__["Global"].BASE_USER_ENDPOINT + 'getAllManu')
            .subscribe(manufacturer => {
            this.dataSource.data = manufacturer;
        });
    }
    editManu(id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update;
        this.modalTitle = 'Edit Manufacture';
        this.modalBtnTitle = 'Update';
        this.manufacturer = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
    }
    deleteManu(id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete;
        this.modalTitle = 'Do you want to Delete? ';
        this.modalBtnTitle = 'Delete';
        this.manufacturer = this.dataSource.data.filter(x => x.id === id)[0];
        this.openDialog();
    }
    addManufacturer() {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create;
        this.modalTitle = 'Add new ';
        this.modalBtnTitle = 'Save';
        this.openDialog();
    }
    showMessage(msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    }
};
ManufacturerComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { read: true, static: true })
], ManufacturerComponent.prototype, "paginator", void 0);
ManufacturerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manufacturer',
        template: __webpack_require__(/*! raw-loader!./manufacturer.component.html */ "./node_modules/raw-loader/index.js!./src/app/manufacturer/manufacturer.component.html"),
        styles: [__webpack_require__(/*! ./manufacturer.component.css */ "./src/app/manufacturer/manufacturer.component.css")]
    })
], ManufacturerComponent);



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
    }
    //Drop Down Manufacturer
    getManuList(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getBillingHdrDetails(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getManuList2(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getManuList21(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getManuList213(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getManuList2134(url, bill) {
        const newurl = `${url}?bill=${bill}`;
        return this.http.get(newurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getManuListPayment(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getManuListPaymentLatest(url, bill) {
        const newurl = `${url}?bill=${bill}`;
        return this.http.get(newurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    productInitList(url, bill) {
        const newurl = `${url}?bill=${bill}`;
        return this.http.get(newurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getProductList(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getBillDelParam(url, billnumber) {
        const newurl = `${url}?bill=${billnumber}`;
        return this.http.get(newurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    totalAmount(url, data) {
        const newurl = `${url}?bill=${data}`;
        return this.http.get(newurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // get all contact data    
    getAllContact(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // insert new contact details    
    addContact(url, contact) {
        return this.http.post(url, JSON.stringify(contact), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    saveBilling(url, contact) {
        var parameter = {
            bill: contact.bill,
            price: contact.price,
            amount: contact.amount,
            quantity: contact.quantity,
            billingHdrId: contact.billingHdrId,
            id: contact.id
        };
        return this.http.post(url, JSON.stringify(parameter), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    saveBillingUpdate(url, contact) {
        var parameter = {
            bill: contact.bill,
            price: contact.price,
            amount: contact.amount,
            quantity: contact.quantity,
            billingHdrId: contact.billingHdrId,
            productId: contact.productId
        };
        return this.http.post(url, JSON.stringify(parameter), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    totalAmountCalculation(url, contact) {
        var parameter = {
            bill: contact.bill,
            totalAddAmount: contact.totalAddAmount
        };
        return this.http.post(url, JSON.stringify(parameter), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    savePayment(url, contact) {
        var parameter = {
            billingHdrId: contact.billingHdrId,
            bill: contact.bill,
            paymentType: contact.paymentType,
            referenceNo: contact.referenceNo,
        };
        return this.http.post(url, JSON.stringify(parameter), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //Billing Header
    saveBillingHdr(url, contact) {
        var parameter = {
            // billingHdrId : contact.id,
            bill: contact.bill,
            code: contact.code,
            date: contact.date,
        };
        return this.http.post(url, JSON.stringify(parameter), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // update contact details    
    updateContact(url, id, contact) {
        const newurl = `${url}?id=${id}`;
        return this.http.put(newurl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // delete contact information    
    deleteContact(url, id) {
        const newurl = `${url}?id=${id}`; // DELETE api/contact?id=42    
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    ///////////////////////////////////////////////
    //Add manufacturer
    // insert new contact details    
    addManufacturer(url, contact) {
        return this.http.post(url, JSON.stringify(contact), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // update Manufacturer
    updateManufacturer(url, id, contact) {
        const newurl = `${url}?id=${id}`;
        return this.http.put(newurl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //delete manufacturer
    // delete contact information    
    deleteManufacturer(url, id) {
        const newurl = `${url}?id=${id}`;
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    ////Get Customer List
    getCustomerList(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getAmountTest(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //Update Customer
    updateCustomer(url, id, contact) {
        const newurl = `${url}?id=${id}`;
        return this.http.put(newurl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteCustomer(url, id) {
        const newurl = `${url}?id=${id}`;
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    paymenttes(url, bill) {
        const newurl = `${url}?bill=${bill}`;
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deletePayment(url, bill) {
        const newurl = `${url}?bill=${bill}`;
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deletePaymentdtl(url, bill) {
        const newurl = `${url}?bill=${bill}`;
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteBillingDtl(url, bill) {
        const newurl = `${url}?bill=${bill}`;
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteBillingHeader(url, id) {
        const newurl = `${url}?id=${id}`;
        return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    addCustomer(url, contact) {
        return this.http.post(url, JSON.stringify(contact), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getPriceAmt(url, indexsx) {
        const newurl = `${url}?name=${indexsx}`;
        return this.http.get(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // custom handler    
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.    
            console.error('An error occurred:', error.error.message);
        }
        else {
            // the backend returned an unsuccessful response code.    
            // the response body may contain clues as to what went wrong,    
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message    
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ContactService);



/***/ }),

/***/ "./src/app/shared/DBOperation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DBOperation.ts ***!
  \***************************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/Global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/Global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
class Global {
}
Global.BASE_USER_ENDPOINT = 'api/contact/';
Global.BASE_USER_ENDPOINT_MANU = 'api/Demo/';
Global.BASE_USER_ENDPOINT_CUST = 'api/customer/';
Global.BASE_USER_ENDPOINT_Prod = 'api/products/';
Global.BASE_USER_ENDPOINT_PRICE = 'api/price/';
Global.BASE_USER_ENDPOINT_BILLING = 'api/billing/';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\contact-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map