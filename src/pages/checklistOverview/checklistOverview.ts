import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-checklistOverview',
  templateUrl: 'checklistOverview.html'
})
export class ChecklistOverviewPage {

  constructor(public navCtrl: NavController, public storage: Storage) {
  }


  updateCheckbox() {
    this.storage.set('name', 'Max');
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }
}
