import { Component,ChangeDetectorRef } from '@angular/core';
// import { Component,ChangeDetectorRef,ElementRef, Renderer} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll, Events,LoadingController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

//import { ITrackConstraint} from 'ionic-audio';

@IonicPage()
@Component({
  selector: 'page-minhaplaylist',
  templateUrl: 'minhaplaylist.html',
})
export class MinhaplaylistPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  @ViewChild('search') myInput;
  // @ViewChild('divArea') divAreaRef: ElementRef;
  // @ViewChild('myEx') myExRef: ElementRef;

  lcCalendarIcon = 'calendar';
  lcDia:any = new Date();
  imgPlay:string = "Storage/capa/play-button-icon-png-280x280.png";
  str:any = "";
  isClear: boolean = true;
  //Buscar:string = '';

  imageProvider:any = "";

  //itemExpandHeight: number = 500;

  shownGroup = null;
  loader:any;
  constructor(
    //private _cdRef: ChangeDetectorRef,
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private restApiProvider: RestApiProvider,
    public gvProvider: GlobalvarProvider,
    // public renderer: Renderer,
    public playEventGatilho: Events,
    public expandHeightGatilho: Events,
    public loadingController: LoadingController)
    {

      // this.imageProvider = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage ;
      // //console.log(this.imageProvider);
      // this.imgPlay = this.gvProvider.gvStorage+'getimagepng.php?w='+ (this.gvProvider.gvMaxWidth/2) +'&filename='+this.gvProvider.gvStorage+'Storage/capa/play-button-icon-png-280x280.png';
      // //console.log(this.imgPlay);


    }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EmqualqerdiaPage');

     this.loader = this.loadingController.create({content: "Carregando...."});

    this.loader.present();

    this.gvProvider.gvPaginaAtual = 1;
    this.gvProvider.gvItensPorPagina = 10;
    this.gvProvider.gvColetaneas.ListaDeObjetos = [];

    if(this.gvProvider.gvBuscar.length>=3){
      setTimeout(() => {
        this.myInput.setFocus();
      },150);
    }



    this.infiniteScroll.enable(true);
    //console.log('chamou carregaColetaneas');
    //this.carregaColetaneasPrivadas(this.gvProvider.gvBuscar,this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
    //this.carregaColetaneas(this.gvProvider.gvBuscar,this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);


  }

  carregaColetaneasPrivadas(Busca:string, PaginaAtual: number,ItensPorPagina: number) {
    this.restApiProvider.ObterColetaneasPrivadas(Busca, '', ''+this.gvProvider.gvIdMembroLogin, ''+PaginaAtual, ''+ItensPorPagina)
      .then((result: any) => {
        console.log('carregaColetaneasPrivadas tem resposta');
        for (var i = 0; i < result.ListaDeObjetos.length; i++) {
          var itemColetaneaPrivada = result.ListaDeObjetos[i];
          //"{{gvProvider.gvHostImageResize}}{{gvProvider.gvMaxWidth}}{{gvProvider.gvParamImgFile}}{{gvProvider.gvStorage}}{{item.Artes}}"
          itemColetaneaPrivada.Artes = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + itemColetaneaPrivada.Artes;
          this.str = itemColetaneaPrivada.Artes;
          // this.gvProvider.gvMinhaLista.ListaDeObjetos.push(itemColetaneaPrivada);
        }

          console.log(this.str);
          this.loader.dismiss();


        // if (this.infiniteScroll) {
        //   this.infiniteScroll.complete();
        //   if (this.gvProvider.gvMinhaLista.ListaDeObjetos.length == result.TotalDeRegistros) {
        //     this.infiniteScroll.enable(false);
        //   }
        // }

      })
      .catch((error: any) => {
        console.log('Erro na chamada de: carregaColetaneasPrivadas');
        this.loader.dismiss();
        this.toast.create({ message: 'Erro ao carregar minha lista ', position: 'botton', duration: 3000 }).present();
      });
  }

  pegaMaisItens() {
    setTimeout(() => {
      this.gvProvider.gvPaginaAtual += 1;
      //this.carregaColetaneasPrivadas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
    }, 500);
  }

}
