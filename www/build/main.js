webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newChecklistItem_newChecklistItem__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChecklistOverviewPage = /** @class */ (function () {
    function ChecklistOverviewPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.tasks = [];
        // storage.clear();
        this.loadTaskStorage();
        this.newChecklistItemPage = __WEBPACK_IMPORTED_MODULE_3__newChecklistItem_newChecklistItem__["a" /* NewChecklistItemPage */];
    }
    ChecklistOverviewPage.prototype.loadTaskStorage = function () {
        var _this = this;
        console.log("load");
        this.tasks = [];
        this.storage.forEach(function (value, key, index) {
            _this.tasks.push({ key: key, value: value });
        });
        console.log(this.tasks);
    };
    ChecklistOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklistOverview',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklistOverview/checklistOverview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Checklist\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n    \n    <button ion-button block [navPush]="newChecklistItemPage">\n      add task\n    </button>\n    \n    <h2>Tasks List</h2>\n    <ion-list>\n      <ion-item-sliding *ngFor= "let task of tasks; let i=index">\n        <ion-item nopadding>\n          <ion-label>\n            <span>{{task.key}}</span><br>\n            Due: {{task.value["dueDate"] | date: \'MM/dd/yyyy\' }}\n          </ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklistOverview/checklistOverview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ChecklistOverviewPage);
    return ChecklistOverviewPage;
}());

//# sourceMappingURL=checklistOverview.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VendorpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorpagePage = /** @class */ (function () {
    function VendorpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VendorpagePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad VendorpagePage");
    };
    VendorpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-vendorpage",template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/vendorpage/vendorpage.html"*/'<!--\n  Generated template for the VendorpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>vendorpage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>Vendor Details</div>\n  <ion-card *ngFor="let vendor of (searchedVendors | async)">\n    <img src="{{ vendor.photoUrl }}">\n    <ion-card-content>\n      <ion-card-title>{{vendor.venue.name}}</ion-card-title>\n      <p>{{vendor.venue.location.address}} {{ vendor.venue.price ? "(" + "$".repeat(vendor.venue.price.tier) + ")" : "" }}\n      </p>\n      <ion-icon name="heart-outline" style="float: right;" (click)="saveOrRemoveVendor($event,vendor)"></ion-icon>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/vendorpage/vendorpage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], VendorpagePage);
    return VendorpagePage;
}());

