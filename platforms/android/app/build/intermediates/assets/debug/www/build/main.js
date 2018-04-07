webpackJsonp([0],{

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__explore_explore__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__budget_budget__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(214);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/tabs/tabs.html"*/'<ion-tabs>\n<!--   <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab> -->\n\n  <ion-tab [root]="tab1Root" tabTitle="Explore" tabIcon="compass"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Budget" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Checklist" tabIcon="checkbox-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendordetails_vendordetails__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
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
        this.apiUrl = "https://api.foursquare.com/v2/venues/explore?";
        this.searchedVendors = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].empty();
        this.savedVendors = {};
        this.vendors = "explore";
        this.vendorFilterOptions = [
            "Wardrobe",
            "Decorations",
            "Invites",
            "Venue",
            "Catering",
            "None"
        ];
        // use only for development
        this.storage.clear();
    }
    ExplorePage.prototype.vendorDetails = function (event, vendor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vendordetails_vendordetails__["a" /* VendorDetailsPage */], {
            vendor: vendor,
            isSaved: this.isSaved(vendor)
        });
    };
    ExplorePage.prototype.saveOrRemoveVendor = function (event, vendor) {
        var vendorKey = this._savedVendorKey(vendor);
        if (vendorKey in this.savedVendors) {
            delete this.savedVendors[vendorKey];
            this.storage.remove(vendorKey);
            return;
        }
        this.storage.set(vendorKey, vendor);
        this.savedVendors[vendorKey] = vendor;
    };
    ExplorePage.prototype.keys = function (obj) {
        return Object.keys(obj);
    };
    ExplorePage.prototype.isSaved = function (vendor) {
        return this._savedVendorKey(vendor) in this.savedVendors;
    };
    ExplorePage.prototype.filterChanged = function () {
        if (this.selectedFilter == "None")
            this.selectedFilter = null;
    };
    ExplorePage.prototype.clearSearch = function () {
        this.searchedVendors = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].empty();
    };
    ExplorePage.prototype.search = function () {
        var _this = this;
        console.log("searched", this.queryString, this.queryLocation);
        // TODO: Foursquare implementation elsewhere?
        var clientId = "WGPAZ2CRUWRWJYK1MLGRMXXXORZFFLEINAASEYUYXO40MAVL";
        var clientSecret = "FDMVWCI3WNBEFTDZAXYWW54QEZUUEDM5XOPNWE2VUGKP0GGP";
        var params = {
            client_id: clientId,
            client_secret: clientSecret,
            query: this.queryString,
            venuePhotos: 1,
            v: "20170801",
            limit: 50
        };
        if (!this.queryLocation) {
            console.log("no location specified");
            this.geolocation
                .getCurrentPosition({
                timeout: 10000,
                enableHighAccuracy: true,
                maximumAge: 3600
            })
                .then(function (resp) {
                params["ll"] = resp.coords.latitude + "," + resp.coords.longitude;
                _this.searchedVendors = _this._search(params);
            }, function (err) { return console.log(err); });
        }
        else {
            params["near"] = this.queryLocation;
            this.searchedVendors = this._search(params);
        }
    };
    ExplorePage.prototype._search = function (params) {
        return this.http.get(this.apiUrl + __WEBPACK_IMPORTED_MODULE_9_jquery__["param"](params)).map(function (res) {
            var allItems = [];
            var results = JSON.parse(res.text()).response;
            for (var i = 0; i < results.groups.length; i++) {
                var group = results.groups[i];
                for (var j = 0; j < group.items.length; j++) {
                    var vendor = group.items[j];
                    var photoUrl = "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-2.ashx?w=450&hash=1D0CFABF4758BB624425C9102B8209CCF8233880";
                    if (vendor.venue.featuredPhotos) {
                        var photoInfo = vendor.venue.featuredPhotos.items[0];
                        photoUrl = photoInfo.prefix + "300x300" + photoInfo.suffix;
                    }
                    vendor["photoUrl"] = photoUrl;
                }
                allItems = allItems.concat(group.items);
            }
            return allItems;
        });
    };
    ExplorePage.prototype._savedVendorKey = function (vendor) {
        return "saved-vendor-" + vendor.venue.id;
    };
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-explore",template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/explore/explore.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Explore\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="vendors">\n      <ion-segment-button value="explore">\n        Explore\n      </ion-segment-button>\n      <ion-segment-button value="saved">\n        Saved\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <div [ngSwitch]="vendors">\n    <ion-list *ngSwitchDefault>\n      <form action="." (ngSubmit)="search()">\n        <ion-list>\n          <ion-item>\n            <ion-searchbar [ngModelOptions]="{standalone:true}" placeholder="Search for something" [(ngModel)]="queryString" (search)="search()"\n              (ionClear)="clearSearch()">\n            </ion-searchbar>\n          </ion-item>\n          <ion-item>\n            <ion-input name="queryLocation" [(ngModel)]="queryLocation" type="text" placeholder="Using current location"></ion-input>\n          </ion-item>\n          <button type="submit" class="button hide"></button>\n        </ion-list>\n      </form>\n      <h1 class=\'centered\' *ngIf="(searchedVendors | async)?.length==0">No venues</h1>\n      <ion-list *ngFor="let vendor of (searchedVendors | async)">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="{{ vendor.photoUrl }}" (click)="vendorDetails($event,vendor)">\n          </ion-thumbnail>\n          <h2>{{vendor.venue.name}}</h2>\n          <p>{{vendor.venue.location.address}} {{ vendor.venue.price ? "(" + "$".repeat(vendor.venue.price.tier) + ")" : ""\n            }}\n          </p>\n          <ion-icon name="{{ isSaved(vendor) ? \'heart\' : \'heart-outline\'}}" (click)="saveOrRemoveVendor($event,vendor)" style="font-size:32px;"\n            item-end></ion-icon>\n          <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n      </ion-list>\n      <!-- <ion-card *ngFor="let vendor of (searchedVendors | async)">\n        <ion-card-content>\n          <ion-thumbnail>\n            <img src="{{ vendor.photoUrl }}" (click)="vendorDetails($event,vendor)">\n          </ion-thumbnail>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col col-10>\n                <ion-card-title>{{vendor.venue.name}}</ion-card-title>\n                <p>{{vendor.venue.location.address}} {{ vendor.venue.price ? "(" + "$".repeat(vendor.venue.price.tier) + ")"\n                  : "" }}\n                </p>\n              </ion-col>\n              <ion-col col-2>\n                <div class="centered">\n                  <ion-icon name="{{ isSaved(vendor) ? \'heart\' : \'heart-outline\'}}" (click)="saveOrRemoveVendor($event,vendor)" style="font-size:32px;"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card> -->\n    </ion-list>\n    <ion-list *ngSwitchCase="\'saved\'">\n      <ion-list>\n        <ion-item>\n          <ion-label>Filter</ion-label>\n          <ion-select placeholder="Select a filter" [(ngModel)]="selectedFilter" (ionChange)="filterChanged()">\n            <ion-option *ngFor="let filterOpt of vendorFilterOptions" value="{{filterOpt}}">{{ filterOpt }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngFor="let key of keys(savedVendors)">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="{{ savedVendors[key].photoUrl }}" (click)="vendorDetails($event,savedVendors[key])">\n          </ion-thumbnail>\n          <h2>{{savedVendors[key].venue.name}}</h2>\n          <p>{{savedVendors[key].venue.location.address}} {{ savedVendors[key].venue.price ? "(" + "$".repeat(savedVendors[key].venue.price.tier)\n            + ")" : "" }}\n          </p>\n          <ion-icon name="{{ isSaved(savedVendors[key]) ? \'heart\' : \'heart-outline\'}}" (click)="saveOrRemoveVendor($event,savedVendors[key])"\n            style="font-size:32px;" item-end></ion-icon>\n          <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n      </ion-list>\n      <!-- <ion-card *ngFor="let key of keys(savedVendors)">\n        <img src="{{ savedVendors[key].photoUrl }}" (click)="vendorDetails($event,savedVendors[key])">\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-10>\n                <ion-card-title>{{savedVendors[key].venue.name}}</ion-card-title>\n                <p>{{savedVendors[key].venue.location.address}} {{ savedVendors[key].venue.price ? "(" + "$".repeat(savedVendors[key].venue.price.tier)\n                  + ")" : "" }}\n                </p>\n              </ion-col>\n              <ion-col col-2>\n                <div class="centered">\n                  <ion-icon name="{{ isSaved(savedVendors[key]) ? \'heart\' : \'heart-outline\'}}" (click)="saveOrRemoveVendor($event,savedVendors[key])"\n                    style="font-size:32px;"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card> -->\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/explore/explore.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VendorDetailsPage = /** @class */ (function () {
    function VendorDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vendor = navParams.data.vendor;
        this.isSaved = navParams.data.isSaved;
        this.location = this.vendor.venue.location;
        console.log(this.vendor);
    }
    VendorDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad VendorpagePage");
    };
    VendorDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-vendordetails",template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/vendordetails/vendordetails.html"*/'<!--\n  Generated template for the VendorpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>vendorpage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <img src="{{ vendor.photoUrl }}">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <ion-card-title>{{vendor.venue.name}}</ion-card-title>\n            <p>{{location.address}}</p>\n            <p>{{ location.city }}, {{ location.state }} {{ location.postalCode }} {{ vendor.venue.price ? "(" + "$".repeat(vendor.venue.price.tier)\n              + ")" : "" }}\n            </p>\n            <p>\n              <span>\n                <ion-icon name="call"></ion-icon>\n              </span>\n              {{ vendor.venue.contact.formattedPhone ? vendor.venue.contact.formattedPhone : \'No contact info available\' }}</p>\n          </ion-col>\n          <ion-col col-2>\n            <div class=\'centered\'>\n              <ion-icon name="{{ isSaved ? \'heart\' : \'heart-outline\'}}" (click)="saveOrRemoveVendor($event,vendor)" style="font-size:32px;"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/vendordetails/vendordetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], VendorDetailsPage);
    return VendorDetailsPage;
}());

