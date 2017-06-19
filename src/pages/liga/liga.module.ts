import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LigaPage } from './liga';

@NgModule({
  declarations: [
    LigaPage,
  ],
  imports: [
    IonicPageModule.forChild(LigaPage),
  ],
  exports: [
    LigaPage
  ]
})
export class LigaPageModule {}
