import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NewChecklistItemPage } from '../newChecklistItem/newChecklistItem';
import { ChecklistPage } from '../checklist/checklist';

@Component({
  selector: 'page-checklistOverview',
  templateUrl: 'checklistOverview.html'
})
export class ChecklistOverviewPage {

  tasks: any = [];
  newChecklistItemPage: any;

  constructor(public navCtrl: NavController, public storage: Storage) {
    // storage.clear();
    this.checkForWeddingDate();
    this.loadTaskStorage();
    this.newChecklistItemPage = NewChecklistItemPage;
  }

  checkForWeddingDate() {
    console.log("Checking for wedding date");
    this.storage.get("weddingDate").then(val => {
      console.log("wedding date val");
      console.log(val);
      if (val == null) {
        this.navCtrl.push(ChecklistPage);
      }
    })
  }

  loadTaskStorage(){
    console.log("load");
    this.tasks = [];
    this.storage.forEach( (value, key, index) => {
      if (value["checklist"] == true) {
        this.tasks.push({key:key, value:value});
      }
    }).then(() => {
      if (this.tasks.length > 1){
        this.tasks.sort(function(a, b) {
            a = new Date(a.value["dueDate"]);
            b = new Date(b.value["dueDate"]);
            return a>b ? 1 : a<b ? -1 : 0;
        });
      }
    })

  }

  delete(taskToDelete){
    console.log(taskToDelete);
    this.storage.remove(taskToDelete);
    this.loadTaskStorage();
  }
}
