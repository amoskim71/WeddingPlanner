import { ViewChild, Component, OnInit } from "@angular/core";
import { NavController, AlertController, NavParams } from "ionic-angular";
import { AddBudgetPage } from "../addBudget/addBudget";
import { AddTransactionPage } from "../addTransaction/addTransaction";
import { TransactionListPage } from "../transactionList/transactionList";
import { Storage } from "@ionic/storage";
//import { BaseChartDirective } from "ng2-charts/ng2-charts";

@Component({
  selector: "page-budget",
  templateUrl: "budget.html"
})
export class BudgetPage implements OnInit {
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
  isPicVisible: boolean = true;
  isPicVisible2: boolean = false;

  // Doughnut
  public doughnutChartLabels: string[] = ["Wardrobe", "Decorations", "Invites"];
  public doughnutChartData: number[] = [100, 100, 100];
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {
    this.AddBudgetPage = AddBudgetPage;
    this.AddTransactionPage = AddTransactionPage;
    this.TransactionListPage = TransactionListPage;
    this.leftToSpend = 0;
    this.setDefaultBudgets();
    this.loadBudgetsFromStorage();
    this.getAllTransactions();
  }

  // ngOnInit() {
  //   // this is being called twice. is this needed?
  //   //called after the constructor and called  after the first ngOnChanges() 
  //   this.setDefaultBudgets();
  //   this.loadBudgetsFromStorage();
  //   this.getAllTransactions();
  //   // this.addLeftToSpend();
  //   this.setTab();
  // }

  // events
  public chartClicked(e: any, categoryName): void {
    console.log(e);
    this.navCtrl.push(TransactionListPage, {
      category: categoryName,
      total: 0
    });
  }

  // events
  public chartClicked2(e: any, categoryName): void {
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
    console.log("left to spend", this.leftToSpend);
    this.storage.forEach((value, key, index) => {
      var name = this.getItemName(key);
      if (name != "not") {
        let category = value["category"];
        this.transactions.push({ key: name, value: value });
        this.leftToSpend = this.leftToSpend - (0 + +value["amount"]);
        this.populateDonutChart(category, +value["amount"]);
        this.updateLeftToSpend();
        this.updateBudget(category, { name: name, value: value });
        this.toggleChartAndPic();
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
        this.updateBudget(name, { name: "", value: { "amount": 0 } });
        this.leftToSpend = this.leftToSpend + +value["amount"];
        this.updateLeftToSpend();
      }
    });
  }

  populateDonutChart(categoryName, amount) {
    console.log("populateDonutChart", categoryName);
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
        this.storage.set("budget-catering", { amount: "100" });
        this.storage.set("budget-decorations", { amount: "100" });
        this.storage.set("budget-invites", { amount: "100" });
        this.storage.set("budget-venue", { amount: "100" });
        this.storage.set("budget-wardrobe", { amount: "100" });
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

  //add the left to spend or remaining budget to the donut data
  addLeftToSpend() {
    //this.populateDonutChart("Unused Budget", this.leftToSpend);
    this.doughnutChartLabels.push("Unused Budget");
    this.doughnutChartData.push(this.leftToSpend);
  }

  updateLeftToSpend() {
    //this.populateDonutChart("Unused Budget", this.leftToSpend);
    let i = this.doughnutChartLabels.indexOf("Unused Budget");
    if (i != -1) {
      this.doughnutChartData[i] = this.leftToSpend;
    } else {
      this.doughnutChartData.push(this.leftToSpend);
      this.doughnutChartLabels.push("Unused Budget");
    }
  }

  //hide the image and show the chart
  toggleChartAndPic() {
    this.isPicVisible = false;
    this.isPicVisible2 = true;
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'This page gives a visual of how much of the budget has been spent in each category. Tap the bar charts to see a list of transactions for each category',
      buttons: ['OK']
    });
    alert.present();
  }

  setTab() {
    var tabName = this.navParams.get('tab');
    if (tabName) {
      this.budget = "breakdown"
    } else {
      this.budget = "overview";
    }
  }
}
