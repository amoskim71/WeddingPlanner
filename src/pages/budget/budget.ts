import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddBudgetPage } from '../addBudget/addBudget';
import { AddTransactionPage } from '../addTransaction/addTransaction'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {
  //budget: string = "overview";
  AddBudgetPage : any;
  AddTransactionPage: any;
  budgets: any = [];

  constructor(public navCtrl: NavController, public storage: Storage) {
  	this.AddBudgetPage = AddBudgetPage;
  	this.AddTransactionPage = AddTransactionPage;
  	this.getAllBudgets();
  }

  //get all category budgets
  getAllBudgets(){
  	this.budgets = [];
  	this.storage.forEach( (value, key, index) => {
  		this.budgets.push({key:key, value:value});
  	})
  }

  //for some budget, get all transactions for that category

}