//# sourceMappingURL=vendordetails.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBudgetPage = /** @class */ (function () {
    function AddBudgetPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.budgetName = '';
        this.category = '';
        this.amount = '';
        this.budget = __WEBPACK_IMPORTED_MODULE_3__budget_budget__["a" /* BudgetPage */];
        this.retrieveStoredInfo();
    }
    AddBudgetPage.prototype.retrieveStoredInfo = function () {
        var _this = this;
        this.budgetName = this.navParams.get('task');
        if (this.budgetName) {
            this.storage.get(this.budgetName).then(function (val) {
                _this.budgetName = val["category"];
                _this.amount = val["amount"];
            });
        }
    };
    AddBudgetPage.prototype.addBudgetStorage = function () {
        var key = "budget-" + this.budgetName;
        var value = { "amount": this.amount };
        this.storage.set(key, value);
    };
    AddBudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addBudget',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/addBudget/addBudget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Add Budget\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Budget Name</ion-label>\n      <ion-input type="text"  [(ngModel)]="budgetName"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select [(ngModel)]="category">\n        <ion-option value="catering">Catering</ion-option>\n        <ion-option value="decorations">Decorations</ion-option>\n        <ion-option value="invites">Invites</ion-option>\n        <ion-option value="venue">Venue</ion-option>\n        <ion-option value="wardrobe">Wardrobe</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label fixed>$</ion-label>\n      <ion-input type="number" [(ngModel)]="amount" placeholder="Amount">$</ion-input>\n    </ion-item>\n\n    <div padding>\n      <button ion-button color="primary" (click)="addBudgetStorage()" [navPush]="BudgetPage" block>Save</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/addBudget/addBudget.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AddBudgetPage);
    return AddBudgetPage;
}());

