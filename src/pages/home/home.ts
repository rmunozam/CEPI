import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchText:string="";
  constructor(public navCtrl: NavController) {

  }


  getItems(event){
    console.log(this.searchText);
    this.navCtrl.push(SearchResultsPage,this.searchText);
  }
}
