import { Component, ViewChild,ChangeDetectorRef } from '@angular/core';
import { Nav, Platform,Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MinhaplaylistPage } from '../pages/minhaplaylist/minhaplaylist';
import { EmqualqerdiaPage } from '../pages/emqualqerdia/emqualqerdia';

import { RestApiProvider } from './../providers/rest-api/rest-api';
import { GlobalvarProvider } from './../providers/globalvar/globalvar';

import { AudioProvider,ITrackConstraint} from 'ionic-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  //rootPage: any = MinhaplaylistPage;
  rootPage: any = EmqualqerdiaPage;

  pages: Array<{title: string, component: any}>;
  playerItems:any = [];
  usuarioIde:string= '1';
  listaMenu:any = [];

  myTracks: ITrackConstraint[];
  playlist: ITrackConstraint[] = [];

  currentIndex: number = -1;
  currentTrack: ITrackConstraint;

  imgPadrao:boolean = true;


  constructor(
                public _cdRef: ChangeDetectorRef,
                public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private restApiProvider: RestApiProvider,
                public gvProvider: GlobalvarProvider,
                public playEvents: Events,
                public _audioProvider: AudioProvider)
    {
        this.initializeApp();

        console.log('platform.width:'+platform.width());
        gvProvider.gvMaxWidth = platform.width()<300?platform.width()-(platform.width()*0.25):300;
        console.log('gvProvider.gvMaxWidth:'+gvProvider.gvMaxWidth);

        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'List', component: ListPage },
          { title: 'MinhaPlayList', component: MinhaplaylistPage },
          { title: 'EmqualqerdiaPage', component: EmqualqerdiaPage }
        ];

        this.playEvents.subscribe('play-preview', () =>{
            this.playPreview(this.gvProvider.singleTrack);
          });



      }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //console.log("Passou aqui1");
      this.ObtemMenu();
      //this.getAll();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openRootPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    //this.nav.setRoot(this.pages[0].component)
  }

  ObtemMenu() {
    console.log(this.usuarioIde);
    this.gvProvider.gvListaMenu = [];
    this.restApiProvider.ObterMenu(this.usuarioIde)

      .then((result: any) => {
        //this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

        console.log(this.usuarioIde);
        //console.log("Entrou no ObtemMenu()");
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

  ExecutaConsulta(itemMenu) {

    //console.log('Executa Consulta'+JSON.stringify(itemMenu));

    if(itemMenu.Ordem==5){
      //console.log('Executa Consulta:EmqualqerdiaPage');
      this.nav.setRoot(EmqualqerdiaPage);
    }

  }


         // add(track: ITrackConstraint) {
         //   this.playlist.push(track);
         // }

         play(track: ITrackConstraint, index: number) {
             this.currentTrack = track;
             this.currentIndex = index;
             this.imgPadrao = false;
         }

         playPreview(track: ITrackConstraint) {
             this.currentTrack = track;
             this.currentIndex = -1;
             this.imgPadrao = false;
         }

         next() {
           // if there is a next track on the list play it
           if (this.gvProvider.gvPlayListItens.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.gvProvider.gvPlayListItens.length - 1) {
             let i = this.currentIndex + 1;
             let track = this.gvProvider.gvPlayListItens[i].track;
             this.play(track, i);
             this._cdRef.detectChanges();  // needed to ensure UI update
           } else if (this.currentIndex == -1 && this.gvProvider.gvPlayListItens.length > 0) {
             // if no track is playing then start with the first track on the list
             this.play(this.gvProvider.gvPlayListItens[0].track, 0);
           }
           this.imgPadrao = false;
         }

         onTrackFinished(track: any) {
           this.imgPadrao = true;
           this.next();
         }

         clear() {
           this.gvProvider.gvPlayListItens = [];
         }


}
