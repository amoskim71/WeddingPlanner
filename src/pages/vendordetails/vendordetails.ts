import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { Http } from "@angular/http";
import { foursquareConfig } from "../../config";
import * as $ from "jquery";

@Component({
  selector: "page-vendordetails",
  templateUrl: "vendordetails.html"
})
export class VendorDetailsPage {
  public vendor: any;
  public location: any;
  public isSaved: boolean;
  public savedVendors: any[];
  public vendorKey: string;
  public photoUrls: any[];
  public noPhotosUrl = "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-2.ashx?w=450&hash=1D0CFABF4758BB624425C9102B8209CCF8233880"

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http
  ) {
    this.vendor = navParams.data.vendor;
    this.isSaved = navParams.data.isSaved;
    this.vendorKey = navParams.data.vendorKey;
    this.savedVendors = navParams.data.savedVendors;
    this.location = this.vendor.venue.location;
    this.photoUrls = [];
    this.getPhotos();
  }

  isOpen() {
    let status = (this.vendor && this.vendor.venue && this.vendor.venue.hours && this.vendor.venue.hours.status) || '';
    return status.toLowerCase().indexOf("open") != -1;
  }

  saveOrRemoveVendor(event, vendor) {
    this.isSaved = !this.isSaved;
    if (this.vendorKey in this.savedVendors) {
      delete this.savedVendors[this.vendorKey];
      this.storage.remove(this.vendorKey);
      return;
    }
    this.storage.set(this.vendorKey, vendor);
    this.savedVendors[this.vendorKey] = vendor;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad VendorpagePage");
  }

  getPhotos() {
    const venueId = this.vendor.venue.id;
    const url = "https://api.foursquare.com/v2/venues/" + venueId + "/photos?";
    let params = {
      client_id: foursquareConfig.clientId,
      client_secret: foursquareConfig.clientSecret,
      limit: 25,
      v: "20170801"
    };
    this.http
      .get(url + $.param(params))
      .map(res => res.json().response)
      .subscribe(
        data => {
          this.photoUrls = data.photos.items.map(item => item.prefix + "300x300" + item.suffix)
          if (this.photoUrls.length == 0) {
            this.photoUrls = [this.noPhotosUrl];
          }
        },
        err => {
          this.photoUrls = [this.noPhotosUrl]
          console.log("Could not get photos");
        }
      );
  }
}
