import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { VendorDetailsPage } from "../vendordetails/vendordetails";
import { Geolocation } from "@ionic-native/geolocation";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Storage } from "@ionic/storage";
import "rxjs/add/operator/map";
import "rxjs/add/observable/empty";

import * as $ from "jquery";

@Component({
  selector: "page-explore",
  templateUrl: "explore.html"
})
export class ExplorePage {
  searchedVendors: Observable<any[]>;
  savedVendors: any;
  vendors: any;
  queryString: string;
  queryLocation: string;
  vendorFilterOptions: any;
  selectedFilter: any;
  apiUrl: any;
  constructor(
    public navCtrl: NavController,
    public http: Http,
    public geolocation: Geolocation,
    public storage: Storage
  ) {
    this.apiUrl = "https://api.foursquare.com/v2/venues/explore?";
    this.searchedVendors = Observable.empty<any[]>();
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

  vendorDetails(event, vendor) {
    this.navCtrl.push(VendorDetailsPage, {
      vendor: vendor,
      isSaved: this.isSaved(vendor)
    });
  }

  saveOrRemoveVendor(event, vendor) {
    const vendorKey = this._savedVendorKey(vendor);
    if (vendorKey in this.savedVendors) {
      delete this.savedVendors[vendorKey];
      this.storage.remove(vendorKey);
      return;
    }
    this.storage.set(vendorKey, vendor);
    this.savedVendors[vendorKey] = vendor;
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

  clearSearch() {
    this.searchedVendors = Observable.empty<any[]>();
  }

  search() {
    console.log("searched", this.queryString, this.queryLocation);
    // TODO: Foursquare implementation elsewhere?
    const clientId = "INSERT_CLIENT_ID";
    const clientSecret = "INSERT_CLIENT_SECRET";

    let params = {
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
        .then(
          resp => {
            params["ll"] = resp.coords.latitude + "," + resp.coords.longitude;
            this.searchedVendors = this._search(params);
          },
          err => console.log(err)
        );
    } else {
      params["near"] = this.queryLocation;
      this.searchedVendors = this._search(params);
    }
  }

  _search(params) {
    return this.http.get(this.apiUrl + $.param(params)).map(res => {
      let allItems = [];
      let results = JSON.parse(res.text()).response;
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
        }
        allItems = allItems.concat(group.items);
      }
      return allItems;
    });
  }
  _savedVendorKey(vendor) {
    return "saved-vendor-" + vendor.venue.id;
  }
}
