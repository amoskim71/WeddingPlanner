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
  transactions: any = [];
  budgets: any = [];
  leftToSpend: number = 0;

  // Doughnut
  public doughnutChartLabels:string[] = ['Wardrobe', 'Decorations', 'Invites'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  //bar chart
  public barChartLabels: string[] = ['Food'];
  public barChartData: number[] = [100];
  public barChartType: string = 'horizontalBar';

  constructor(public navCtrl: NavController, public storage: Storage) {
  	this.AddBudgetPage = AddBudgetPage;
  	this.AddTransactionPage = AddTransactionPage;
  	this.leftToSpend = 0;
  	this.loadBudgets();
  	this.budgetStorageToArray();
  	this.getAllTransactions();
  	
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  //get all category transactions
  getAllTransactions(){
  	this.transactions = [];
  	this.storage.forEach( (value, key, index) => {
  		var name = this.getItemName(key);
  		if(name != "not"){
  			this.transactions.push({key:name, value:value});
  			this.leftToSpend = this.leftToSpend - (0- value["amount"]);
  		}
  	})
  }

  budgetStorageToArray(){
  	console.log("storing budgets to array");
  	this.budgets = [];
  	this.storage.forEach( (value, key, index) => {
  		var name = this.getBudgetName(key);
  		if(name != "not"){
  			console.log(name);
  			this.budgets.push({key:name, value:value});
  			this.leftToSpend = this.leftToSpend + + value["amount"];
  		}
  	})
  }

 
 delete(taskToDelete){
    this.storage.remove(taskToDelete);
    this.getAllTransactions();
  }

  //return itemName for transactions. or "not" if it is not a transaction
  getItemName(key){
    var array = key.split('-');
    if(array[0] == "transaction"){
      return key.substring("transaction-".length);
    }
    //not a transaction
    return "not";
  }

  //return budget name. and checks if budget
  getBudgetName(key){
  	var array = key.split('-');
    if(array[0] == "budget"){
      return key.substring("budget-".length);
    }
    //not a transaction
    return "not";
  }

  loadBudgets(){
    this.storage.get("budget-Catering").then(val =>{
      if(val){
      	console.log("budget not empty");
      } else {
      	console.log("load defaultBudgets");
      	this.defaultBudgets();
      }
    })
  }

  defaultBudgets(){
    this.storage.set("budget-Catering", {"amount":"100"});
    this.storage.set("budget-Decorations", {"amount":"100"});
    this.storage.set("budget-Invites", {"amount":"100"});
    this.storage.set("budget-Venue", {"amount":"100"});
    this.storage.set("budget-Wardrobe", {"amount":"100"});
  }

  getTotalBudget(){
  	var i;
  	var total=0;
  	console.log("budgets length: "+this.budgets.length);
  	for (i = 0; i < this.budgets.length; i++) { 
	    //{key:name, value:value}
	    total = total + + this.budgets[i]["amount"];
	}

	/*
	console.log("gettotalbudget");
	this.storage.forEach( (value, key, index) => {
  		var name = this.getBudgetName(key);
  		if(name != "not"){
  			//this.budgets.push({key:name, value:value});
  			console.log("value amount: "+value["amount"]);
  			total = total + + value["amount"];
  		}
  	})
  	*/
	return total;
  }

  getTotalSpending(){
  	return 0;
  }

  getSpendingLeft(){
  	var budget = this.getTotalBudget();
  	var spent = this.getTotalSpending();
  	console.log("total budget: "+budget);
  	this.leftToSpend = budget - spent;
  }

}
