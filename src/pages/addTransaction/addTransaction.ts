import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BudgetPage } from '../budget/budget';
  
@Component({
  selector: 'page-addTransaction',
  templateUrl: 'addTransaction.html'
})
export class AddTransactionPage {

  itemName: string = '';
  category: string = '';
  amount: string = '';
  budget: any;
  itemCostAmount: any;
  itemCountAmount: any;
  inputDisabled: boolean;
  inputDisabled2: boolean;
  toggle: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.budget = BudgetPage;
    //this.itemCostAmount = 1;
    //this.itemCountAmount = 1;
    this.togglePerItem();
    this.retrieveStoredInfo();
  }

  retrieveStoredInfo() {
    console.log("retrieving stored info");
    this.itemName = this.navParams.get('task');
    if (this.itemName) {
      console.log("Task found in storage");
      this.storage.get(this.itemName).then(val => {
          console.log(val);
          this.category = val["category"];
          this.amount = val["amount"];
      })

    }
  }

  togglePerItem(){
    if(this.toggle){
      this.inputDisabled = false;
      this.inputDisabled2 = true;
    } else {
      this.inputDisabled = true;
      this.inputDisabled2 = false;
    }
  }

  addTransactionStorage(){
    console.log("add transaction");
    var key = this.itemName;
    var value;
    if(this.toggle){
      console.log("from count x cost");
      var amt = this.itemCountAmount*this.itemCostAmount;
      value = {"category":this.category, "amount":amt};
    } else {
      console.log("from total");
      value = {"category":this.category, "amount":this.amount};
    }
    this.storage.set(key,value);
    console.log("set");
  }

}
