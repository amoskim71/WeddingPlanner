import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
    this.vendor = navParams.data.vendor;
    this.isSaved = navParams.data.isSaved;
    this.vendorKey = navParams.data.vendorKey;
    this.savedVendors = navParams.data.savedVendors;
    this.location = this.vendor.venue.location;
  }

  isOpen() {
    let status = this.vendor.venue.hours ? this.vendor.venue.hours.status : '';
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
}
