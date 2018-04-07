import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChecklistOverviewPage } from '../checklistOverview/checklistOverview';

@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})
export class ChecklistPage {

  weddingDate: string = new Date().toISOString();

  constructor(public navCtrl: NavController, public storage: Storage) {
  	
  }


  skip() {
    console.log("skipping");
  	this.storage.set("weddingDate", "skip");

    this.navCtrl.setRoot(ChecklistOverviewPage);
  }

  submit() {
    console.log("setting wedding date");
  	this.storage.set("weddingDate", this.weddingDate);

    this.addDefaultTasks(this.weddingDate);
    this.navCtrl.setRoot(ChecklistOverviewPage);
  }

  addDefaultTasks(weddingDate){
    console.log(weddingDate);
    var today = new Date();
    var date = new Date(weddingDate);
    var tenMonths;
    var sixMonths;
    var fourMonths;
    var twoMonths;
    var oneMonth;
    var oneWeek;

    // Ten months before the wedding date
    date.setMonth(date.getMonth()-10);
    if (date > today) {
      tenMonths = date.toISOString();
    } else {
      tenMonths = today.toISOString();
    }
    // Six months before the wedding date
    date.setMonth(date.getMonth()+4);
    if (date > today) {
      sixMonths = date.toISOString();
    } else {
      sixMonths = today.toISOString();
    }
    // Four months before the wedding date
    date.setMonth(date.getMonth()+2);
    if (date > today) {
      fourMonths = date.toISOString();
    } else {
      fourMonths = today.toISOString();
    }
    // Two months before the wedding date
    date.setMonth(date.getMonth()+2);
    if (date > today) {
      twoMonths = date.toISOString();
    } else {
      twoMonths = today.toISOString();
    }
    // One month before the wedding date
    date.setMonth(date.getMonth()+1);
    if (date > today) {
      oneMonth = date.toISOString();
    } else {
      oneMonth = today.toISOString();
    }
    // One week before the wedding date
    date.setDate(date.getDate()+21);
    if (date > today) {
      oneWeek = date.toISOString();
    } else {
      oneWeek = today.toISOString();
    }

    this.storage.set("Set a budget",{"category":"other", "dueDate":tenMonths, "taskNotes":"Should be done as early as possible", "checklist":true});
    this.storage.set("Compile a guest list",{"category":"invites", "dueDate":tenMonths, "taskNotes":"Should be done as early as possible", "checklist":true});
    this.storage.set("Reserve a venue",{"category":"venue", "dueDate":tenMonths, "taskNotes":"Should be done as early as possible", "checklist":true});

    this.storage.set("Choose your bridesmaids/groomsmen",{"category":"other", "dueDate":sixMonths, "taskNotes":"Suggested to be done 6 months before the wedding date", "checklist":true});
    this.storage.set("Find wedding dress, shoes, accessories",{"category":"wardrobe", "dueDate":sixMonths, "taskNotes":"Suggested to be done 6 months before the wedding date", "checklist":true});
    this.storage.set("Reserve music",{"category":"other", "dueDate":sixMonths, "taskNotes":"Suggested to be done 6 months before the wedding date", "checklist":true});
    this.storage.set("Reserve photographer/videographer",{"category":"other", "dueDate":sixMonths, "taskNotes":"Suggested to be done 6 months before the wedding date", "checklist":true});
    this.storage.set("Reserve flowers",{"category":"decorations", "dueDate":sixMonths, "taskNotes":"Suggested to be done 6 months before the wedding date", "checklist":true});
    this.storage.set("Book rooms for out of town guests",{"category":"other", "dueDate":sixMonths, "taskNotes":"Suggested to be done 6 months before the wedding date", "checklist":true});
    this.storage.set("Create a registry",{"category":"other", "dueDate":sixMonths, "taskNotes":"Suggested to be done 6 months before the wedding date", "checklist":true});

    this.storage.set("Order any stationary",{"category":"decorations", "dueDate":fourMonths, "taskNotes":"Suggested to be done 4 months before the wedding date", "checklist":true});
    this.storage.set("Book honeymoon",{"category":"other", "dueDate":fourMonths, "taskNotes":"Suggested to be done 4 months before the wedding date", "checklist":true});
    this.storage.set("Figure out favors",{"category":"other", "dueDate":fourMonths, "taskNotes":"Suggested to be done 4 months before the wedding date", "checklist":true});
    this.storage.set("Meet with photographer/videographer",{"category":"other", "dueDate":fourMonths, "taskNotes":"Suggested to be done 4 months before the wedding date", "checklist":true});
    this.storage.set("Reserve a hairstylist/makeup artist",{"category":"wardrobe", "dueDate":fourMonths, "taskNotes":"Suggested to be done 4 months before the wedding date", "checklist":true});
    this.storage.set("Book rehearsal dinner",{"category":"other", "dueDate":fourMonths, "taskNotes":"Suggested to be done 4 months before the wedding date", "checklist":true});

    this.storage.set("Find caterer",{"category":"catering", "dueDate":twoMonths, "taskNotes":"Suggested to be done 2 months before the wedding date", "checklist":true});
    this.storage.set("Schedule rehearsal",{"category":"other", "dueDate":twoMonths, "taskNotes":"Suggested to be done 2 months before the wedding date", "checklist":true});
    this.storage.set("Mail invitations",{"category":"invitations", "dueDate":twoMonths, "taskNotes":"Suggested to be done 2 months before the wedding date", "checklist":true});
    this.storage.set("Start writing thank you notes",{"category":"other", "dueDate":twoMonths, "taskNotes":"Suggested to be done 2 months before the wedding date", "checklist":true});

    this.storage.set("Get a marriage license",{"category":"other", "dueDate":oneMonth, "taskNotes":"Suggested to be done 1 month before the wedding date", "checklist":true});
    this.storage.set("Prepare any marriage related documents",{"category":"other", "dueDate":oneMonth, "taskNotes":"Suggested to be done 1 month before the wedding date", "checklist":true});
    this.storage.set("Dress fitting",{"category":"wardrobe", "dueDate":oneMonth, "taskNotes":"Suggested to be done 1 month before the wedding date", "checklist":true});
    this.storage.set("Prepare seating plan",{"category":"invites", "dueDate":oneMonth, "taskNotes":"Suggested to be done 1 month before the wedding date", "checklist":true});
    this.storage.set("Prepare toasts and finalize speeches",{"category":"other", "dueDate":oneMonth, "taskNotes":"Suggested to be done 1 month before the wedding date", "checklist":true});
    this.storage.set("Confirm plans with vendors",{"category":"other", "dueDate":oneMonth, "taskNotes":"Suggested to be done 1 month before the wedding date", "checklist":true});

    this.storage.set("Double check for all items",{"category":"other", "dueDate":oneWeek, "taskNotes":"Suggested to be done 1 week before the wedding date", "checklist":true});
    this.storage.set("Rehearsal ceremony",{"category":"other", "dueDate":oneWeek, "taskNotes":"Suggested to be done 1 week before the wedding date", "checklist":true});
    this.storage.set("Practice speeches",{"category":"other", "dueDate":oneWeek, "taskNotes":"Suggested to be done 1 week before the wedding date", "checklist":true});
    this.storage.set("Prepare payment for vendors",{"category":"other", "dueDate":oneWeek, "taskNotes":"Suggested to be done 1 week before the wedding date", "checklist":true});

  }
}