//# sourceMappingURL=vendorpage.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/vendorpage/vendorpage.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__explore_explore__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__budget_budget__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklist_checklist__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__explore_explore__["a" /* ExplorePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__budget_budget__["a" /* BudgetPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__checklist_checklist__["a" /* ChecklistPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/tabs/tabs.html"*/'<ion-tabs>\n<!--   <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab> -->\n\n  <ion-tab [root]="tab1Root" tabTitle="Explore" tabIcon="compass"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Budget" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Checklist" tabIcon="checkbox-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendorpage_vendorpage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExplorePage = /** @class */ (function () {
    function ExplorePage(navCtrl, http, geolocation, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.storage = storage;
        // for segment button
        this.vendors = "explore";
        this.savedVendors = [];
        this.loadSavedVendors();
    }
    ExplorePage.prototype.loadSavedVendors = function () {
        var _this = this;
        this.storage.forEach(function (val, key, i) {
            if (key.startsWith("saved-vendor-")) {
                _this.savedVendors.push(val);
            }
        });
    };
    ExplorePage.prototype.vendorDetails = function (event, vendor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vendorpage_vendorpage__["a" /* VendorpagePage */]);
    };
    ExplorePage.prototype.saveOrRemoveVendor = function (event, vendor) {
        var _this = this;
        var vendorId = vendor.venue.id;
        var vendorKey = "saved-vendor-" + vendorId;
        this.storage.get(vendorKey).then(function (val) {
            if (!val) {
                console.log("saved");
                _this.storage.set(vendorKey, vendor);
            }
            else {
                console.log("removed", val);
                _this.storage.remove(vendorKey);
            }
        }, function (err) {
            // TODO: add error message
            console.log(err);
        });
    };
    ExplorePage.prototype.search = function () {
        var clientId = "WGPAZ2CRUWRWJYK1MLGRMXXXORZFFLEINAASEYUYXO40MAVL";
        var clientSecret = "FDMVWCI3WNBEFTDZAXYWW54QEZUUEDM5XOPNWE2VUGKP0GGP";
        // const clientId = "INSERT_CLIENT_ID_HERE";
        // const clientSecret = "INSERT_CLIENT_SECRET_HERE";
        var apiUrl = "https://api.foursquare.com/v2/venues/explore?";
        var params = {
            client_id: clientId,
            client_secret: clientSecret,
            near: "Pittsburgh, PA",
            query: this.queryString,
            venuePhotos: 1,
            v: "20170801",
            limit: 50
        };
        apiUrl += __WEBPACK_IMPORTED_MODULE_7_jquery__["param"](params);
        this.searchedVendors = this.http.get(apiUrl).map(function (res) {
            var results = JSON.parse(res.text()).response;
            var allItems = [];
            // Combine all results together
            for (var i = 0; i < results.groups.length; i++) {
                var group = results.groups[i];
                for (var j = 0; j < group.items.length; j++) {
                    var item = group.items[j];
                    var photoUrl = "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-2.ashx?w=450&hash=1D0CFABF4758BB624425C9102B8209CCF8233880";
                    if (!!item.venue.featuredPhotos) {
                        var photoInfo = item.venue.featuredPhotos.items[0];
                        photoUrl = photoInfo.prefix + "300x300" + photoInfo.suffix;
                    }
                    item["photoUrl"] = photoUrl;
                }
                allItems = allItems.concat(group.items);
            }
            return allItems;
        });
    };
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-explore",template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/explore/explore.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Explore\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="vendors">\n      <ion-segment-button value="explore">\n        Explore\n      </ion-segment-button>\n      <ion-segment-button value="saved">\n        Saved\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <div [ngSwitch]="vendors">\n    <!-- <div>\n      <img src="assets/imgs/exist-doing-likewise-foremost-position-grab-finally-best-over-limited-quickly-wish-googlo-maps-of-googlo-maps.png"\n        style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;">\n    </div> -->\n    <form action=".">\n      <ion-searchbar [ngModelOptions]="{standalone:true}" placeholder="Search for something" [(ngModel)]="queryString" (search)="search()"></ion-searchbar>\n    </form>\n    <ion-list *ngSwitchDefault>\n      <h1 class=\'centered\' *ngIf="!searchedVendors">Search for a venue!</h1>\n      <ion-card *ngFor="let vendor of (searchedVendors | async)">\n        <img src="{{ vendor.photoUrl }}" (click)="vendorDetails($event,vendor)">\n        <ion-card-content>\n          <ion-card-title>{{vendor.venue.name}}</ion-card-title>\n          <p>{{vendor.venue.location.address}} {{ vendor.venue.price ? "(" + "$".repeat(vendor.venue.price.tier) + ")" : ""\n            }}\n          </p>\n          <ion-icon name="heart-outline" style="float: right;" (click)="saveOrRemoveVendor($event,vendor)"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'saved\'">\n      <form id="saved-form10" class="list">\n        <label class="item item-select" id="saved-select3">\n          <span class="input-label">Filter by Category</span>\n          <select>\n            <option>Wardrobe</option>\n            <option>Decorations</option>\n            <option>Invites</option>\n            <option>Venue</option>\n            <option>Catering</option>\n          </select>\n        </label>\n      </form>\n      <ion-card *ngFor="let vendor of (savedVendor)">\n        <img src="{{ vendor.photoUrl }}" (click)="vendorDetails($event,vendor)">\n        <ion-card-content>\n          <ion-card-title>{{vendor.venue.name}}</ion-card-title>\n          <p>{{vendor.venue.location.address}} {{ vendor.venue.price ? "(" + "$".repeat(vendor.venue.price.tier) + ")" : ""\n            }}\n          </p>\n          <ion-icon name="heart-outline" style="float: right;" (click)="saveOrRemoveVendor($event,vendor)"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/explore/explore.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], ExplorePage);
    return ExplorePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BudgetPage = /** @class */ (function () {
    function BudgetPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.budget = "overview";
    }
    BudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-budget',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/budget/budget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Budget\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="budget">\n      <ion-segment-button value="overview">\n        Overview\n      </ion-segment-button>\n      <ion-segment-button value="breakdown">\n        Breakdown\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n\n\n  <div [ngSwitch]="budget">\n    <ion-list *ngSwitchCase="\'overview\'">\n      <a ui-sref="tabsController.addTransaction()" id="budgetOverview-button15" class="button button-balanced button-block icon-left ion-android-add">Add Transaction</a>\n\n      <div class="item item-body" id="budgetOverview-list-item-container2">\n        <div id="budgetOverview-markdown2" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">Left to spend:\n            <strong>$10,000</strong>\n          </p>\n        </div>\n      </div>\n      <div class="list card" id="budgetOverview-card21">\n        <ion-item class="positive" id="budgetOverview-list-item24">All Transactions</ion-item>\n        <ion-item id="budgetOverview-list-item26">Center pieces | Flowers\n          <span class="item-note">$300</span>\n        </ion-item>\n        <ion-item id="budgetOverview-list-item27">Shoes | Wardrobe\n          <span class="item-note">$100</span>\n        </ion-item>\n        <ion-item id="budgetOverview-list-item25">Dress | Wardrobe\n          <span class="item-note">$500</span>\n        </ion-item>\n      </div>\n      <div class="spacer" style="height: 15px;"></div>\n      <div>\n        <ion-item class="item-icon-left assertive" id="budgetOverview-list-item13">\n          <ion-icon name="alert"></ion-icon>Alert</ion-item>\n        <ion-item id="budgetOverview-list-item14">Reaching budget cap for\n          <b>flowers</b>\n        </ion-item>\n      </div>\n      <div class="spacer" style="height: 15px;"></div>\n      <div>\n        <img src="assets/imgs/budget-overview-pie.png"\n          style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">\n      </div>\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n      <ion-item id="budgetOverview-list-item20">ad space</ion-item>\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'breakdown\'">\n      <div id="budgetBreakdown-button-bar4" class="button-bar">\n        <a ui-sref="tabsController.budgetOverview()" id="budgetBreakdown-button17" class="button button-positive button-block button-outline">Overview</a>\n        <a ui-sref="tabsController.budgetBreakdown()" id="budgetBreakdown-button18" class="button button-positive button-block">Breakdown</a>\n      </div>\n      <a ui-sref="tabsController.addBudgetCategory()" id="budgetBreakdown-button19" class="button button-balanced button-block icon-left ion-android-add">Add Budget Category</a>\n      <ion-list id="budgetBreakdown-list6">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item35">Wardrobe\n          <span class="item-note">$300 left</span>\n          <ion-icon name="create"></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item38">[bar graph of remaining budget]</ion-item> -->\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 70%; height: 30px; background-color: #86CE50;"></div>\n        </div>\n      </ion-list>\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n      <ion-list id="budgetBreakdown-list7">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item39">Food\n          <span class="item-note">$600 left</span>\n          <ion-icon name="create"></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item40">[bar graph of remaining budget]</ion-item> -->\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 50%; height: 30px; background-color: #86CE50;"></div>\n        </div>\n      </ion-list>\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n      <ion-list id="budgetBreakdown-list8">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item41">Invites\n          <span class="item-note">$700 left</span>\n          <ion-icon name="create"></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item42">[bar graph of remaining budget]</ion-item> -->\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 30%; height: 30px; background-color: #86CE50;"></div>\n        </div>\n      </ion-list>\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n      <ion-list id="budgetBreakdown-list13">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item53">Flowers\n          <span class="item-note">$50 left</span>\n          <ion-icon name="create"></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item54">[bar graph of remaining budget]</ion-item> -->\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 90%; height: 30px; background-color: #DB564B;"></div>\n        </div>\n      </ion-list>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/budget/budget.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], BudgetPage);
    return BudgetPage;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklistOverview_checklistOverview__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.checklistOverviewPage = __WEBPACK_IMPORTED_MODULE_2__checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */];
    }
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklist',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklist/checklist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Checklist\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <div class="spacer" style="height: 50px;"></div>\n  <h1 id="checklistTabDefaultPage-heading1" style="color:#000000;text-align:center;padding:10px;">Start off with a suggested list</h1>\n  <div class="spacer" style="height: 20px;"></div>\n  <div style="margin-left: 5%;margin-right:5%;">\n\n  <!-- https://ionicframework.com/docs/api/components/datetime/DateTime/ -->\n  <ion-item>\n    <ion-label>Wedding Date</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="weddingDate"></ion-datetime>\n  </ion-item>\n  \n  <button ion-button [navPush]="checklistOverviewPage">Submit</button>\n  <button ion-button [navPush]="checklistOverviewPage" color="light">Skip</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklist/checklist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChecklistItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewChecklistItemPage = /** @class */ (function () {
    function NewChecklistItemPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.taskName = '';
        this.category = '';
        this.dueDate = new Date().toISOString();
        this.taskNotes = '';
        this.checklistOverviewPage = __WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */];
    }
    NewChecklistItemPage.prototype.addTaskStorage = function () {
        var key = this.taskName;
        var value = { "category": this.category, "dueDate": this.dueDate, "taskNotes": this.taskNotes };
        this.storage.set(key, value);
    };
    NewChecklistItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newChecklistItem',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/newChecklistItem/newChecklistItem.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Checklist Item\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Task</ion-label>\n      <ion-input type="text"  [(ngModel)]="taskName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select [(ngModel)]="category">\n        <ion-option value="catering">Catering</ion-option>\n        <ion-option value="decorations">Decorations</ion-option>\n        <ion-option value="invites">Invites</ion-option>\n        <ion-option value="venue">Venue</ion-option>\n        <ion-option value="wardrobe">Wardrobe</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Due</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dueDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Notes</ion-label>\n      <ion-textarea type="text" [(ngModel)]="taskNotes"></ion-textarea>\n    </ion-item>\n\n    <div padding>\n      <button ion-button color="primary" (click)="addTaskStorage()" [navPush]="checklistOverviewPage" block>Save</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/newChecklistItem/newChecklistItem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NewChecklistItemPage);
    return NewChecklistItemPage;
}());

//# sourceMappingURL=newChecklistItem.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_budget_budget__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_checklist_checklist__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_checklistOverview_checklistOverview__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_newChecklistItem_newChecklistItem__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_vendorpage_vendorpage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_newChecklistItem_newChecklistItem__["a" /* NewChecklistItemPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vendorpage_vendorpage__["a" /* VendorpagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/vendorpage/vendorpage.module#VendorpagePageModule', name: 'VendorpagePage', segment: 'vendorpage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_newChecklistItem_newChecklistItem__["a" /* NewChecklistItemPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vendorpage_vendorpage__["a" /* VendorpagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map