import { Component, ViewChild,ChangeDetectorRef } from '@angular/core';
import { Nav, Platform,Events,ToastController,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MinhaplaylistPage } from '../pages/minhaplaylist/minhaplaylist';
import { EmqualqerdiaPage } from '../pages/emqualqerdia/emqualqerdia';
// import { SalvarListaColetanea } from '../pages/salva-coletanea-modal/salva-coletanea-modal';

import { RestApiProvider } from './../providers/rest-api/rest-api';
import { GlobalvarProvider } from './../providers/globalvar/globalvar';

import { AudioProvider,ITrackConstraint} from 'ionic-audio';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('NomeDaLista') myNomeDaLista;

  //rootPage: any = HomePage;
  //rootPage: any = MinhaplaylistPage;
  rootPage: any = EmqualqerdiaPage;

  pages: Array<{title: string, component: any}>;
  playerItems:any = [];
  //usuarioIde:string= '1';
  listaMenu:any = [];

  myTracks: ITrackConstraint[];
  playlist: ITrackConstraint[] = [];

  currentIndex: number = -1;
  currentTrack: ITrackConstraint;

  imgPadrao:boolean = true;
  flgOrdenar:boolean = false;
  flgRemover:boolean = false;
  flgSalvar:boolean = false;
  flgMinhaLista:boolean = false;


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
                public storage: Storage,
                public alertCtrl: AlertController)
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
          console.log("Entrou no play-preview");
          if(this.gvProvider.gvEhPlayPreview){
            this.playPreview(this.gvProvider.singleTrack);
            console.log("eh preview");
          }else{
            let track = this.gvProvider.gvPlayListItens[0].track;
            this.play(track, 0);
            console.log("nao eh preview");
          }

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
    console.log(this.gvProvider.gvIdMembroLogin);
    this.gvProvider.gvListaMenu = [];
    this.restApiProvider.ObterMenu(this.gvProvider.gvIdMembroLogin.toString())

      .then((result: any) => {
        //this.toast.create({ message: 'Menu ok.', position: 'botton', duration: 3000 }).present();

        //console.log(this.gvProvider.gvIdMembroLogin);
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
      this.gvProvider.gvColetaneas.ListaDeObjetos = [];
      this.gvProvider.gvOpAtual = 'ObterColetaneasTodasPaginadaComTag';
      //console.log('Executa Consulta:EmqualqerdiaPage');
      this.nav.setRoot(EmqualqerdiaPage);
    }

    if(itemMenu.Ordem==6){
      //console.log('Executa Consulta:EmqualqerdiaPage');
      this.gvProvider.gvColetaneas.ListaDeObjetos = [];
      this.gvProvider.gvOpAtual = 'ObterColetaneasTodasPrivadasPaginadaComTag';
      //this.nav.setRoot(MinhaplaylistPage);
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
           this.gvProvider.gvPlayListColetanea =  {IdeColetanea:0,Nome:'',ehPrivada:false};
           this.flgRemover = false;
           this.flgOrdenar = false;
         }


         Desabilitado(origem){
           if(this.gvProvider.gvPlayListItens.length > 0) {
             //return  this.OrdenarOuRemover;
             //console.log(origem);

             // if(!this.flgOrdenar && !this.flgRemover){
             //   return false;
             //  }

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

             if(this.flgSalvar){
               switch (origem) {
                case 'ordenar':
                    return true;
                case 'salvar':
                    return false;
                case 'down':
                    return true;
                case 'remover':
                    return true;
                default: return false;
              }
             }

             return false;

           }

           return true;

         }

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

         CancelaSalvaLista(){
           this.flgSalvar = false;
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
           this.restApiProvider.Conectar(this.gvProvider.gvIdMembroLogin.toString())
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

        RemoveItem(index){
          //console.log('index:'+index);
          if(this.flgRemover){
            let nome = this.gvProvider.gvPlayListItens[index].Nome;
            this.gvProvider.gvPlayListItens.splice(index, 1);
            this.gvProvider.gvPlayListUltimoIndexTocado = -1;
            this.toast.create({ message: nome + ' foi removido', position: 'botton', duration: 3000 }).present();
          }
        }

        SalvaLista(){
          this.flgSalvar = !this.flgSalvar;
            this.salvarViaPrompt();
          // if(this.flgSalvar){
          //   setTimeout(() => {
          //     this.myNomeDaLista.setFocus();
          //   },150);
          // }
          //this.toast.create({ message: ' será criada', position: 'botton', duration: 3000 }).present();
        }

        SelectorDePrompt(){
          if(this.gvProvider.gvPlayListColetanea.IdeColetanea>0){
            this.salvarViaComCopiaPrompt();
          }else{
            this.salvarViaPrompt();
          }
        }

        salvarViaPrompt() {
          console.log('salvarViaPrompt');
          let prompt = this.alertCtrl.create({
            title: 'Salvar',
            message: "Entre com um nome para salvar em sua lista pessoal",
            inputs: [{name: 'nomeColetanea',placeholder: 'Título',value:this.gvProvider.gvPlayListColetanea.Nome},],
            buttons: [{text: 'Cancelar',handler: data => {
                                                            console.log('Cancel clicked');
                                                            //return false;
                                                            //this.flgSalvar = !this.flgSalvar;
                                                            this.flgSalvar = false;
                                                          }},
                      {text: 'Salvar', handler: data => {
                        console.log('Saved clicked');
                        if(data.nomeColetanea.length>=3){
                          this.gvProvider.gvPlayListColetanea.Nome = data.nomeColetanea;
                          //this.flgSalvar = !this.flgSalvar;
                          this.flgSalvar = false;
                          this.SalvarLista();
                        }
                      }}]
           });
           //prompt.data.nomeColetanea = this.gvProvider.gvPlayListColetanea.Nome;
           prompt.present();
        }

        salvarViaComCopiaPrompt() {
          console.log('salvarViaPrompt');
          let prompt = this.alertCtrl.create({
            title: 'Salvar',
            message: "Entre com um nome para salvar em sua lista pessoal",
            inputs: [{name: 'nomeColetanea',placeholder: 'Título',value:this.gvProvider.gvPlayListColetanea.Nome},],
            buttons: [{text: 'Cancelar',handler: data => {
                                                            console.log('Cancel clicked');
                                                            //return false;
                                                            //this.flgSalvar = !this.flgSalvar;
                                                            this.flgSalvar = false;
                                                          }},
                      {text: 'Salvar',handler: data => {
                        if(data.nomeColetanea.length>=3){
                          this.gvProvider.gvPlayListColetanea.Nome = data.nomeColetanea;
                          //this.flgSalvar = !this.flgSalvar;
                          this.flgSalvar = false;
                          this.SalvarLista();}
                                                          }},
                      {text: 'Salvar Novo', handler: data => {
                        console.log('Saved clicked');
                        if(data.nomeColetanea.length>=3){
                          this.gvProvider.gvPlayListColetanea.Nome = data.nomeColetanea;
                          this.gvProvider.gvPlayListColetanea.IdeColetanea = 0;
                          //this.flgSalvar = !this.flgSalvar;
                          this.flgSalvar = false;
                          this.SalvarLista();
                        }
                      }}]
           });
           //prompt.data.nomeColetanea = this.gvProvider.gvPlayListColetanea.Nome;
           prompt.present();
        }

        SalvarLista() {
          //let lsIdsObras = this.gvProvider.gvPlayListItens.toString();
          let lsIdsObras = this.gvProvider.gvPlayListItens.map(function(v){return v.IdeObra;});
          console.log(lsIdsObras);
          this.restApiProvider.SalvarColetaneaPrivada(this.gvProvider.gvIdMembroLogin, lsIdsObras, this.gvProvider.gvPlayListColetanea.IdeColetanea, this.gvProvider.gvPlayListColetanea.Nome)
            .then((result: any) => {
              this.toast.create({ message: this.gvProvider.gvPlayListColetanea.Nome + ' foi salvo. ', position: 'botton', duration: 3000 }).present();

              this.gvProvider.gvPlayListColetanea = result;

            })
            .catch((error: any) => {
              this.toast.create({ message: 'Erro ao salvar.' + error.error, position: 'botton', duration: 3000 }).present();
            });
        }
}

// export class EnderecoServidor {
//   ServidorDeConexao: string;
// }
