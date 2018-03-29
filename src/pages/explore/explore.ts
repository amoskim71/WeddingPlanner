import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { VendorpagePage } from "../vendorpage/vendorpage";
import { Geolocation } from "@ionic-native/geolocation";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Storage } from "@ionic/storage";
import "rxjs/add/operator/map";

import * as $ from "jquery";

@Component({
  selector: "page-explore",
  templateUrl: "explore.html"
})
export class ExplorePage {
  searchedVendors: Observable<any>; // TODO: chagne to observable
  savedVendors: any;
  vendors: any;
  queryString: string;
  vendorFilterOptions: any;
  selectedFilter: any;
  _savedVendors: any;
  constructor(
    public navCtrl: NavController,
    public http: Http,
    public geolocation: Geolocation,
    public storage: Storage
  ) {
    // for segment button
    this.vendors = "explore";
    this.savedVendors = {};

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
    this.navCtrl.push(VendorpagePage, { vendor: vendor });
  }

  saveOrRemoveVendor(event, vendor) {
    console.log("clicked");
    const vendorId = vendor.venue.id;
    const vendorKey = "saved-vendor-" + vendorId;
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
    const vendorId = vendor.venue.id;
    const vendorKey = "saved-vendor-" + vendorId;
    return vendorKey in this.savedVendors;
  }

  filterSaved() {
    if (this.selectedFilter == "None") this.selectedFilter = null;
  }

  // TODO: don't want to keep searching if switch tabs
  search() {
    const clientId = "INSERT_CLIENT_ID_HERE";
    const clientSecret = "INSERT_CLIENT_SECRET_HERE";
    let apiUrl = "https://api.foursquare.com/v2/venues/explore?";
    let params = {
      client_id: clientId,
      client_secret: clientSecret,
      near: "Pittsburgh, PA", // TODO: search by current geolocation
      query: this.queryString,
      venuePhotos: 1,
      v: "20170801",
      limit: 50
    };
    apiUrl += $.param(params);
    this.searchedVendors = this.http.get(apiUrl).map(res => {
      let results = JSON.parse(res.text()).response;
      let allItems = [];

      // Combine all results together
      for (let i = 0; i < results.groups.length; i++) {
        let group = results.groups[i];
        for (let j = 0; j < group.items.length; j++) {
          let item = group.items[j];
          let photoUrl =
            "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-2.ashx?w=450&hash=1D0CFABF4758BB624425C9102B8209CCF8233880";
          if (!!item.venue.featuredPhotos) {
            const photoInfo = item.venue.featuredPhotos.items[0];
            photoUrl = photoInfo.prefix + "300x300" + photoInfo.suffix;
          }
          item["photoUrl"] = photoUrl;
        }
        allItems = allItems.concat(group.items);
      }
      return allItems;
    });
  }
}
