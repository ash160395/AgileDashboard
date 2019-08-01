(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/agile-dashboard/agile-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/agile-dashboard/agile-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdpbGUtZGFzaGJvYXJkL2FnaWxlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWdpbGUtZGFzaGJvYXJkL2FnaWxlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/agile-dashboard/agile-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/agile-dashboard/agile-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/agile-dashboard/agile-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/agile-dashboard/agile-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AgileDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgileDashboardComponent", function() { return AgileDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var AgileDashboardComponent = /** @class */ (function () {
    function AgileDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    AgileDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agile-dashboard',
            template: __webpack_require__(/*! ./agile-dashboard.component.html */ "./src/app/agile-dashboard/agile-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./agile-dashboard.component.css */ "./src/app/agile-dashboard/agile-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], AgileDashboardComponent);
    return AgileDashboardComponent;
}());



/***/ }),

/***/ "./src/app/agile-dashboard/agile-dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/agile-dashboard/agile-dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: AgileDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgileDashboardModule", function() { return AgileDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _agile_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agile-dashboard.component */ "./src/app/agile-dashboard/agile-dashboard.component.ts");








var AgileDashboardModule = /** @class */ (function () {
    function AgileDashboardModule() {
    }
    AgileDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _agile_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AgileDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
            ],
            providers: [],
            exports: [_agile_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AgileDashboardComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AgileDashboardModule);
    return AgileDashboardModule;
}());



/***/ }),

/***/ "./src/app/agile-datatable/agile-datatable-datasource.ts":
/*!***************************************************************!*\
  !*** ./src/app/agile-datatable/agile-datatable-datasource.ts ***!
  \***************************************************************/
/*! exports provided: AgileDatatableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgileDatatableDataSource", function() { return AgileDatatableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 21, name: 'Scandium' },
    { id: 22, name: 'Titanium' },
    { id: 23, name: 'Vanadium' },
    { id: 24, name: 'Chromium' },
    { id: 25, name: 'Manganese' },
    { id: 26, name: 'Iron' },
    { id: 27, name: 'Cobalt' },
    { id: 28, name: 'Nickel' },
];
/**
 * Data source for the AgileDatatable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var AgileDatatableDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AgileDatatableDataSource, _super);
    function AgileDatatableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    AgileDatatableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    AgileDatatableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    AgileDatatableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    AgileDatatableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return AgileDatatableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/agile-datatable/agile-datatable.component.css":
/*!***************************************************************!*\
  !*** ./src/app/agile-datatable/agile-datatable.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdpbGUtZGF0YXRhYmxlL2FnaWxlLWRhdGF0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWdpbGUtZGF0YXRhYmxlL2FnaWxlLWRhdGF0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/agile-datatable/agile-datatable.component.html":
/*!****************************************************************!*\
  !*** ./src/app/agile-datatable/agile-datatable.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/agile-datatable/agile-datatable.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/agile-datatable/agile-datatable.component.ts ***!
  \**************************************************************/
/*! exports provided: AgileDatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgileDatatableComponent", function() { return AgileDatatableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _agile_datatable_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agile-datatable-datasource */ "./src/app/agile-datatable/agile-datatable-datasource.ts");




var AgileDatatableComponent = /** @class */ (function () {
    function AgileDatatableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    AgileDatatableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _agile_datatable_datasource__WEBPACK_IMPORTED_MODULE_3__["AgileDatatableDataSource"](this.paginator, this.sort);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AgileDatatableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AgileDatatableComponent.prototype, "sort", void 0);
    AgileDatatableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agile-datatable',
            template: __webpack_require__(/*! ./agile-datatable.component.html */ "./src/app/agile-datatable/agile-datatable.component.html"),
            styles: [__webpack_require__(/*! ./agile-datatable.component.css */ "./src/app/agile-datatable/agile-datatable.component.css")]
        })
    ], AgileDatatableComponent);
    return AgileDatatableComponent;
}());



/***/ }),

/***/ "./src/app/agile-datatable/agile-datatable.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/agile-datatable/agile-datatable.module.ts ***!
  \***********************************************************/
