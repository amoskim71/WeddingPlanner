import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { BudgetPage } from "../budget/budget";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-transactionList",
  templateUrl: "transactionList.html"
})
export class TransactionListPage {
	transactions: any;
	category: string = "";
	total: number;
	budgetPage: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public storage: Storage
	) {
		this.budgetPage = BudgetPage;
		this.category = this.navParams.get("category");
		this.total = 0;//this.navParams.get("total");
		this.getTransactions();
	}

	getTransactions(){
		this.transactions = [];
		this.storage.forEach((value, key, index) => {
			var name = this.getItemName(key);
			if( name != "not"){
				if(this.category == value["category"]){
					this.transactions.push({key: name, value: value});
					this.total += +value["amount"];
				}
			}
		})
	}

	//return itemName for transactions. or "not" if it is not a transaction
	getItemName(key) {
	var array = key.split("-");
	if (array[0] == "transaction") {
	  return key.substring("transaction-".length);
	}
	//not a transaction
	return "not";
	}
}