import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MeuTimePage } from "../pages/meu-time/meu-time";
import { MinhasLigasPage } from "../pages/minhas-ligas/minhas-ligas";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MeuTimePage;

  pages = [
   {page: MeuTimePage, text: 'Meu Time'},
   {page: MinhasLigasPage, text: 'Minhas Ligas'}
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    this.rootPage = page.page;
  }
}
