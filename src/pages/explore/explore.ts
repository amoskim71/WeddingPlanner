import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { VendorDetailsPage } from "../vendordetails/vendordetails";
import { PrivacyPage } from '../privacy/privacy';
import { Http } from "@angular/http";
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
  locationPlaceholder: string;
  vendorFilterOptions: any;
  selectedFilter: any;
  apiUrl: any;
  connected: boolean;
  searching: boolean;
  typing: boolean;
  exploreCategories: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public storage: Storage,
    private keyboard: Keyboard
  ) {
    this.apiUrl = "https://api.foursquare.com/v2/venues/explore?";
    this.savedVendors = {};
    this.vendors = "explore";
    this.searching = false;
    this.searchedVendors = [];
    this.connected = true;
    this.queryLocation = ""
    this.queryString = ""
    this.locationPlaceholder = "Pittsburgh, PA"
    this.typing = false;
    this.exploreCategories = [
      { name: 'venue', iconClass: 'ios-home-outline', q: 'wedding venue' },
      { name: 'food & drink', iconClass: 'ios-restaurant-outline', q: 'food & drink' },
      { name: 'flowers', iconClass: 'ios-flower-outline', q: 'flowers' },
      { name: 'wardrobe', iconClass: 'ios-shirt-outline', q: 'wedding clothing' },
      { name: 'decorations', iconClass: 'ios-color-wand-outline', q: 'wedding decorations' },
      { name: 'photographers', iconClass: 'ios-camera-outline', q: 'photography' }
    ]
    // use only for development
    // this.storage.clear();

    this.checkForNewUser();
  }

  checkForNewUser() {
    this.storage.get("privacyAgree").then(val => {
      if (val == null) {
        this.navCtrl.push(PrivacyPage);
      }
    })
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
    console.log("cleared");
    this.searchedVendors = [];
    this.searching = false;
    this.keyboard.close();
    if (this.queryLocation) this.locationPlaceholder = this.queryLocation
    this.queryLocation = "";
    this.queryString = "";
    console.log(this.queryString);
  }

  search() {
    let params = {
      client_id: foursquareConfig.clientId,
      client_secret: foursquareConfig.clientSecret,
      query: this.queryString.trim(),
      venuePhotos: 1,
      v: "20170801",
      limit: 50
    };
    params["near"] = this.queryLocation || this.locationPlaceholder
    this._search(params);
  }

  searchCategory(event, category) {
    this.queryString = category;
    this.search();
  }

  onSearchbarFocus(event) {
    console.log("searchbar focused");
    this.typing = true;
  }

  onSearchbarFocusOut(event) {
    console.log("searchbar focused out", event)

    this.typing = false;
  }

  searchResultsExist() {
    return this.searchedVendors && this.searchedVendors.length > 0
  }

  _search(params) {
    this.searchedVendors = [];
    this.searching = true;
    this.keyboard.close();
    this.http.get(this.apiUrl + $.param(params))
      .map(res => res.json().response)
      .subscribe(
        data => {
          this.connected = true;
          this.searching = false;
          console.log("searching done")
          for (let i = 0; i < data.groups.length; i++) {
            let group = data.groups[i];
            for (let j = 0; j < group.items.length; j++) {
              let vendor = group.items[j];
              let photoUrl =
                "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-2.ashx?w=450&hash=1D0CFABF4758BB624425C9102B8209CCF8233880";
              if (vendor.venue.featuredPhotos) {
                const photoInfo = vendor.venue.featuredPhotos.items[0];
                photoUrl = photoInfo.prefix + "300x300" + photoInfo.suffix;
              }
              vendor["photoUrl"] = photoUrl;
            }
            this.searchedVendors = this.searchedVendors.concat(group.items);
          }
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
