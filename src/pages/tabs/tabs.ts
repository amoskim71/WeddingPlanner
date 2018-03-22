import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { BudgetPage } from '../budget/budget';
import { ChecklistPage } from '../checklist/checklist';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExplorePage;
  tab2Root = BudgetPage;
  tab3Root = ChecklistPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