//# sourceMappingURL=addBudget.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTransactionPage = /** @class */ (function () {
    function AddTransactionPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.itemName = '';
        this.category = '';
        this.amount = '';
        //
        this.TAG = "transaction-";
        this.budgetPage = __WEBPACK_IMPORTED_MODULE_3__budget_budget__["a" /* BudgetPage */];
        //this.itemCostAmount = 1;
        //this.itemCountAmount = 1;
        this.togglePerItem();
        this.retrieveStoredInfo();
    }
    AddTransactionPage.prototype.retrieveStoredInfo = function () {
        var _this = this;
        this.itemName = this.navParams.get('task');
        if (this.itemName) {
            this.storage.get(this.itemName).then(function (val) {
                _this.category = val["category"];
                _this.amount = val["amount"];
            });
        }
    };
    AddTransactionPage.prototype.togglePerItem = function () {
        if (this.toggle) {
            this.inputDisabled = false;
            this.inputDisabled2 = true;
        }
        else {
            this.inputDisabled = true;
            this.inputDisabled2 = false;
        }
    };
    AddTransactionPage.prototype.addTransactionStorage = function () {
        console.log("add transaction");
        var key = this.TAG + this.itemName;
        var value;
        if (this.toggle) {
            console.log("from count x cost");
            var amt = this.itemCountAmount * this.itemCostAmount;
            value = { "category": this.category,
                "itemCostAmount": this.itemCostAmount,
                "itemCountAmount": this.itemCountAmount,
                "toggle": this.toggle,
                "amount": amt };
        }
        else {
            console.log("from total");
            value = { "category": this.category,
                "itemCostAmount": 0,
                "itemCountAmount": 0,
                "toggle": this.toggle,
                "amount": this.amount };
        }
        this.storage.set(key, value);
        console.log("set");
    };
    AddTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addTransaction',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/addTransaction/addTransaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Add Transaction\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input type="text"  [(ngModel)]="itemName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select [(ngModel)]="category">\n        <ion-option value="catering">Catering</ion-option>\n        <ion-option value="decorations">Decorations</ion-option>\n        <ion-option value="invites">Invites</ion-option>\n        <ion-option value="venue">Venue</ion-option>\n        <ion-option value="wardrobe">Wardrobe</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <p topmargin="50"></p>\n    <ion-item>\n      <ion-label>Calculate per item</ion-label>\n      <ion-toggle \n      [(ngModel)]="toggle" \n      (click)="togglePerItem()"\n      ></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Cost per item</ion-label>\n      <ion-input type="number" \n      [disabled]="inputDisabled" \n      [(ngModel)]="itemCost"\n      [value] = "itemCostAmount"\n      placeholder="10.50">$</ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed> Number of items</ion-label>\n      <ion-input type="number" \n      [disabled]="inputDisabled" \n      [(ngModel)]="itemCount" \n      [value] = "itemCountAmount"\n      placeholder="150">$</ion-input>\n    </ion-item>\n\n\n\n    <ion-item>\n      <ion-label fixed>Total Spent</ion-label>\n      <ion-input type="number" \n      [(ngModel)]="amount" \n      [disabled]="inputDisabled2" \n      [value] = "totalAmount"\n      placeholder="Amount">$</ion-input>\n    </ion-item>\n\n    <!-- amount paid and amount due TODO--> \n\n    <div padding>\n      <button ion-button block\n      color="primary" \n      (click)="addTransactionStorage()" \n      [navPush]="budgetPage"\n      >Save\n    </button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/addTransaction/addTransaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AddTransactionPage);
    return AddTransactionPage;
}());

