import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChecklistOverviewPage } from '../checklistOverview/checklistOverview';

@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})
export class ChecklistPage {

  checklistOverviewPage: any;

  constructor(public navCtrl: NavController) {
  	this.checklistOverviewPage = ChecklistOverviewPage;
  }

}
