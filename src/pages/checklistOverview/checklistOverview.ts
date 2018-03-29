import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NewChecklistItemPage } from '../newChecklistItem/newChecklistItem';

@Component({
  selector: 'page-checklistOverview',
  templateUrl: 'checklistOverview.html'
})
export class ChecklistOverviewPage {

  tasks: any = [];
  newChecklistItemPage: any;

  constructor(public navCtrl: NavController, public storage: Storage) {
    // storage.clear();
    this.loadTaskStorage();
    this.newChecklistItemPage = NewChecklistItemPage;
  }

  loadTaskStorage(){
    console.log("load");
    this.tasks = [];
    this.storage.forEach( (value, key, index) => {
      this.tasks.push({key:key, value:value});
    })
    console.log(this.tasks);
  }

  delete(taskToDelete){
    console.log(taskToDelete);
    this.storage.remove(taskToDelete);
    this.loadTaskStorage();
  }
}
