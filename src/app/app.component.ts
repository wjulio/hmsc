import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MinhaplaylistPage } from '../pages/minhaplaylist/minhaplaylist';

import { RestApiProvider } from './../providers/rest-api/rest-api';
import { GlobalvarProvider } from './../providers/globalvar/globalvar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = MinhaplaylistPage;

  pages: Array<{title: string, component: any}>;
  playerItems:any = [];
  usuarioIde:string= '1';
  listaMenu:any = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private restApiProvider: RestApiProvider, public gvProvider: GlobalvarProvider) {
    this.initializeApp();

    console.log('platform.width:'+platform.width());
    gvProvider.gvMaxWidth = platform.width()<300?platform.width()-(platform.width()*0.25):300;
    console.log('gvProvider.gvMaxWidth:'+gvProvider.gvMaxWidth);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'MinhaPlayList', component: MinhaplaylistPage }
    ];

    this.playerItems = [
        {title: 'item1'},
        {title: 'item2'},
        {title: 'item3'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("Passou aqui1");
      //this.ObtemMenu();
      //this.getAll();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openRootPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.setRoot(this.pages[0].component)
  }

  ObtemMenu() {
    console.log(this.usuarioIde);
    this.gvProvider.gvListaMenu = [];
    this.restApiProvider.ObterMenu(this.usuarioIde)

      .then((result: any) => {
        //this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

        console.log(this.usuarioIde);
        console.log("Entrou no ObtemMenu()");
        console.log(result.length);
        for (var i = 0; i < result.length; i++) {
          console.log(result[i].TipoMenuAppJsonDto);
          //var _listaDeObjetos = result.ListaDeObjetos[i];
          //this.listaMenu.push(result[i]);
          this.gvProvider.gvListaMenu.push(result[i]);
            //this.sendSMS(interessado.numero,interessado.chave);
        }
        console.log(this.listaMenu.length);
        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
          console.log('Erro : ObtemMenu()' + error.erro);
        //this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  onEmpSelected(_lsMarcadores:any) {

    console.log(_lsMarcadores);
    //this.nav.setRoot(this.pages[1].component);

  }

  ExecutaConsulta() {

    console.log('Executa Consulta');

  }


}
