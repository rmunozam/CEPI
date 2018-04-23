import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesInvokeProvider } from '../../providers/services-invoke/services-invoke';

/**
 * Generated class for the NovedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html',
})



export class NovedadesPage {
  listaNovedades
  constructor(public navCtrl: NavController, public navParams: NavParams, public services:ServicesInvokeProvider) {
  this.services.getNovedades()
    .then(data=>{
        console.log(data);
        this.listaNovedades = data;
    })
    .catch(err=>{
        console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovedadesPage');
  }
 goToPage(url){
   window.location.href=url;
 }
}
