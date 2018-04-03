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
    this.retrieveStoredInfo();
  }

  retrieveStoredInfo() { //for editting see checklist
    console.log("retrieving stored info");
    this.budgetName = this.navParams.get('task');
    if (this.budgetName) {
      console.log("Task found in storage");
      this.storage.get(this.budgetName).then(val => {
          console.log(val);
          this.budgetName = val["category"];
          this.amount = val["amount"];
      })

    }
  }

  addBudgetStorage(){
    var key = "budget-"+this.budgetName;
    var value = {"amount":this.amount};
    this.storage.set(key,value);
  }

  

}
