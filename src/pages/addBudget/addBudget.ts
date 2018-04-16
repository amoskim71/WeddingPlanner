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
  //category: string = '';
  amount: string = '';
  budgetPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.budgetPage = BudgetPage;
    this.retrieveStoredInfo();
  }

  retrieveStoredInfo() { 
    this.budgetName = this.navParams.get('task');
    if (this.budgetName) {
    console.log("budget-"+this.budgetName);
      this.storage.get("budget-"+this.budgetName).then(val => {
          this.amount = val["amount"];
      })
    }
  }

  addBudgetStorage(){
    var key = "budget-"+this.jsUcfirst(this.budgetName);
    var value = {"amount":this.amount};
    this.storage.set(key,value);
    this.navCtrl.setRoot(this.budgetPage,{tab:'breakdown'});
  }

  jsUcfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

}
