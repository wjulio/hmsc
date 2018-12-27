import { Component, ViewChild,ChangeDetectorRef } from '@angular/core';
import { Nav, Platform,Events,ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MinhaplaylistPage } from '../pages/minhaplaylist/minhaplaylist';
import { EmqualqerdiaPage } from '../pages/emqualqerdia/emqualqerdia';

import { RestApiProvider } from './../providers/rest-api/rest-api';
import { GlobalvarProvider } from './../providers/globalvar/globalvar';

import { AudioProvider,ITrackConstraint} from 'ionic-audio';
import { Storage } from '@ionic/storage';

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
  flgOrdenar:boolean = false;
  flgRemover:boolean = false;


  constructor(
                public _cdRef: ChangeDetectorRef,
                public platform: Platform,
                private toast: ToastController,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private restApiProvider: RestApiProvider,
                public gvProvider: GlobalvarProvider,
                public playEvents: Events,
                public _audioProvider: AudioProvider,
                public storage: Storage)
    {
        this.initializeApp();

        console.log('platform.width:'+platform.width());
        gvProvider.gvMaxWidth = platform.width()<300?platform.width()-(platform.width()*0.25):300;
        //console.log('gvProvider.gvMaxWidth:'+gvProvider.gvMaxWidth);

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

      //this.ObtemMenu();
      this.ConfiguraEnderecoServidor();

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
        //this.toast.create({ message: 'Menu ok.', position: 'botton', duration: 3000 }).present();

        //console.log(this.usuarioIde);
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
          console.log('Erro ao obter o menu esquerdo' + error.erro);
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
             this.gvProvider.gvPlayListUltimoIndexTocado = this.gvProvider.gvPlayListIndexSelecionado;
             this.gvProvider.gvPlayListIndexSelecionado = index;
             if(this.gvProvider.gvPlayListUltimoIndexTocado > 0){
               this.gvProvider.gvPlayListItens[this.gvProvider.gvPlayListUltimoIndexTocado].Selecionado = false;
             }else{
               this.gvProvider.gvPlayListItens[0].Selecionado = false;
             }
             this.gvProvider.gvPlayListItens[index].Selecionado = true;

             this.imgPadrao = false;
         }

         playPreview(track: ITrackConstraint) {
             this.currentTrack = track;
             this.currentIndex = -1;
             this.imgPadrao = false;
             this.gvProvider.gvPlayListUltimoIndexTocado = this.gvProvider.gvPlayListIndexSelecionado;
         }

         next() {
           // if there is a next track on the list play it
           if (this.gvProvider.gvPlayListItens.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.gvProvider.gvPlayListItens.length - 1) {
             let i = this.currentIndex + 1;
             let track = this.gvProvider.gvPlayListItens[i].track;
             this.gvProvider.gvPlayListUltimoIndexTocado = this.gvProvider.gvPlayListIndexSelecionado;
             this.gvProvider.gvPlayListIndexSelecionado = i;
             if(this.gvProvider.gvPlayListUltimoIndexTocado > 0){
               this.gvProvider.gvPlayListItens[this.gvProvider.gvPlayListUltimoIndexTocado].Selecionado = false;
             }else{
               this.gvProvider.gvPlayListItens[0].Selecionado = false;
             }
             this.gvProvider.gvPlayListItens[i].Selecionado = true;
             //this.currentTrack.stop();
             this.play(track, i);
             this._cdRef.detectChanges();  // needed to ensure UI update
           } else if (this.currentIndex == -1 && this.gvProvider.gvPlayListItens.length > 0) {
             // if no track is playing then start with the first track on the list
             this.play(this.gvProvider.gvPlayListItens[0].track, 0);
             this.gvProvider.gvPlayListIndexSelecionado = 0;
             if(this.gvProvider.gvPlayListUltimoIndexTocado > 0){
               this.gvProvider.gvPlayListItens[this.gvProvider.gvPlayListUltimoIndexTocado].Selecionado = false;
             }else{
               this.gvProvider.gvPlayListItens[0].Selecionado = false;
             }
             this.gvProvider.gvPlayListItens[0].Selecionado = true;
           }
           this.imgPadrao = false;
         }

         onTrackFinished(track: any) {
           this.imgPadrao = true;
           this.next();
         }

         clear() {
           this.gvProvider.gvPlayListItens = [];
           this.flgRemover = false;
           this.flgOrdenar = false;
         }

         SalvaPlayList(){}

         Desabilitado(origem){
           if(this.gvProvider.gvPlayListItens.length > 0) {
             //return  this.OrdenarOuRemover;
             //console.log(origem);

             if(!this.flgOrdenar && !this.flgRemover){
               return false;
              }

             if(this.flgOrdenar){
               switch (origem) {
                case 'ordenar':
                    return false;
                case 'salvar':
                    return true;
                case 'down':
                    return true;
                case 'remover':
                    return true;
                default: return false;
              }
             }

             if(this.flgRemover){
               switch (origem) {
                case 'ordenar':
                    return true;
                case 'salvar':
                    return true;
                case 'down':
                    return true;
                case 'remover':
                    return false;
                default: return false;
              }
             }

           }
           return true;
         }

         // Vazio(){
         //   if(this.gvProvider.gvPlayListItens.length > 0) {
         //     return false;
         //   }
         //   return true;
         // }

         HabilitaOrdenar(){
           this.flgOrdenar = !this.flgOrdenar;
           this.flgRemover = false;
         }

         HabilitaRemover(){
           this.flgRemover = !this.flgRemover;
           this.flgOrdenar = false;
         }

         DownloadLista(){
           this.toast.create({ message:this.gvProvider.gvPlayListItens.length + ' itens serão marcados para download', position: 'botton', duration: 3000 }).present();
         }

         SalvaLista(){
           this.toast.create({ message: ' será criada', position: 'botton', duration: 3000 }).present();
         }

         selectCP(index){

          if(this.flgRemover){
            return;
          }

           this.gvProvider.gvPlayListUltimoIndexTocado = this.gvProvider.gvPlayListIndexSelecionado;
           this.gvProvider.gvPlayListIndexSelecionado = index;
           this.currentTrack = this.gvProvider.gvPlayListItens[index].track;;
           this.currentIndex = index;
           if(this.gvProvider.gvPlayListUltimoIndexTocado > 0){
             this.gvProvider.gvPlayListItens[this.gvProvider.gvPlayListUltimoIndexTocado].Selecionado = false;
           }else{
             this.gvProvider.gvPlayListItens[0].Selecionado = false;
           }
           this.gvProvider.gvPlayListItens[index].Selecionado = true;
         }

         // DesfazSelect(){
         //   if(this.gvProvider.gvPlayListUltimoIndexTocado > 0){
         //     this.gvProvider.gvPlayListItens[this.gvProvider.gvPlayListUltimoIndexTocado].Selecionado = false;
         //   }else{
         //     this.gvProvider.gvPlayListItens[0].Selecionado = false;
         //   }
         // }

         ConfiguraEnderecoServidor() {
           this.restApiProvider.Conectar(this.usuarioIde)
             .then((result: any) => {
               //this.toast.create({ message: 'Conexão ok! ', position: 'botton', duration: 3000 }).present();

               this.gvProvider.gvStorage = 'http://' + result.ServidorDeConexao + ':81/';
               this.gvProvider.gvHostImageResize = 'http://' + result.ServidorDeConexao + ':81/getimage.php?w=';
               console.log("serverSet:"+this.gvProvider.gvStorage);
               this.ObtemMenu();

             })
             .catch((error: any) => {
               this.toast.create({ message: 'Erro ao conectar.' + error.error, position: 'botton', duration: 3000 }).present();
             });
         }

        reorderItems(indexes) {
          if(this.flgOrdenar){
            let element = this.gvProvider.gvPlayListItens[indexes.from];
            let nome = this.gvProvider.gvPlayListItens[indexes.from].Nome;
            this.gvProvider.gvPlayListItens.splice(indexes.from, 1);
            this.gvProvider.gvPlayListItens.splice(indexes.to, 0, element);
            this.gvProvider.gvPlayListUltimoIndexTocado = -1;
            this.toast.create({ message: nome + ' foi reposicionado', position: 'botton', duration: 3000 }).present();
          }
        }

        // pressEvent(indexes) {
        //   if(this.OrdenarOuRemover){
        //     let index = this.indexes.indexOf(post);
        //     if(index > -1){
        //       this.indexes.splice(index, 1);
        //     }
        //     //console.log(indexes);
        //   }
        //  }

        RemoveItem(index){
          //console.log('index:'+index);
          if(this.flgRemover){
            let nome = this.gvProvider.gvPlayListItens[index].Nome;
            this.gvProvider.gvPlayListItens.splice(index, 1);
            this.gvProvider.gvPlayListUltimoIndexTocado = -1;
            this.toast.create({ message: nome + ' foi removido', position: 'botton', duration: 3000 }).present();
          }
        }
}

// export class EnderecoServidor {
//   ServidorDeConexao: string;
// }