/*! exports provided: AgileDatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgileDatatableModule", function() { return AgileDatatableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agile_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agile-datatable.component */ "./src/app/agile-datatable/agile-datatable.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AgileDatatableModule = /** @class */ (function () {
    function AgileDatatableModule() {
    }
    AgileDatatableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _agile_datatable_component__WEBPACK_IMPORTED_MODULE_3__["AgileDatatableComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"]
            ],
            exports: [
                _agile_datatable_component__WEBPACK_IMPORTED_MODULE_3__["AgileDatatableComponent"]
            ]
        })
    ], AgileDatatableModule);
    return AgileDatatableModule;
}());



/***/ }),

/***/ "./src/app/agile-side-nav/agile-side-nav.component.css":
/*!*************************************************************!*\
  !*** ./src/app/agile-side-nav/agile-side-nav.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n  }\n  \n  mat-sidenav {\n    width: 250px;\n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n  }\n  \n  a:hover,\n  a:active {\n    color: lightgray;\n  }\n  \n  .navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n  }\n  \n  .icon {\n    display: inline-block;\n    height: 30px;\n    margin: 0 auto;\n    padding-right: 5px;\n    text-align: center;\n    vertical-align: middle;\n    width: 15%;\n  }\n  \n  .label {\n    display: inline-block;\n    line-height: 30px;\n    margin: 0;\n    width: 85%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdpbGUtc2lkZS1uYXYvYWdpbGUtc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2FnaWxlLXNpZGUtbmF2L2FnaWxlLXNpZGUtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIG1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGE6aG92ZXIsXG4gIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICB9XG4gIFxuICAubmF2aWdhdGlvbi1pdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMTUlO1xuICB9XG4gIFxuICAubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDg1JTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/agile-side-nav/agile-side-nav.component.html":
/*!**************************************************************!*\
  !*** ./src/app/agile-side-nav/agile-side-nav.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav role=\"navigation\">\n   <mat-nav-list>\n    <a mat-list-item>\n      <mat-icon class=\"icon\">input</mat-icon>\n      <span class=\"label\">Login</span>\n    </a>\n    <a mat-list-item>\n      <mat-icon class=\"icon\">home</mat-icon>\n        <span class=\"label\">Home</span>\n    </a>\n    <a mat-list-item>\n      <mat-icon class=\"icon\">dashboard</mat-icon>\n      <span class=\"label\">Dashboard</span>\n    </a>\n    <a mat-list-item type=\"button\">\n      <mat-icon class=\"icon\">input</mat-icon>\n      <span class=\"label\">LogOut</span>\n    </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n     <div fxhide.gt-xs>\n       <button mat-icon-button>\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n     <div>\n       <a>\n          Material Blog\n       </a>\n     </div>\n     <div fxflex fxlayout fxlayoutalign=\"flex-end\" fxhide.xs>\n        <ul fxlayout fxlayoutgap=\"20px\" class=\"navigation-items\">\n            <li>\n                <a>\n                  <mat-icon class=\"icon\">input</mat-icon>\n                  <span class=\"label\">Login</span>\n                 </a>\n            </li>\n            <li>\n              <a>\n                  <mat-icon class=\"icon\">home</mat-icon>\n                  <span class=\"label\">Home</span>\n              </a>\n            </li>\n            <li>\n                <a>\n                    <mat-icon class=\"icon\">dashboard</mat-icon>\n                    <span class=\"label\">Dashboard</span>\n                </a>\n              </li>\n            <li>\n                <a>\n                  <mat-icon class=\"icon\">input</mat-icon>\n                  <span class=\"label\">LogOut</span>\n                 </a>\n            </li>\n        </ul>\n     </div>\n    </mat-toolbar>\n    <main>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/agile-side-nav/agile-side-nav.component.ts":
/*!************************************************************!*\
  !*** ./src/app/agile-side-nav/agile-side-nav.component.ts ***!
  \************************************************************/
/*! exports provided: AgileSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgileSideNavComponent", function() { return AgileSideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgileSideNavComponent = /** @class */ (function () {
    function AgileSideNavComponent() {
    }
    AgileSideNavComponent.prototype.ngOnInit = function () {
    };
    AgileSideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agile-side-nav',
            template: __webpack_require__(/*! ./agile-side-nav.component.html */ "./src/app/agile-side-nav/agile-side-nav.component.html"),
            styles: [__webpack_require__(/*! ./agile-side-nav.component.css */ "./src/app/agile-side-nav/agile-side-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgileSideNavComponent);
    return AgileSideNavComponent;
}());



/***/ }),

/***/ "./src/app/agile-side-nav/agile-side-nav.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/agile-side-nav/agile-side-nav.module.ts ***!
  \*********************************************************/
