import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.checklistOverviewPage = ChecklistOverviewPage;
  }

  addTaskStorage(){
    var key = this.taskName;
    var value = {"category":this.category, "dueDate":this.dueDate, "taskNotes":this.taskNotes};
    this.storage.set(key,value);
  }

}
