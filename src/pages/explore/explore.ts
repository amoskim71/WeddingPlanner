import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as $ from 'jquery'

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  vendors: string = "explore";

  constructor(public navCtrl: NavController) {
  }

  toggleHeart(context) {
  	console.log($(context));
    // $(context).toggleClass("ion-ios-heart ion-ios-heart-outline");
    return false;
  }
}
