import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhasLigasPage } from './minhas-ligas';

@NgModule({
  declarations: [
    MinhasLigasPage,
  ],
  imports: [
    IonicPageModule.forChild(MinhasLigasPage),
  ],
  exports: [
    MinhasLigasPage
  ]
})
export class MinhasLigasPageModule {}