/*! exports provided: AgileSideNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgileSideNavModule", function() { return AgileSideNavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agile_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agile-side-nav.component */ "./src/app/agile-side-nav/agile-side-nav.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







var AgileSideNavModule = /** @class */ (function () {
    function AgileSideNavModule() {
    }
    AgileSideNavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_agile_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["AgileSideNavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            ],
            exports: [
                _agile_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["AgileSideNavComponent"]
            ]
        })
    ], AgileSideNavModule);
    return AgileSideNavModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-agile-side-nav>\n\n</app-agile-side-nav>\n\n\n<app-agile-dashboard>\n    \n</app-agile-dashboard>\n\n<app-agile-datatable>\n\n</app-agile-datatable>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'materialdashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agile_dashboard_agile_dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agile-dashboard/agile-dashboard.module */ "./src/app/agile-dashboard/agile-dashboard.module.ts");
/* harmony import */ var _reactive_form_reactive_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactive-form/reactive-form.module */ "./src/app/reactive-form/reactive-form.module.ts");
/* harmony import */ var _agile_datatable_agile_datatable_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agile-datatable/agile-datatable.module */ "./src/app/agile-datatable/agile-datatable.module.ts");
/* harmony import */ var _agile_side_nav_agile_side_nav_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agile-side-nav/agile-side-nav.module */ "./src/app/agile-side-nav/agile-side-nav.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _reactive_form_reactive_form_module__WEBPACK_IMPORTED_MODULE_4__["AppReactiveFormModule"],
                _agile_dashboard_agile_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["AgileDashboardModule"],
                _agile_datatable_agile_datatable_module__WEBPACK_IMPORTED_MODULE_5__["AgileDatatableModule"],
                _agile_side_nav_agile_side_nav_module__WEBPACK_IMPORTED_MODULE_6__["AgileSideNavModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/reactive-form/form.component.css":
/*!**************************************************!*\
  !*** ./src/app/reactive-form/form.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aXZlLWZvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reactive-form/form.component.html":
/*!***************************************************!*\
  !*** ./src/app/reactive-form/form.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Toolbar of an App -->    \n<mat-toolbar color=\"primary\">    \n  <span>Ashwini Kumar - Agile KPIs</span>    \n  <span class=\"demo-toolbar\"></span>    \n  <a style=\"width: 15em\"  color= \"accent\" mat-raised-button href=\"https://github.com/ash160395\">Go To My Github</a>    \n  \n</mat-toolbar>    \n  \n<mat-card>    \n     \n  <mat-card-title>    \n      Agile KPI Dashboard With Angular 8    \n  </mat-card-title>    \n  \n  <mat-card-content>    \n      <form [formGroup]=\"regiForm\" (ngSubmit)=\"onFormSubmit(regiForm.value)\">    \n          <table>    \n              <tr>    \n                  <td>    \n                      <mat-form-field class=\"demo-full-width\">    \n                          <input formControlName=\"FirstName\" matInput placeholder=\"First Name\">    \n                      </mat-form-field>  \n                      <mat-error>  \n                        <span *ngIf=\"!regiForm.get('FirstName').valid && regiForm.get('FirstName').touched\">Please enter First Name !!!</span>  \n                      </mat-error>  \n                  </td>\n                    \n                  <td>    \n                      <mat-form-field class=\"demo-full-width\">    \n                          <input formControlName=\"LastName\" matInput placeholder=\"Last Name\">    \n                      </mat-form-field>  \n                      <mat-error>  \n                        <span *ngIf=\"!regiForm.get('LastName').valid && regiForm.get('LastName').touched\">Please enter Last Name !!!</span>  \n                      </mat-error>  \n                  </td>    \n              </tr>    \n              <tr>    \n                  <td colspan=\"2\">    \n                      <mat-form-field class=\"demo-full-width\">    \n                          <textarea formControlName=\"Address\" matInput placeholder=\"Address\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\"></textarea>    \n                      </mat-form-field>  \n                      <mat-error>  \n                        <span *ngIf=\"!regiForm.get('Address').valid && regiForm.get('Address').touched\">Please enter proper address !!!</span>  \n                      </mat-error>    \n                  </td>    \n              </tr>    \n              <tr>    \n                  <td colspan=\"2\">    \n                      <mat-form-field class=\"demo-full-width\">    \n                          <input formControlName=\"DOB\" matInput [matDatepicker]=\"picker\" placeholder=\"Date of birth\">    \n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n                          <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>    \n                      </mat-form-field>    \n                      <mat-error>  \n                        <span *ngIf=\"!regiForm.get('DOB').valid && regiForm.get('DOB').touched\">Please select any Date !!!</span>  \n                      </mat-error>\n                  </td>    \n              </tr>    \n              <tr>    \n                  <td>    \n                      <span>Gender</span><br><br>    \n                      <mat-radio-group formControlName=\"Gender\">    \n                          <mat-radio-button style=\"margin:5px;\" value=\"1\">Male</mat-radio-button>    \n                          <mat-radio-button style=\"margin:5px;\" value=\"2\">Female</mat-radio-button>    \n                      </mat-radio-group>    \n                      <mat-error>  \n                        <span *ngIf=\"!regiForm.get('Gender').valid && regiForm.get('Gender').touched\">Please select any gender !!!</span>  \n                      </mat-error> \n                  </td>    \n                  <td><br>    \n                      <mat-form-field>     \n                          <mat-select formControlName=\"Blog\" placeholder=\"Select Field\" [(value)]=\"selected\">    \n                              <mat-option>-- Select Any --</mat-option>    \n                              <mat-option value=\"1\">Java</mat-option>    \n                              <mat-option value=\"2\">Angular</mat-option>    \n                              <mat-option value=\"3\">NodeJS</mat-option>    \n                          </mat-select> \n                          <mat-error>  \n                            <span *ngIf=\"!regiForm.get('Blog').valid && regiForm.get('Blog').touched\">Please select any item !!!</span>  \n                          </mat-error>   \n                      </mat-form-field>    \n                  </td>    \n              </tr>    \n              <tr>    \n                  <td colspan=\"2\">    \n                      <mat-form-field class=\"demo-full-width\">    \n                          <input formControlName=\"Email\" matInput placeholder=\"Email\">    \n                      </mat-form-field>    \n                      <mat-error>  \n                        <span *ngIf=\"!regiForm.get('Email').valid && regiForm.get('Email').touched\">Enter proper Email !!!</span>  \n                      </mat-error> \n                  </td>    \n              </tr>    \n              <tr>    \n                  <td colspan=\"2\">    \n                    <mat-slide-toggle formControlName=\"IsAccepted\" (change)=\"onChange($event)\">Accept Terms & Conditions</mat-slide-toggle>  \n                  </td>    \n              </tr>    \n              <tr>    \n                  <td colspan=\"2\" class=\"content-center\">    \n                      <button style=\"margin:5px;\" mat-raised-button color=\"accent\" [disabled]=\"!regiForm.valid || IsAccepted==0\">\n                        Submit</button> \n    \n                  </td>    \n              </tr>    \n          </table>  \n            \n      </form>    \n  </mat-card-content>    \n</mat-card>   "

/***/ }),

