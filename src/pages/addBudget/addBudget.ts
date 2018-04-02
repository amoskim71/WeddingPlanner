import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BudgetPage } from '../budget/budget';
  
@Component({
  selector: 'page-addBudget',
  templateUrl: 'addBudget.html'
})
export class AddBudgetPage {

  budgetName: string = '';
  category: string = '';
  amount: string = '';
  budget: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.budget = BudgetPage;
    //this.retrieveStoredInfo();
  }

 /* retrieveStoredInfo() { //for editting see checklist
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
  }*/
  
  defaultBudgets(){
    this.storage.set("Catering", "100");
    this.storage.set("Decorations", "100");
    this.storage.set("Invites", "100");
    this.storage.set("Venue", "100");
    this.storage.set("Wardrobe", "100");
  }

  addBudgetStorage(){
    var key = this.budgetName;
    var value = {"amount":this.amount};
    this.storage.set(key,value);
  }

}
