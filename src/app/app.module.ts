import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicesInvokeProvider } from '../providers/services-invoke/services-invoke';
import {LoginPage} from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { ElementosPage } from '../pages/elementos/elementos';
import { NovedadesPage } from '../pages/novedades/novedades';
import { PerfilPage } from '../pages/perfil/perfil';
import {TabPage} from '../pages/tab/tab';
import { SearchResultsPage } from '../pages/search-results/search-results';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ElementosPage,
    NovedadesPage,
    PerfilPage,
    TabPage,
    SearchResultsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ElementosPage,
    NovedadesPage,
    PerfilPage,
    TabPage,
    SearchResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesInvokeProvider,
  ]
})
export class AppModule {}
