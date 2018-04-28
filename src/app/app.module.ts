import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { IonicStorageModule } from "@ionic/storage";
import { MyApp } from "./app.component";
import { SQLite } from "@ionic-native/sqlite";
import { HttpModule } from "@angular/http";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Geolocation } from "@ionic-native/geolocation";
import { ChartsModule } from "ng2-charts";
import { Network } from "@ionic-native/network";
import { Keyboard } from "@ionic-native/keyboard";
import { LongPressModule } from 'ionic-long-press';

// Pages
import { ExplorePage } from "../pages/explore/explore";
import { BudgetPage } from "../pages/budget/budget";
import { AddBudgetPage } from "../pages/addBudget/addBudget";
import { AddTransactionPage } from "../pages/addTransaction/addTransaction";
import { TransactionListPage } from "../pages/transactionList/transactionList";
import { ChecklistPage } from "../pages/checklist/checklist";
import { ChecklistOverviewPage } from "../pages/checklistOverview/checklistOverview";
import { NewChecklistItemPage } from "../pages/newChecklistItem/newChecklistItem";
import { SettingsPage } from "../pages/settings/settings";
import { VendorDetailsPage } from "../pages/vendordetails/vendordetails";
import { TabsPage } from "../pages/tabs/tabs";
import { PrivacyPage } from "../pages/privacy/privacy";


@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    BudgetPage,
    AddBudgetPage,
    AddTransactionPage,
    TransactionListPage,
    ChecklistPage,
    ChecklistOverviewPage,
    NewChecklistItemPage,
    SettingsPage,
    TabsPage,
    VendorDetailsPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserModule,
    ChartsModule,
    LongPressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    BudgetPage,
    AddBudgetPage,
    AddTransactionPage,
    TransactionListPage,
    ChecklistPage,
    ChecklistOverviewPage,
    NewChecklistItemPage,
    SettingsPage,
    TabsPage,
    VendorDetailsPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Geolocation,
    Network,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
