import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NavController} from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import {TabPage} from '../pages/tab/tab'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage:Storage){
    this.storage.get("Token")
    .then((token) => {
      if (token!=null) {
        this.rootPage = TabPage;
      } else {
        this.rootPage = LoginPage;
      }
      this.platformReady()
    });
  }

  platformReady() {
    // Call any initial plugins when ready
   this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    });
}
}

