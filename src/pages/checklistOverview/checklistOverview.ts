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
    this.checkForWeddingDate();
    // storage.clear();
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
        this.sortTasks();
      }
    })
  }

  sortTasks() {
    this.tasks.sort(function(a, b) {
      var aChecked = a.value["done"];
      var bChecked = b.value["done"];
      var aDate = new Date(a.value["dueDate"]);
      var bDate = new Date(b.value["dueDate"]);
      if (aChecked && !bChecked) {
        return 1;
      } else if (bChecked && !aChecked) {
        return -1;
      } else {
        return aDate>bDate ? 1 : aDate<bDate ? -1 : 0;
      }
    });
  }

  delete(taskToDelete){
    console.log(taskToDelete);
    this.storage.remove(taskToDelete);
    this.loadTaskStorage();
  }

  updateDone(task) {
    this.storage.set(task.key, task.value);
    this.sortTasks();
  }
}
