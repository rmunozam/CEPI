import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementosPage } from './elementos';

@NgModule({
  declarations: [
    ElementosPage,
  ],
  imports: [
    IonicPageModule.forChild(ElementosPage),
  ],
})
export class ElementosPageModule {}
