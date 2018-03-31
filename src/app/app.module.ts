import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { IonicStorageModule } from "@ionic/storage";
import { MyApp } from "./app.component";
import { SQLite } from "@ionic-native/sqlite";
import { HttpModule } from "@angular/http";

import { ExplorePage } from "../pages/explore/explore";
import { BudgetPage } from "../pages/budget/budget";
import { ChecklistPage } from "../pages/checklist/checklist";
import { ChecklistOverviewPage } from "../pages/checklistOverview/checklistOverview";
import { NewChecklistItemPage } from "../pages/newChecklistItem/newChecklistItem";
import { SettingsPage } from "../pages/settings/settings";
import { VendorDetailsPage } from "../pages/vendordetails/vendordetails";

import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    BudgetPage,
    ChecklistPage,
    ChecklistOverviewPage,
    NewChecklistItemPage,
    SettingsPage,
    TabsPage,
    VendorDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    BudgetPage,
    ChecklistPage,
    ChecklistOverviewPage,
    NewChecklistItemPage,
    SettingsPage,
    TabsPage,
    VendorDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
