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
  listaNovedades;
  docs;
  listByMonth;
  constructor(public navCtrl: NavController, public navParams: NavParams, public services:ServicesInvokeProvider) {
  this.services.getNovedades()
    .then(data=>{
        console.log(data);
        this.listaNovedades = data;
        this.docs=this.listaNovedades.response.docs;
        console.log(this.docs);
        this.sortByDate();
        this.getDataCorrectly();
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

sortByDate(){
  this.docs.sort(function(a, b) {
    var dateA = new Date(a.pub_date);
    //console.log(dateA);
    var dateB = new Date(b.pub_date);
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
});
}
getDataCorrectly(){
  for(let index=0;index<this.docs.length;index++){
    let date=new Date(this.docs[index].pub_date);
    var day=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    this.docs[index].pub_date=day+"/"+month+"/"+year;
    this.listByMonth={year:{month:{Titulo:this.docs[index].main,date:this.docs[index].pub_date,url:this.docs[index].web_url}}}
    console.log(this.listByMonth);
  }
}
}
