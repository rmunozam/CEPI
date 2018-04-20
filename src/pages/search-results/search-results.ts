import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesInvokeProvider} from '../../providers/services-invoke/services-invoke';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  urlService="http://api.openweathermap.org/data/2.5/weather";
  searchText:string="";
  listItemResult;
  constructor(public navCtrl: NavController, public navParams: NavParams,public services:ServicesInvokeProvider,public loading:LoadingController) {
    this.searchText=this.navParams.data;
    this.search();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

  getItems(event){
    this.search();
  }

  search(){
    console.log("Searching...");
    let loader = this.loading.create({
      content: 'Buscando...',
    });
    loader.present().then(() => {
      this.services.getBySearch(this.urlService,this.searchText)
      .then(data=>{
        console.log(data);
        this.listItemResult=data;
        loader.dismiss();
      })
      .catch(err=>{
          console.log(err);
      });
    });
}
}
