import { ViewChild, Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { AddBudgetPage } from "../addBudget/addBudget";
import { AddTransactionPage } from "../addTransaction/addTransaction";
import { TransactionListPage } from "../transactionList/transactionList";
import { Storage } from "@ionic/storage";
import { BaseChartDirective } from "ng2-charts/ng2-charts";

@Component({
  selector: "page-budget",
  templateUrl: "budget.html"
})
export class BudgetPage implements OnInit{
  budget: string = "overview";
  AddBudgetPage: any;
  AddTransactionPage: any;
  TransactionListPage: any;
  transactions: any = [];
  transactions2: any = {};
  budgets: any = {};
  budgetsLen = 0;
  leftToSpend: number = 0;
  bardata: any = {};

  // Doughnut
  public doughnutChartLabels: string[] = ["Wardrobe", "Decorations", "Invites"];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = "doughnut";
  @ViewChild("baseChart") private chart;
  baseChart: any;
  public barChartType: string = "horizontalBar";
  public categoryColors: any = {
    catering: "rgba(255, 99, 132, 0.2)",
    decorations: "rgba(54, 162, 235, 0.2)",
    invites: "rgba(255, 206, 86, 0.2)",
    venue: "rgba(75, 192, 192, 0.2)",
    wardrobe: "rgba(153, 102, 255, 0.2)"
  };

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.AddBudgetPage = AddBudgetPage;
    this.AddTransactionPage = AddTransactionPage;
    this.TransactionListPage = TransactionListPage;
    this.leftToSpend = 0;
    this.setDefaultBudgets();
    this.loadBudgetsFromStorage();
    this.getAllTransactions();
  }
  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
    this.setDefaultBudgets();
    this.loadBudgetsFromStorage();
    this.getAllTransactions();
  }
  // events
  public chartClicked(e: any, categoryName): void {
    console.log(e);
    this.navCtrl.push(TransactionListPage, {
      category: categoryName,
      total: 0
    });
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
        let category = value["category"];
        this.transactions.push({ key: name, value: value });
        this.leftToSpend = this.leftToSpend - (0 + +value["amount"]);
        this.populateDonutChart(category, +value["amount"]);
        this.updateBudget(category, { name: name, value: value });
      }
    });
    console.log("test");
    console.log(this.doughnutChartData);
  }

  loadBudgetsFromStorage() {
    console.log("storing budgets to array");
    this.budgets = {};
    this.storage.forEach((value, key, index) => {
      var name = this.getBudgetName(key);
      if (name != "not") {
        this.budgets[name.toLowerCase()] = {
          total: value["amount"],
          spent: 0,
          barchart: { data: [], labels: [] }
        };
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

  updateBudget(category, item) {
    this.budgets[category].spent += +item.value.amount;
    this.budgets[category]["barchart"] = {
      datasets: [
        {
          data: [this.budgets[category]["spent"]],
          label: "Amount spent",
          backgroundColor: [this.categoryColors[category]]
        }
      ],
      options: {
        scales: {
          xAxes: [
            { ticks: { beginAtZero: true, max: +this.budgets[category].total } }
          ]
        }
      },
      colors: [this.categoryColors[category]],
      labels: [category]
    };
  }

  setDefaultBudgets() {
    this.storage.get("budget-Catering").then(val => {
      if (!val) {
        this.storage.set("budget-Catering", { amount: "100" });
        this.storage.set("budget-Decorations", { amount: "100" });
        this.storage.set("budget-Invites", { amount: "100" });
        this.storage.set("budget-Venue", { amount: "100" });
        this.storage.set("budget-Wardrobe", { amount: "100" });
      }
    });
  }

  budgetCategories = () => Object.keys(this.budgets);

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
}