//# sourceMappingURL=addTransaction.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChecklistItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__ = __webpack_require__(60);
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
    function NewChecklistItemPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.taskName = '';
        this.category = '';
        this.dueDate = new Date().toISOString();
        this.taskNotes = '';
        this.checklistOverviewPage = __WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */];
        this.retrieveStoredInfo();
    }
    NewChecklistItemPage.prototype.retrieveStoredInfo = function () {
        var _this = this;
        console.log("retrieving stored info");
        this.taskName = this.navParams.get('task');
        if (this.taskName) {
            console.log("Task found in storage");
            this.storage.get(this.taskName).then(function (val) {
                console.log(val);
                _this.category = val["category"];
                _this.dueDate = val["dueDate"];
                _this.taskNotes = val["taskNotes"];
            });
        }
    };
    NewChecklistItemPage.prototype.addTaskStorage = function () {
        var key = this.taskName;
        var value = { "category": this.category, "dueDate": this.dueDate, "taskNotes": this.taskNotes, "checklist": true };
        this.storage.set(key, value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */]);
    };
    NewChecklistItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-newChecklistItem',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/newChecklistItem/newChecklistItem.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Checklist Item\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Task</ion-label>\n      <ion-input type="text"  [(ngModel)]="taskName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select [(ngModel)]="category">\n        <ion-option value="catering">Catering</ion-option>\n        <ion-option value="decorations">Decorations</ion-option>\n        <ion-option value="invites">Invites</ion-option>\n        <ion-option value="venue">Venue</ion-option>\n        <ion-option value="wardrobe">Wardrobe</ion-option>\n        <ion-option value="other">Other</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Due</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dueDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Notes</ion-label>\n      <ion-textarea type="text" [(ngModel)]="taskNotes"></ion-textarea>\n    </ion-item>\n\n    <div padding>\n      <button ion-button color="primary" (click)="addTaskStorage()" block>Save</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/newChecklistItem/newChecklistItem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NewChecklistItemPage);
    return NewChecklistItemPage;
}());

