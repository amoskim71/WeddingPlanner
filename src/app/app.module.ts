import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { SQLite} from '@ionic-native/sqlite';

import { ExplorePage } from '../pages/explore/explore';
import { BudgetPage } from '../pages/budget/budget';
import { ChecklistPage } from '../pages/checklist/checklist';
import { ChecklistOverviewPage } from '../pages/checklistOverview/checklistOverview';
import { NewChecklistItemPage } from '../pages/newChecklistItem/newChecklistItem';
import { SettingsPage } from '../pages/settings/settings';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    BudgetPage,
    ChecklistPage,
    ChecklistOverviewPage,
    NewChecklistItemPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
