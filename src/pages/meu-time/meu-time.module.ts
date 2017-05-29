import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeuTimePage } from './meu-time';

@NgModule({
  declarations: [
    MeuTimePage,
  ],
  imports: [
    IonicPageModule.forChild(MeuTimePage),
  ],
  exports: [
    MeuTimePage
  ]
})
export class MeuTimePageModule {}