//# sourceMappingURL=newChecklistItem.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__ = __webpack_require__(60);
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
    function ChecklistPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.weddingDate = new Date().toISOString();
    }
    ChecklistPage.prototype.skip = function () {
        console.log("skipping");
        this.storage.set("weddingDate", "skip");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */]);
    };
    ChecklistPage.prototype.submit = function () {
        console.log("setting wedding date");
        this.storage.set("weddingDate", this.weddingDate);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */]);
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checklist',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklist/checklist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Checklist\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n  <div class="spacer" style="height: 50px;"></div>\n  <h1 id="checklistTabDefaultPage-heading1" style="color:#000000;text-align:center;padding:10px;">Start off with a suggested list</h1>\n  <div class="spacer" style="height: 20px;"></div>\n  <div style="margin-left: 5%;margin-right:5%;">\n\n  <!-- https://ionicframework.com/docs/api/components/datetime/DateTime/ -->\n  <ion-item>\n    <ion-label>Wedding Date</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="weddingDate"></ion-datetime>\n  </ion-item>\n  \n  <button ion-button (click)="submit()">Submit</button>\n  <button ion-button (click)="skip()" color="light">Skip</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklist/checklist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_budget_budget__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addBudget_addBudget__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_addTransaction_addTransaction__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_checklist_checklist__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_checklistOverview_checklistOverview__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_newChecklistItem_newChecklistItem__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_vendordetails_vendordetails__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_charts__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addBudget_addBudget__["a" /* AddBudgetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_newChecklistItem_newChecklistItem__["a" /* NewChecklistItemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_vendordetails_vendordetails__["a" /* VendorDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addBudget_addBudget__["a" /* AddBudgetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_checklistOverview_checklistOverview__["a" /* ChecklistOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_newChecklistItem_newChecklistItem__["a" /* NewChecklistItemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_vendordetails_vendordetails__["a" /* VendorDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bm": 232,
	"./bm.js": 232,
	"./bn": 233,
	"./bn.js": 233,
	"./bo": 234,
	"./bo.js": 234,
	"./br": 235,
	"./br.js": 235,
	"./bs": 236,
	"./bs.js": 236,
	"./ca": 237,
	"./ca.js": 237,
	"./cs": 238,
	"./cs.js": 238,
	"./cv": 239,
	"./cv.js": 239,
	"./cy": 240,
	"./cy.js": 240,
	"./da": 241,
	"./da.js": 241,
	"./de": 242,
	"./de-at": 243,
	"./de-at.js": 243,
	"./de-ch": 244,
	"./de-ch.js": 244,
	"./de.js": 242,
	"./dv": 245,
	"./dv.js": 245,
	"./el": 246,
	"./el.js": 246,
	"./en-au": 247,
	"./en-au.js": 247,
	"./en-ca": 248,
	"./en-ca.js": 248,
	"./en-gb": 249,
	"./en-gb.js": 249,
	"./en-ie": 250,
	"./en-ie.js": 250,
	"./en-il": 251,
	"./en-il.js": 251,
	"./en-nz": 252,
	"./en-nz.js": 252,
	"./eo": 253,
	"./eo.js": 253,
	"./es": 254,
	"./es-do": 255,
	"./es-do.js": 255,
	"./es-us": 256,
	"./es-us.js": 256,
	"./es.js": 254,
	"./et": 257,
	"./et.js": 257,
	"./eu": 258,
	"./eu.js": 258,
	"./fa": 259,
	"./fa.js": 259,
	"./fi": 260,
	"./fi.js": 260,
	"./fo": 261,
	"./fo.js": 261,
	"./fr": 262,
	"./fr-ca": 263,
	"./fr-ca.js": 263,
	"./fr-ch": 264,
	"./fr-ch.js": 264,
	"./fr.js": 262,
	"./fy": 265,
	"./fy.js": 265,
	"./gd": 266,
	"./gd.js": 266,
	"./gl": 267,
	"./gl.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./gu": 269,
	"./gu.js": 269,
	"./he": 270,
	"./he.js": 270,
	"./hi": 271,
	"./hi.js": 271,
	"./hr": 272,
	"./hr.js": 272,
	"./hu": 273,
	"./hu.js": 273,
	"./hy-am": 274,
	"./hy-am.js": 274,
	"./id": 275,
	"./id.js": 275,
	"./is": 276,
	"./is.js": 276,
	"./it": 277,
	"./it.js": 277,
	"./ja": 278,
	"./ja.js": 278,
	"./jv": 279,
	"./jv.js": 279,
	"./ka": 280,
	"./ka.js": 280,
	"./kk": 281,
	"./kk.js": 281,
	"./km": 282,
	"./km.js": 282,
	"./kn": 283,
	"./kn.js": 283,
	"./ko": 284,
	"./ko.js": 284,
	"./ky": 285,
	"./ky.js": 285,
	"./lb": 286,
	"./lb.js": 286,
	"./lo": 287,
	"./lo.js": 287,
	"./lt": 288,
	"./lt.js": 288,
	"./lv": 289,
	"./lv.js": 289,
	"./me": 290,
	"./me.js": 290,
	"./mi": 291,
	"./mi.js": 291,
	"./mk": 292,
	"./mk.js": 292,
	"./ml": 293,
	"./ml.js": 293,
	"./mn": 294,
	"./mn.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 296,
	"./ms-my": 297,
	"./ms-my.js": 297,
	"./ms.js": 296,
	"./mt": 298,
	"./mt.js": 298,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./tg": 325,
	"./tg.js": 325,
	"./th": 326,
	"./th.js": 326,
	"./tl-ph": 327,
	"./tl-ph.js": 327,
	"./tlh": 328,
	"./tlh.js": 328,
	"./tr": 329,
	"./tr.js": 329,
	"./tzl": 330,
	"./tzl.js": 330,
	"./tzm": 331,
	"./tzm-latn": 332,
	"./tzm-latn.js": 332,
	"./tzm.js": 331,
	"./ug-cn": 333,
	"./ug-cn.js": 333,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 456;

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addBudget_addBudget__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addTransaction_addTransaction__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
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
    function BudgetPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.transactions = [];
        this.budgets = [];
        this.leftToSpend = 0;
        // Doughnut
        this.doughnutChartLabels = ["Wardrobe", "Decorations", "Invites"];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = "doughnut";
        //bar chart
        this.barChartLabels = ["Food"];
        this.barChartData = [100];
        this.barChartType = "horizontalBar";
        this.AddBudgetPage = __WEBPACK_IMPORTED_MODULE_2__addBudget_addBudget__["a" /* AddBudgetPage */];
        this.AddTransactionPage = __WEBPACK_IMPORTED_MODULE_3__addTransaction_addTransaction__["a" /* AddTransactionPage */];
        this.leftToSpend = 0;
        this.loadBudgets();
        this.budgetStorageToArray();
        this.getAllTransactions();
    }
    // events
    BudgetPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    BudgetPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    //get all category transactions
    BudgetPage.prototype.getAllTransactions = function () {
        var _this = this;
        this.transactions = [];
        this.storage.forEach(function (value, key, index) {
            var name = _this.getItemName(key);
            if (name != "not") {
                _this.transactions.push({ key: name, value: value });
                _this.leftToSpend = _this.leftToSpend - (0 - value["amount"]);
            }
        });
    };
    BudgetPage.prototype.budgetStorageToArray = function () {
        var _this = this;
        console.log("storing budgets to array");
        this.budgets = [];
        this.storage.forEach(function (value, key, index) {
            var name = _this.getBudgetName(key);
            if (name != "not") {
                console.log(name);
                _this.budgets.push({ key: name, value: value });
                _this.leftToSpend = _this.leftToSpend + +value["amount"];
            }
        });
    };
    BudgetPage.prototype.delete = function (taskToDelete) {
        this.storage.remove(taskToDelete);
        this.getAllTransactions();
    };
    //return itemName for transactions. or "not" if it is not a transaction
    BudgetPage.prototype.getItemName = function (key) {
        var array = key.split("-");
        if (array[0] == "transaction") {
            return key.substring("transaction-".length);
        }
        //not a transaction
        return "not";
    };
    //return budget name. and checks if budget
    BudgetPage.prototype.getBudgetName = function (key) {
        var array = key.split("-");
        if (array[0] == "budget") {
            return key.substring("budget-".length);
        }
        //not a transaction
        return "not";
    };
    BudgetPage.prototype.loadBudgets = function () {
        var _this = this;
        this.storage.get("budget-Catering").then(function (val) {
            if (val) {
                console.log("budget not empty");
            }
            else {
                console.log("load defaultBudgets");
                _this.defaultBudgets();
            }
        });
    };
    BudgetPage.prototype.defaultBudgets = function () {
        this.storage.set("budget-Catering", { amount: "100" });
        this.storage.set("budget-Decorations", { amount: "100" });
        this.storage.set("budget-Invites", { amount: "100" });
        this.storage.set("budget-Venue", { amount: "100" });
        this.storage.set("budget-Wardrobe", { amount: "100" });
    };
    BudgetPage.prototype.getTotalBudget = function () {
        var i;
        var total = 0;
        console.log("budgets length: " + this.budgets.length);
        for (i = 0; i < this.budgets.length; i++) {
            //{key:name, value:value}
            total = total + +this.budgets[i]["amount"];
        }
        /*
        console.log("gettotalbudget");
        this.storage.forEach( (value, key, index) => {
            var name = this.getBudgetName(key);
            if(name != "not"){
                //this.budgets.push({key:name, value:value});
                console.log("value amount: "+value["amount"]);
                total = total + + value["amount"];
            }
        })
        */
        return total;
    };
    BudgetPage.prototype.getTotalSpending = function () {
        return 0;
    };
    BudgetPage.prototype.getSpendingLeft = function () {
        var budget = this.getTotalBudget();
        var spent = this.getTotalSpending();
        console.log("total budget: " + budget);
        this.leftToSpend = budget - spent;
    };
    BudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-budget",template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/budget/budget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Budget\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="budget">\n      <ion-segment-button value="overview">\n        Overview\n      </ion-segment-button>\n      <ion-segment-button value="breakdown">\n        Breakdown\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n\n\n  <div [ngSwitch]="budget">\n    <ion-list *ngSwitchDefault>\n      <button ion-button block [navPush]="AddTransactionPage">\n        add Transaction\n      </button>\n\n      <ion-item>\n        <ion-label color="primary">Left to spend</ion-label>\n        <ion-input [(ngModel)]="leftToSpend" [disabled]=true placeholder="Text Input"></ion-input>\n      </ion-item>\n\n\n      <ion-list>\n        <ion-item-sliding *ngFor= "let task of transactions; let i=index">\n          <ion-item nopadding>\n            <h2>{{task.key}}</h2>\n            <h3>${{task.value["amount"]}}   {{task.value["category"]}}</h3>\n            \n          </ion-item>\n\n          <ion-item-options side="right">\n            <button ion-button color="secondary" \n            [navPush]="AddTransactionPage" \n            [navParams]="{\'task\': task.key}">\n            <ion-icon name="create"></ion-icon>EDIT</button>\n\n            <button ion-button color="danger" (click)="delete(task.key)"><ion-icon name="trash"></ion-icon>DELETE</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n\n      <div class="spacer" style="height: 15px;"></div>\n\n      <div style="display: block">\n        <canvas baseChart\n          [data]="doughnutChartData"\n          [labels]="doughnutChartLabels"\n          [chartType]="doughnutChartType"\n          (chartHover)="chartHovered($event)"\n          (chartClick)="chartClicked($event)">  \n        </canvas>\n      </div>\n\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n\n      <ion-item id="budgetOverview-list-item20">ad space</ion-item>\n        \n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n    </ion-list>\n\n    <!-- Budget breakdown -->\n\n    <ion-list *ngSwitchCase="\'breakdown\'">\n      <button ion-button block [navPush]="AddBudgetPage">\n        add budget\n      </button>\n      <ion-list id="budgetBreakdown-list6">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item35">Wardrobe\n          <span class="item-note">$300 left</span>\n          <ion-icon name="create"></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item38">[bar graph of remaining budget]</ion-item> -->\n        <canvas baseChart\n          [data]="barChartData"\n          [labels]="barChartLabels"\n          [chartType]="barChartType"\n          (chartHover)="chartHovered($event)"\n          (chartClick)="chartClicked($event)">  \n        </canvas>\n\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 70%; height: 30px; background-color: #86CE50;"></div>\n        </div>\n      </ion-list>\n\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n\n      <ion-list id="budgetBreakdown-list7">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item39">Food\n          <span class="item-note">$600 left</span>\n          <ion-icon name="create"\n          [navPush]="addBudgetPage" \n          [navParams]="{\'task\': \'Food\'}"\n          ></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item40">[bar graph of remaining budget]</ion-item> -->\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 50%; height: 30px; background-color: #86CE50;"></div>\n        </div>\n      </ion-list>\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n      <ion-list id="budgetBreakdown-list8">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item41">Invites\n          <span class="item-note">$700 left</span>\n          <ion-icon name="create"></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item42">[bar graph of remaining budget]</ion-item> -->\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 30%; height: 30px; background-color: #86CE50;"></div>\n        </div>\n      </ion-list>\n      <div class="spacer" style="width: 300px; height: 15px;"></div>\n      <ion-list id="budgetBreakdown-list13">\n        <ion-item class="item-icon-right" id="budgetBreakdown-list-item53">Flowers\n          <span class="item-note">$50 left</span>\n          <ion-icon name="create"></ion-icon>\n        </ion-item>\n        <!-- <ion-item id="budgetBreakdown-list-item54">[bar graph of remaining budget]</ion-item> -->\n        <div style="border: 0px solid #aeaeae; background-color: #eaeaea; width: 100%; height: 30px;">\n          <div style="position: relative; bottom: 0; width: 90%; height: 30px; background-color: #DB564B;"></div>\n        </div>\n      </ion-list>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/budget/budget.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], BudgetPage);
    return BudgetPage;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newChecklistItem_newChecklistItem__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checklist_checklist__ = __webpack_require__(213);
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
        this.checkForWeddingDate();
        this.loadTaskStorage();
        this.newChecklistItemPage = __WEBPACK_IMPORTED_MODULE_3__newChecklistItem_newChecklistItem__["a" /* NewChecklistItemPage */];
    }
    ChecklistOverviewPage.prototype.checkForWeddingDate = function () {
        var _this = this;
        console.log("Checking for wedding date");
        this.storage.get("weddingDate").then(function (val) {
            console.log("wedding date val");
            console.log(val);
            if (val == null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checklist_checklist__["a" /* ChecklistPage */]);
            }
        });
    };
    ChecklistOverviewPage.prototype.loadTaskStorage = function () {
        var _this = this;
        console.log("load");
        this.tasks = [];
        this.storage.forEach(function (value, key, index) {
            if (value["checklist"] == true) {
                _this.tasks.push({ key: key, value: value });
            }
        });
        console.log(this.tasks);
    };
    ChecklistOverviewPage.prototype.delete = function (taskToDelete) {
        console.log(taskToDelete);
        this.storage.remove(taskToDelete);
        this.loadTaskStorage();
    };
    ChecklistOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checklistOverview',template:/*ion-inline-start:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklistOverview/checklistOverview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Checklist\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="has-header">\n    \n    <button ion-button block [navPush]="newChecklistItemPage">\n      add task\n    </button>\n    \n    <h2>Tasks List</h2>\n    <ion-list>\n      <ion-item-sliding *ngFor= "let task of tasks; let i=index">\n        <ion-item nopadding>\n          <ion-label>\n            <span>{{task.key}}</span><br>\n            Due: {{task.value["dueDate"] | date: \'MM/dd/yyyy\' }}\n          </ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="secondary" [navPush]="newChecklistItemPage" [navParams]="{\'task\': task.key}"><ion-icon name="create"></ion-icon>EDIT</button>\n          <button ion-button color="danger" (click)="delete(task.key)"><ion-icon name="trash"></ion-icon>DELETE</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Stephen/Desktop/WeddingPlanner/src/pages/checklistOverview/checklistOverview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ChecklistOverviewPage);
    return ChecklistOverviewPage;
}());

//# sourceMappingURL=checklistOverview.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map