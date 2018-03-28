import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { VendorpagePage } from "../vendorpage/vendorpage";
import { Geolocation } from "@ionic-native/geolocation";
import { Http, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import * as $ from "jquery";

@Component({
  selector: "page-explore",
  templateUrl: "explore.html"
})
export class ExplorePage {
  searchedVendors: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public geolocation: Geolocation
  ) {
    const clientId = "INSERT_CLIENT_ID_HERE";
    const clientSecret = "INSERT_CLIENT_SECRET_HERE";
    let apiUrl = "https://api.foursquare.com/v2/venues/explore?";
    let params = {
      client_id: clientId,
      client_secret: clientSecret,
      near: "Pittsburgh, PA",
      query: "bakery",
      venuePhotos: 1,
      v: "20170801",
      limit: 50
    };
    apiUrl += $.param(params);

    this.searchedVendors = this.http
      .get(apiUrl)
      .map(res => JSON.parse(res.text()).response.groups[0].items);
  }

  vendorTapped(event) {
    this.navCtrl.push(VendorpagePage);
  }
}
