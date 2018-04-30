import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrivacyPage } from '../privacy/privacy';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  privacy() {
  	this.navCtrl.push(PrivacyPage);
  }
}
