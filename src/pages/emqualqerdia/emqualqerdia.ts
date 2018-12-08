import { Component,ChangeDetectorRef} from '@angular/core';
// import { Component,ChangeDetectorRef,ElementRef, Renderer} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

import { ITrackConstraint} from 'ionic-audio';

@IonicPage()
@Component({
  selector: 'page-emqualqerdia',
  templateUrl: 'emqualqerdia.html',
})
export class EmqualqerdiaPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  // @ViewChild('divArea') divAreaRef: ElementRef;
  // @ViewChild('myEx') myExRef: ElementRef;

  lcCalendarIcon = 'calendar';
  lcDia:any = new Date();
  imgPlay:string = "Storage/capa/play-button-icon-png-280x280.png";
  str:any = "";
  isClear: boolean = true;

  imageProvider:any = "";

  //itemExpandHeight: number = 500;

  shownGroup = null;

  // constructor(private _cdRef: ChangeDetectorRef,private backgroundMode:BackgroundMode, public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private restApiProvider: RestApiProvider, public gvProvider: GlobalvarProvider) {
  constructor(
    private _cdRef: ChangeDetectorRef,
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private restApiProvider: RestApiProvider,
    public gvProvider: GlobalvarProvider,
    // public renderer: Renderer,
    public playEventGatilho: Events,
    public expandHeightGatilho: Events)
    {

      this.imageProvider = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage ;
      //console.log(this.imageProvider);
      this.imgPlay = this.gvProvider.gvStorage+'getimagepng.php?w='+ (this.gvProvider.gvMaxWidth/2) +'&filename='+this.gvProvider.gvStorage+'Storage/capa/play-button-icon-png-280x280.png';
      //console.log(this.imgPlay);


    }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EmqualqerdiaPage');

    this.gvProvider.gvPaginaAtual = 1;
    this.gvProvider.gvItensPorPagina = 10;
    this.gvProvider.gvColetaneas.ListaDeObjetos = [];

    this.infiniteScroll.enable(true);
    //console.log('chamou carregaColetaneas');
    //this.carregaColetaneasPrivadas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
    this.carregaColetaneas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
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
            //console.log(itemColetaneaPrivada.Artes);
          }

            //console.log(this.str);


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
      //console.log('click image button');
    }

    addTocaColetanea(item){
      //console.log('click image addTocaColetanea');
      for (var i = 0; i < this.gvProvider.gvColetaneas.ListaDeObjetos[item].Obras.length; i++) {
        var obra:any = this.gvProvider.gvColetaneas.ListaDeObjetos[item].Obras[i];
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
      if(this.gvProvider.gvColetaneas.ListaDeObjetos[item].Obras.length==1){
        this.toast.create({ message: '1 item foi adicionado! ', position: 'botton', duration: 3000 }).present();
      }else{
        this.toast.create({ message: this.gvProvider.gvColetaneas.ListaDeObjetos[item].Obras.length + ' foram adicionados! ', position: 'botton', duration: 3000 }).present();
      }
    }

    addToPlayList(itemColetanea,itemObra){
      //console.log('click image addToPlayList');
      var obra:any = this.gvProvider.gvColetaneas.ListaDeObjetos[itemColetanea].Obras[itemObra];
      //console.log('arq: ' + obra.Arquivo.substring(8, obra.Arquivo.length));
      //console.log('arte: ' + this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + obra.Artes);
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
      this.toast.create({ message: '' + obra.Nome + ' foi adicionado! ', position: 'botton', duration: 3000 }).present();
    }

    addTocaPreview(itemColetanea,itemObra){
       //console.log('click image addTocaPreview');
       var obra:any = this.gvProvider.gvColetaneas.ListaDeObjetos[itemColetanea].Obras[itemObra];

       this.gvProvider.singleTrack = {
           src: this.gvProvider.gvStorage + 'Preview/' + obra.Arquivo.substring(8, obra.Arquivo.length),
           artist: obra.Autores,
           title: obra.Nome,
           art: this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + obra.Artes,
           preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
         };

       this.playEventGatilho.publish('play-preview');
       this.toast.create({ message: 'Reproduzindo a prévia de :' + obra.Nome , position: 'botton', duration: 3000 }).present();
    }

    melog(val){
      //console.log(val);
    }

    // expandItem(item){
    //
    //    this.adjust();
    //     this.gvProvider.gvColetaneas.ListaDeObjetos.map((listItem) => {
    //         if(item == listItem){
    //             //console.log(listItem);
    //             this.expandHeightGatilho.publish('setExpandHeight');
    //             listItem.expanded = !listItem.expanded;
    //         } else {
    //             this.expandHeightGatilho.publish('setExpandHeight');
    //             listItem.expanded = false;
    //         }
    //         return listItem;
    //
    //     });
    //
    // }
    //
    // adjust() {
    //
    //   const ta = this.divAreaRef.nativeElement;
    //   const ta2 = this.myExRef;//.nativeElement;
    //
    //   ta2.expandHeight = ta.offsetHeight;
    //   this.itemExpandHeight = ta.offsetHeight;
    //
    // }


    toggleGroup(group) {
      if (this.isGroupShown(group)) {
        this.shownGroup = null;
      } else {
        this.shownGroup = group;
      }
    };
    isGroupShown(group) {
      return this.shownGroup === group;
    };

}
