import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChecklistOverviewPage } from '../checklistOverview/checklistOverview';
  
@Component({
  selector: 'page-newChecklistItem',
  templateUrl: 'newChecklistItem.html'
})
export class NewChecklistItemPage {

  taskName: string = '';
  category: string = '';
  dueDate: string = new Date().toISOString();
  taskNotes: string = '';
  checklistOverviewPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.checklistOverviewPage = ChecklistOverviewPage;
    this.retrieveStoredInfo();
  }

  retrieveStoredInfo() {
    console.log("retrieving stored info");
    this.taskName = this.navParams.get('task');
    if (this.taskName) {
      console.log("Task found in storage");
      this.storage.get(this.taskName).then(val => {
          console.log(val);
          this.category = val["category"];
          this.dueDate = val["dueDate"];
          this.taskNotes = val["taskNotes"];
      })

    }
  }

  addTaskStorage(){
    var key = this.taskName;
    var value = {"category":this.category, "dueDate":this.dueDate, "taskNotes":this.taskNotes, "checklist":true, "done":false};
    this.storage.set(key,value);
    this.navCtrl.setRoot(ChecklistOverviewPage);
  }

}
