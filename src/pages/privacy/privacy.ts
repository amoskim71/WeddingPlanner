import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ExplorePage } from '../explore/explore';
  
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html'
})
export class PrivacyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  submit() {
    this.storage.set("privacyAgree", true);

    this.navCtrl.setRoot(ExplorePage);
  }
}
