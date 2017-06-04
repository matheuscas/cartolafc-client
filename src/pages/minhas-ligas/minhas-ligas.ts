import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LigaPage } from "../liga/liga";

/**
 * Generated class for the MinhasLigasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-minhas-ligas',
  templateUrl: 'minhas-ligas.html',
})
export class MinhasLigasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasLigasPage');
  }

  openLeague(){
    this.navCtrl.push(LigaPage);
  }

}
