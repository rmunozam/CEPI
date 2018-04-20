import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ElementosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elementos',
  templateUrl: 'elementos.html',
})
export class ElementosPage {
selec: string="Indv";

Lista:Array<any> = [
  {titulo: "Cabeza",id:1},
  {titulo: "Ojos",id:2},
  {titulo: "Nariz",id:3},
  {titulo: "Orejas",id:4}
];

Lista2:Array<any> = [
  {titulo: "Antebrazos",id:5},
  {titulo: "Manos",id:6}
];


Lista3:Array<any> = [
  {titulo: "Pecho",id:7},
  {titulo: "Cintura",id:8}
];

Lista4:Array<any> = [
  {titulo: "Piernas",id:9},
  {titulo: "Pie",id:10}
];

Lista5:Array<any> = [
  {titulo: "Trabajos y maniobras eléctricas",id:11},
  {titulo: "Materiales diversos",id:12},
  {titulo: "Herramientas",id:13},
  {titulo: "Higiene Industrial",id:14},
  {titulo: "Señalización",id:15},
  {titulo: "Socorrismo y los auxilios",id:16},
  {titulo: "Protección contra incendios",id:17},
]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElementosPage');
  }

}
