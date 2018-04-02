import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChecklistOverviewPage } from '../checklistOverview/checklistOverview';

@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})
export class ChecklistPage {

  weddingDate: string = new Date().toISOString();

  constructor(public navCtrl: NavController, public storage: Storage) {
  	
  }


  skip() {
    console.log("skipping");
  	this.storage.set("weddingDate", "skip");

    this.navCtrl.setRoot(ChecklistOverviewPage);
  }

  submit() {
    console.log("setting wedding date");
  	this.storage.set("weddingDate", this.weddingDate);

    this.navCtrl.setRoot(ChecklistOverviewPage);
  }

}
