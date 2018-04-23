import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchElementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-element',
  templateUrl: 'search-element.html',
})
export class SearchElementPage {
  PageTitle:string;
  NumberOfResults:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.PageTitle="Esto es un tochaco de ejemplo para ver";
    this.NumberOfResults="21";
  }

  

}
