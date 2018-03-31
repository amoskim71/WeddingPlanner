import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the VendorpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-vendorpage",
  templateUrl: "vendorpage.html"
})
export class VendorpagePage {
  public vendor: any;
  public location: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vendor = navParams.data.vendor;
    this.location = this.vendor.venue.location;

    console.log(this.vendor);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad VendorpagePage");
  }
}
