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
  amount: number = 0;
  budgetPage: any;
  itemCostAmount: number;
  itemCountAmount: number;
  inputDisabled: boolean;
  inputDisabled2: boolean;
  toggle: boolean = true;
  //
  TAG: string = "transaction-";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.budgetPage = BudgetPage;
    this.itemCostAmount = 1;
    this.itemCountAmount = 1;
    this.togglePerItem();
    this.retrieveStoredInfo();
  }

  retrieveStoredInfo() {
    this.itemName = this.navParams.get('task');
    if (this.itemName) {
      this.storage.get(this.itemName).then(val => {
          this.category = val["category"];
          this.amount = val["amount"];
      })
    }
  }

  calculateTotal(){
    this.amount = this.itemCountAmount + this.itemCostAmount;
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
    var key = this.TAG+this.itemName;
    var value;
    if(this.toggle){
      console.log("from count x cost");
      //var amt = this.itemCountAmount*this.itemCostAmount;
      value = {"category":this.category, 
        "itemCostAmount":this.itemCostAmount, 
        "itemCountAmount":this.itemCountAmount,
        "toggle":this.toggle,
        "amount":this.amount};
    } else {
      console.log("from total");
      value = {"category":this.category, 
        "itemCostAmount":0, 
        "itemCountAmount":0,
        "toggle":this.toggle,
        "amount":this.amount};
    }
    this.storage.set(key,value);
    console.log("set");
  }
}
