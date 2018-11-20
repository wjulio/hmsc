import { Component,ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

// import { BackgroundMode } from '@ionic-native/background-mode';
import { ITrackConstraint} from 'ionic-audio';

@IonicPage()
@Component({
  selector: 'page-emqualqerdia',
  templateUrl: 'emqualqerdia.html',
})
export class EmqualqerdiaPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;


  lcCalendarIcon = 'calendar';
  lcDia:any = new Date();
  imgPlay:string = "Storage/capa/play-button-icon-png-280x280.png";
  str:any = "";
  isClear: boolean = true;

  imageProvider:any = "";

  // constructor(private _cdRef: ChangeDetectorRef,private backgroundMode:BackgroundMode, public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private restApiProvider: RestApiProvider, public gvProvider: GlobalvarProvider) {
  constructor(
    private _cdRef: ChangeDetectorRef,
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private restApiProvider: RestApiProvider,
    public gvProvider: GlobalvarProvider,
    public playEventGatilho: Events)
    {

      this.imageProvider = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage ;
      console.log(this.imageProvider);
      this.imgPlay = 'http://179.218.153.242:81/getimagepng.php?w='+ (this.gvProvider.gvMaxWidth/2) +'&filename=http://179.218.153.242:81/Storage/capa/play-button-icon-png-280x280.png';
      console.log(this.imgPlay);


    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmqualqerdiaPage');

    this.gvProvider.gvPaginaAtual = 1;
    this.gvProvider.gvItensPorPagina = 10;
    this.gvProvider.gvColetaneas.ListaDeObjetos = [];

    this.infiniteScroll.enable(true);
    //console.log('chamou carregaColetaneas');
    //this.carregaColetaneasPrivadas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
    this.carregaColetaneas(1,10);
  }


    carregaColetaneas(PaginaAtual: number,ItensPorPagina: number) {
      this.restApiProvider.ObterColetaneas('ObterColetaneasTodasPaginadaComTag','', '', '1', ''+PaginaAtual, ''+ItensPorPagina)
        .then((result: any) => {
          //console.log('carregaColetaneas emqualquuerdia tem resposta');
          for (var i = 0; i < result.ListaDeObjetos.length; i++) {
            var itemColetaneaPrivada = result.ListaDeObjetos[i];
            //"{{gvProvider.gvHostImageResize}}{{gvProvider.gvMaxWidth}}{{gvProvider.gvParamImgFile}}{{gvProvider.gvStorage}}{{item.Artes}}"
            itemColetaneaPrivada.Artes = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + itemColetaneaPrivada.Artes;
            this.str = itemColetaneaPrivada.Artes;
            this.gvProvider.gvColetaneas.ListaDeObjetos.push(itemColetaneaPrivada);
            console.log(itemColetaneaPrivada.Artes);
          }

            console.log(this.str);


          if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (this.gvProvider.gvColetaneas.ListaDeObjetos.length == result.TotalDeRegistros) {
              this.infiniteScroll.enable(false);
            }
          }

        })
        .catch((error: any) => {
          //console.log('Erro na chamada de: carregaColetaneas emqualquuerdia');
          this.toast.create({ message: 'Erro ao carregar emqualquuerdia ', position: 'botton', duration: 3000 }).present();
        });
    }

    pegaMaisItens() {
      setTimeout(() => {
        this.gvProvider.gvPaginaAtual += 1;
        this.carregaColetaneas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
      }, 500);
    }

    click(){
      console.log('click image button');
    }

    addTocaColetanea(item){
      console.log('click image addTocaColetanea')
    }

    addToPlayList(itemColetanea,itemObra){
      console.log('click image addToPlayList');
      var obra:any = this.gvProvider.gvColetaneas.ListaDeObjetos[itemColetanea].Obras[itemObra];
      console.log('arq: ' + obra.Arquivo.substring(8, obra.Arquivo.length));
      console.log('arte: ' + this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + obra.Artes);
      this.gvProvider.gvPlayListItens.push({
        IdeObra: obra.IdeObra,
        Nome: obra.Nome,
        Autores: obra.Autores,
        Artes: this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + obra.Artes,
        Duracao: obra.Duracao,
        ArquivoPreview: this.gvProvider.gvStorage + 'Preview/' + obra.Arquivo.substring(8, obra.Arquivo.length),
        ArquivoStorage: this.gvProvider.gvStorage + obra.Arquivo,
        DtCriacao: obra.DtCriacao,
        ehPreview:true,
        track:{
          src: this.gvProvider.gvStorage + obra.Arquivo,
          artist: obra.Autores,
          title: obra.Nome,
          art: this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + obra.Artes,
          preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
        }
      });
    }

    addTocaPreview(itemColetanea,itemObra){
       console.log('click image addTocaPreview');
       var obra:any = this.gvProvider.gvColetaneas.ListaDeObjetos[itemColetanea].Obras[itemObra];

       this.gvProvider.singleTrack = {
           src: this.gvProvider.gvStorage + 'Preview/' + obra.Arquivo.substring(8, obra.Arquivo.length),
           artist: obra.Autores,
           title: obra.Nome,
           art: this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + obra.Artes,
           preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
         };

       this.playEventGatilho.publish('play-preview');
    }




}
