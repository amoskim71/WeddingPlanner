import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { BudgetPage } from '../budget/budget';
import { ChecklistOverviewPage } from '../checklistOverview/checklistOverview';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExplorePage;
  tab2Root = BudgetPage;
  tab3Root = ChecklistOverviewPage;
  tab4Root = SettingsPage;

  constructor() {
  }

}
