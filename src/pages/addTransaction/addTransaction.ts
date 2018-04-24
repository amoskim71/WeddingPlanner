import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { BudgetPage } from "../budget/budget";

@Component({
  selector: "page-addTransaction",
  templateUrl: "addTransaction.html"
})
export class AddTransactionPage {
  itemName: string = "";
  category: string = "catering";
  amount: number = 0;
  budgetPage: any;
  itemCostAmount: number;
  itemCountAmount: number;
  //toggle: boolean = true;
  //
  TAG: string = "transaction-";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
    this.budgetPage = BudgetPage;
    this.itemCostAmount = null;
    this.itemCountAmount = 1;
    this.retrieveStoredInfo();
  }

  retrieveStoredInfo() {
    this.itemName = this.navParams.get("task");
    if (this.itemName) {
      this.storage.get(this.itemName).then(val => {
        this.category = val["category"];
        this.amount = val["amount"];
      });
    }
  }

  calculateTotal() {
    console.log(
      +this.itemCountAmount,
      +this.itemCostAmount,
      +this.itemCountAmount * +this.itemCostAmount
    );
    this.amount = +this.itemCountAmount * +this.itemCostAmount;
  }

  addTransactionStorage() {
    console.log("add transaction");
    var key = this.TAG + this.itemName;
    var value;

    console.log("from count x cost");
    //var amt = this.itemCountAmount*this.itemCostAmount;
    value = {
      category: this.category,
      itemCostAmount: this.itemCostAmount,
      itemCountAmount: this.itemCountAmount,
      amount: this.amount
    };
    
    this.storage.set(key, value);
    this.navCtrl.setRoot(this.budgetPage);
    console.log("set");
  }
}