/***/ "./src/app/reactive-form/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/reactive-form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.FirstName = '';
        this.LastName = '';
        this.Address = '';
        this.DOB = null;
        this.Gender = '';
        this.Blog = '';
        this.Email = '';
        this.IsAccepted = 0;
        // To initialize FormGroup  
        this.regiForm = fb.group({
            'FirstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'LastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'Address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)])],
            'DOB': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'Gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'Blog': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'Email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'IsAccepted': [null]
        });
    }
    // On Change event of Toggle Button  
    FormComponent.prototype.onChange = function (event) {
        if (event.checked == true) {
            this.IsAccepted = 1;
        }
        else {
            this.IsAccepted = 0;
        }
    };
    // Executed When Form Is Submitted  
    FormComponent.prototype.onFormSubmit = function (form) {
        console.log(form);
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/reactive-form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/reactive-form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/reactive-form/reactive-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.module.ts ***!
  \*******************************************************/
/*! exports provided: AppReactiveFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReactiveFormModule", function() { return AppReactiveFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/reactive-form/form.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var AppReactiveFormModule = /** @class */ (function () {
    function AppReactiveFormModule() {
    }
    AppReactiveFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"]
            ],
            exports: [
                _form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_6__["ShowOnDirtyErrorStateMatcher"] }
            ]
        })
    ], AppReactiveFormModule);
    return AppReactiveFormModule;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashwini/Documents/Latest_books/vscode_projects/materialdashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map