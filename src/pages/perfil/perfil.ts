import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { App  } from 'ionic-angular';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  Notificaciones:boolean;
  TextNotificaciones:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public sharePreferences:Storage,public app:App) {
    this.sharePreferences.get("Notifications")
    .then((value)=>{
      console.log(value);
        if(value){
          this.TextNotificaciones="Desactivar notificaciones";
          this.Notificaciones=true;
        }else{
          this.Notificaciones=false;
          this.TextNotificaciones="Activar notificaciones";
        }
      
    })

    
    
  }


  CloseSesion(){
    this.sharePreferences.remove("Token")
    .then(()=>{
      this.app.getRootNav().setRoot( LoginPage );
    });
    
  }

  UpdateNotification(){
    if(this.Notificaciones){
      this.sharePreferences.set("Notifications",true);
      this.TextNotificaciones="Desactivar notificaciones";
    }else{
      this.sharePreferences.set("Notifications",false);
      this.TextNotificaciones="Activar notificaciones";
    }
  }
}
