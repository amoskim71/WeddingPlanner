import { ViewChild, Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AddBudgetPage } from "../addBudget/addBudget";
import { AddTransactionPage } from "../addTransaction/addTransaction";
import { Storage } from "@ionic/storage";
import { BaseChartDirective } from "ng2-charts/ng2-charts";

@Component({
  selector: "page-budget",
  templateUrl: "budget.html"
})
export class BudgetPage {
  budget: string = "overview";
  AddBudgetPage: any;
  AddTransactionPage: any;
  transactions: any = [];
  transactions2: any = {};
  budgets: any = [];
  budgetsLen = 0;
  leftToSpend: number = 0;
  bardata: any = {};
  // Doughnut
  public doughnutChartLabels: string[] = ["Wardrobe", "Decorations", "Invites"];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = "doughnut";
  @ViewChild("baseChart") private chart;
  public donutData: any = {};
  baseChart: any;

  //bar chart
  // public barChartLabels: string[] = ["Food"];
  // public barChartData: number[] = [100];
  public barChartType: string = "horizontalBar";

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.AddBudgetPage = AddBudgetPage;
    this.AddTransactionPage = AddTransactionPage;
    this.leftToSpend = 0;
    this.loadBudgets();
    this.budgetStorageToArray();
    this.getAllTransactions();
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  //get all category transactions
  getAllTransactions() {
    this.transactions = [];
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    this.storage.forEach((value, key, index) => {
      var name = this.getItemName(key);
      if (name != "not") {
        this.transactions.push({ key: name, value: value });
        this.leftToSpend = this.leftToSpend - (0 + +value["amount"]);
        this.populateDonutChart(value["category"], +value["amount"]);

        // Stephen
        let category = value["category"];
        this.populateDonut(category, { name: name, value: value });
        console.log(this.donutData);
      }
    });
    console.log("test");
    console.log(this.doughnutChartData);
  }

  budgetStorageToArray() {
    console.log("storing budgets to array");
    this.budgets = [];
    this.storage.forEach((value, key, index) => {
      var name = this.getBudgetName(key);
      if (name != "not") {
        this.budgets.push({ key: name, value: value });
        this.leftToSpend = this.leftToSpend + +value["amount"];
      }
    });
  }

  populateDonutChart(categoryName, amount) {
    console.log("populateDonutChart");
    var idx = this.doughnutChartLabels.indexOf(categoryName);
    if (idx !== -1) {
      //exists
      this.doughnutChartData[idx] = this.doughnutChartData[idx] + +amount;
    } else {
      this.doughnutChartLabels.push(categoryName);
      this.doughnutChartData.push(+amount);
    }

    if (this.chart !== undefined) {
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
    }
  }

  populateDonut(category, item) {
    if (!(category in this.donutData)) {
      this.donutData[category] = 0;
      this.bardata[category] = { data: [], labels: [] };
    }
    this.donutData[category] += +item.value.amount;
    this.doughnutChartLabels = Object.keys(this.donutData);
    this.doughnutChartData = Object.values(this.donutData);
    this.bardata[category]["data"] = [
      { data: [this.donutData[category]], label: "Budget remaining" }
    ];
    this.bardata[category]["labels"] = [category];
    setTimeout(
      () => (this.doughnutChartLabels = Object.keys(this.donutData)),
      0
    );
  }

  labels = () => Object.keys(this.donutData);

  delete(taskToDelete) {
    this.storage.remove(taskToDelete);
    this.getAllTransactions();
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

  //return budget name. and checks if budget
  getBudgetName(key) {
    var array = key.split("-");
    if (array[0] == "budget") {
      return key.substring("budget-".length);
    }
    //not a transaction
    return "not";
  }

  loadBudgets() {
    this.storage.get("budget-Catering").then(val => {
      if (val) {
        //console.log("budget not empty");
      } else {
        this.defaultBudgets();
      }
    });
  }

  defaultBudgets() {
    this.storage.set("budget-Catering", { amount: "100" });
    this.storage.set("budget-Decorations", { amount: "100" });
    this.storage.set("budget-Invites", { amount: "100" });
    this.storage.set("budget-Venue", { amount: "100" });
    this.storage.set("budget-Wardrobe", { amount: "100" });
  }
}
