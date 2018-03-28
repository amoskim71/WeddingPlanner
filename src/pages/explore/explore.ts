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
  vendors: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public geolocation: Geolocation
  ) {
    this.vendors = "explore";

    // const clientId = "";
    // const clientSecret = "";
    // let apiUrl = "https://api.foursquare.com/v2/venues/explore?";
    // let params = {
    //   client_id: clientId,
    //   client_secret: clientSecret,
    //   near: "Pittsburgh, PA",
    //   query: "bakery",
    //   venuePhotos: 1,
    //   v: "20170801",
    //   limit: 50
    // };
    // apiUrl += $.param(params);

    // this.searchedVendors = this.http.get(apiUrl).map(res => {
    //   let results = JSON.parse(res.text()).response;
    //   let allItems = [];
    //   for (let i = 0; i < results.groups.length; i++) {
    //     let group = results.groups[i];
    //     for (let j = 0; j < group.items.length; j++) {
    //       let item = group.items[j];
    //       let photoUrl =
    //         "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-2.ashx?w=450&hash=1D0CFABF4758BB624425C9102B8209CCF8233880";
    //       if (!!item.venue.featuredPhotos) {
    //         const photoInfo = item.venue.featuredPhotos.items[0];
    //         photoUrl = photoInfo.prefix + "width300x300" + photoInfo.suffix;
    //       }
    //       item["photoUrl"] = photoUrl;
    //       console.log(item);
    //     }
    //     allItems = allItems.concat(group.items);
    //   }
    //   return allItems;
    // });
  }

  vendorTapped(event) {
    this.navCtrl.push(VendorpagePage);
  }

  search(q) {
    const clientId = "INSERT_CLIENT_ID";
    const clientSecret = "INSERT_CLIENT_SECRET";
    let apiUrl = "https://api.foursquare.com/v2/venues/explore?";
    let params = {
      client_id: clientId,
      client_secret: clientSecret,
      near: "Pittsburgh, PA",
      query: q,
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
            photoUrl = photoInfo.prefix + "width300x300" + photoInfo.suffix;
          }
          item["photoUrl"] = photoUrl;
        }
        allItems = allItems.concat(group.items);
      }
      return allItems;
    });
  }
}
