import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { RestApiProvider } from './../providers/rest-api/rest-api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  playerItems:any = [];
  usuarioIde:string= '1';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private restApiProvider: RestApiProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

    this.playerItems = [
        {title: 'item1'},
        {title: 'item2'},
        {title: 'item3'},
        {title: 'item4'},
        {title: 'item5'},
        {title: 'item6'},
        {title: 'item7'},
        {title: 'item8'},
        {title: 'item9'},
        {title: 'item10'}
    ];

    //this.ObtemMenu();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("Passou aqui1");
      this.ObtemMenu();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openRootPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ObtemMenu() {

    this.restApiProvider.ObterMenu(this.usuarioIde)
      .then((result: any) => {
        //this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

  console.log("Passou ObtemMenu()");

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
          console.log("Passou erroo ObtemMenu()");
        //this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

}
