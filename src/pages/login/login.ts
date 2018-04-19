import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import CryptoJS from 'crypto-js';
import {ServicesInvokeProvider} from '../../providers/services-invoke/services-invoke';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { TabPage } from '../tab/tab';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  urlService="https://reqres.in/api/login";
  access={
    username:"",
    password:""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public services:ServicesInvokeProvider, public sharePreferences:Storage, public loading:LoadingController) {

  }
 
  loginUser(loginForm){
    let loader = this.loading.create({
      content: 'Accediendo...',
    });
    let hashPassword = CryptoJS.AES.encrypt(loginForm.value.password,"da453f84dff7ce13cd698daf8c02f74754cfb54c4aa89948ee43370840c59a39").toString();
    loader.present().then(() => {
    this.services.getLoginData(this.urlService,loginForm.value.username,hashPassword)
    .then(data=>{
      console.log(data);
      this.sharePreferences.set("Token",data)
      .then(
        () => {
          console.log('Stored item!');
          this.navCtrl.push(TabPage)
          .then(()=>{
            loader.dismiss();
            let index = 0;
            this.navCtrl.remove(index);})}
      );
    })
    .catch(err=>{
        console.log(err);
    });
  });
  }


 hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}


}
