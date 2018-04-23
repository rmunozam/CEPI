import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchElementPage } from './search-element';

@NgModule({
  declarations: [
    SearchElementPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchElementPage),
  ],
})
export class SearchElementPageModule {}
