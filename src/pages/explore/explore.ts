import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { VendorDetailsPage } from "../vendordetails/vendordetails";
import { Geolocation } from "@ionic-native/geolocation";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Storage } from "@ionic/storage";
import { Keyboard } from "@ionic-native/keyboard";
import { foursquareConfig } from "../../config";
import "rxjs/add/operator/map";
import "rxjs/add/observable/empty";

import * as $ from "jquery";

@Component({
  selector: "page-explore",
  templateUrl: "explore.html"
})
export class ExplorePage {
  searchedVendors: any[];
  savedVendors: any;
  vendors: any;
  queryString: string;
  queryLocation: string;
  vendorFilterOptions: any;
  selectedFilter: any;
  apiUrl: any;
  connected: boolean;
  searching: boolean;
  exploreCategories: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public storage: Storage,
    private geolocation: Geolocation,
    private keyboard: Keyboard
  ) {
    this.apiUrl = "https://api.foursquare.com/v2/venues/explore?";
    this.savedVendors = {};
    this.vendors = "explore";
    this.searching = false;
    this.searchedVendors = [];
    this.connected = true;
    this.exploreCategories = [
      { name: 'wardrobe', iconClass: 'ios-shirt-outline' },
      { name: 'food & drink', iconClass: 'ios-restaurant-outline' },
      { name: 'wedding venue', iconClass: 'ios-pin-outline' },
      { name: 'flowers', iconClass: 'ios-flower-outline' },
      { name: 'decorations', iconClass: 'ios-color-wand-outline' },
      { name: 'photographers', iconClass: 'ios-camera-outline' }
    ]
    // use only for development
    this.storage.clear();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad explore page");
  }

  vendorDetails(event, vendor) {
    console.log("vendor clicked");
    this.navCtrl.push(VendorDetailsPage, {
      vendor: vendor,
      vendorKey: this._savedVendorKey(vendor),
      isSaved: this.isSaved(vendor),
      savedVendors: this.savedVendors
    });
  }

  saveOrRemoveVendor(event, vendor) {
    console.log("saved");
    const vendorKey = this._savedVendorKey(vendor);
    if (vendorKey in this.savedVendors) {
      delete this.savedVendors[vendorKey];
      this.storage.remove(vendorKey);
      return;
    }
    this.storage.set(vendorKey, vendor);
    this.savedVendors[vendorKey] = vendor;
    return false;
  }

  keys(obj) {
    return Object.keys(obj);
  }

  isSaved(vendor) {
    return this._savedVendorKey(vendor) in this.savedVendors;
  }

  filterChanged() {
    if (this.selectedFilter == "None") this.selectedFilter = null;
  }

  clearSearch(event) {
    this.searchedVendors = null;
    this.searching = false;
    this.queryLocation = "";
    this.keyboard.close();
  }

  search() {
    this.keyboard.close();
    this.searching = true;
    let params = {
      client_id: foursquareConfig.clientId,
      client_secret: foursquareConfig.clientSecret,
      query: this.queryString.trim(),
      venuePhotos: 1,
      v: "20170801",
      limit: 50
    };
    params["near"] = this.queryLocation || "Pittsburgh, PA"
    // this.searchedVendors = this._search(params);
    this._search(params);
  }

  searchCategory(event, category) {
    this.queryString = category;
    this.search();
  }

  _search(params) {
    this.searching = true;
    this.http.get(this.apiUrl + $.param(params))
      .map(res => res.json().response)
      .subscribe(data => {
        this.connected = true;
        this.searching = false;
        let allItems = [];
        let results = data;
        for (let i = 0; i < results.groups.length; i++) {
          let group = results.groups[i];
          for (let j = 0; j < group.items.length; j++) {
            let vendor = group.items[j];
            let photoUrl =
              "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-2.ashx?w=450&hash=1D0CFABF4758BB624425C9102B8209CCF8233880";
            if (vendor.venue.featuredPhotos) {
              const photoInfo = vendor.venue.featuredPhotos.items[0];
              photoUrl = photoInfo.prefix + "300x300" + photoInfo.suffix;
            }
            vendor["photoUrl"] = photoUrl;
            console.log(vendor)
          }
          allItems = allItems.concat(group.items);
        }
        this.searchedVendors = allItems;
      },
        err => {
          this.connected = false;
          this.searching = false;
          console.log(err, "ERROR");
        }
      );
  }

  _savedVendorKey(vendor) {
    return "saved-vendor-" + vendor.venue.id;
  }


}
