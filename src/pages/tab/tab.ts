import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import { ElementosPage } from '../elementos/elementos';
import { NovedadesPage } from '../novedades/novedades';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tab.html'
})
export class TabPage {

  tab1Root = HomePage;
  tab2Root = ElementosPage;
  tab3Root = NovedadesPage;
  tab4Root = PerfilPage;
  constructor() {

  }
}
