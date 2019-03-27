import { Component,ChangeDetectorRef } from '@angular/core';
// import { Component,ChangeDetectorRef,ElementRef, Renderer} from '@angular/core';
import { IonicPage, NavController,
  NavParams, ToastController, InfiniteScroll,
  Events,LoadingController,
  AlertController,ModalController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

// import { MarcadoresPage } from '../pages/marcadores/marcadores';
import { MarcadoresPage } from '../marcadores/marcadores';
// import { ModalPage } from '../modal-page/modal-page'

//import { ITrackConstraint} from 'ionic-audio';

@IonicPage()
@Component({
  selector: 'page-emqualqerdia',
  templateUrl: 'emqualqerdia.html'
})
export class EmqualqerdiaPage {
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
  flgMinhaLista:boolean = false;
  imageProvider:any = "";
  strPlaceHold:any = "Todos os Lançamentos";
  //itemExpandHeight: number = 500;
  //modalMarcadores:any = MarcadoresPage;
  shownGroup = null;
  loader:any;
  indexDosMarcadores:any=0;

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
    public expandHeightGatilho: Events,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
   )
    {

      this.imageProvider = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage ;
      //console.log(this.imageProvider);
      this.imgPlay = this.gvProvider.gvStorage+'getimagepng.php?w='+ (this.gvProvider.gvMaxWidth/2) +'&filename='+this.gvProvider.gvStorage+'Storage/capa/play-button-icon-png-280x280.png';
      //console.log(this.imgPlay);


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

    if(this.gvProvider.gvOpAtual == 'ObterColetaneasTodasPrivadasPaginadaComTag'){
      this.flgMinhaLista = true;
      this.strPlaceHold = "Minha Lista";
    }

    if(this.gvProvider.gvOpAtual == 'ObterColetaneasHojePaginadaComTag'){
      this.flgMinhaLista = false;
      this.strPlaceHold = "Lançados Hoje";
    }

    if(this.gvProvider.gvOpAtual == 'ObterColetaneas7DiasPaginadaComTag'){
      this.flgMinhaLista = false;
      this.strPlaceHold = "Em 7 Dias";
    }

    if(this.gvProvider.gvOpAtual == 'ObterColetaneas30DiasPaginadaComTag'){
      this.flgMinhaLista = false;
      this.strPlaceHold = "Em 30 Dias";
    }

    if(this.gvProvider.gvOpAtual == 'ObterColetaneasDoAnoAtualAnteriorPaginadaComTag'){
      this.flgMinhaLista = false;
      var today = new Date();
      //var dd = today.getDate();
      //var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      this.strPlaceHold = "Em "+yyyy.toString()+'/'+(yyyy-1).toString();
    }


    this.infiniteScroll.enable(true);
    //console.log('chamou carregaColetaneas');
    //this.carregaColetaneasPrivadas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
    this.carregaColetaneas(this.gvProvider.gvBuscar,this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);


  }


    carregaColetaneas(Busca:string,PaginaAtual: number,ItensPorPagina: number) {
      this.gvProvider.gvPaginaAtual = 1;
      this.gvProvider.gvItensPorPagina = 10;
      //ObterColetaneas(op:string,busca: string, idsTags:string, idMembro: string, nrPagina:string, numItems:string)
      //console.log(Busca);
      this.restApiProvider.ObterColetaneas(this.gvProvider.gvOpAtual,Busca, this.gvProvider.gvFiltroTag, ''+this.gvProvider.gvIdMembroLogin, ''+PaginaAtual, ''+ItensPorPagina)
        .then((result: any) => {
          //console.log('carregaColetaneas emqualquuerdia tem resposta');
          //console.log(result);
          for (var i = 0; i < result.ListaDeObjetos.length; i++) {
            var itemColetaneaPrivada = result.ListaDeObjetos[i];
            //"{{gvProvider.gvHostImageResize}}{{gvProvider.gvMaxWidth}}{{gvProvider.gvParamImgFile}}{{gvProvider.gvStorage}}{{item.Artes}}"
            //console.log(itemColetaneaPrivada.ehPrivada);
            if (itemColetaneaPrivada.ehPrivada){
              itemColetaneaPrivada.Artes = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStoragePrivate + itemColetaneaPrivada.Artes;
            }else{
              itemColetaneaPrivada.Artes = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + itemColetaneaPrivada.Artes;
            }
            this.str = itemColetaneaPrivada.Artes;
            this.gvProvider.gvColetaneas.ListaDeObjetos.push(itemColetaneaPrivada);
            //console.log(itemColetaneaPrivada.Artes);
          }

            //console.log(this.str);
            this.loader.dismiss();


          if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (this.gvProvider.gvColetaneas.ListaDeObjetos.length == result.TotalDeRegistros) {
              this.infiniteScroll.enable(false);
            }
          }

        })
        .catch((error: any) => {
          console.log('Erro na chamada de: carregaColetaneas emqualquuerdia'+ error.error);
          this.loader.dismiss();
          this.toast.create({ message: 'Erro ao carregar emqualquuerdia '+ error.error, position: 'botton', duration: 3000 }).present();
        });
    }

    pegaMaisItens() {
      setTimeout(() => {
        this.gvProvider.gvPaginaAtual += 1;
        this.carregaColetaneas(this.gvProvider.gvBuscar,this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
      }, 500);
    }

    click(){
      //console.log('click image button');
    }

    showConfirm(item) {
       const confirm = this.alertCtrl.create({
         title: 'Playlist',
         message: '',
         buttons: [
           {
             text: 'Adicionar',
             handler: () => {
               console.log('Adicionar clicked');
               if(!this.gvProvider.gvPlayListColetanea.ehPrivada){
                 this.gvProvider.gvPlayListColetanea = {IdeColetanea:0,Nome:'',ehPrivada:false};
               }
               this.addTocaColetanea(item);
             }
           },
           {
             text: 'Substituir',
             handler: () => {
               console.log('Substituir clicked');
               this.gvProvider.gvPlayListItens = [];
               if(this.flgMinhaLista){
                this.gvProvider.gvPlayListColetanea = {IdeColetanea:this.gvProvider.gvColetaneas.ListaDeObjetos[item].IdeColetanea,Nome:this.gvProvider.gvColetaneas.ListaDeObjetos[item].Nome,ehPrivada:true};
              }else{
                //this.gvProvider.gvPlayListColetanea = {IdeColetanea:0,Nome:'',ehPrivada:false};
                this.gvProvider.gvPlayListColetanea = {IdeColetanea:0,Nome:this.gvProvider.gvColetaneas.ListaDeObjetos[item].Nome,ehPrivada:false};
              }
               this.addTocaColetanea(item);
               this.gvProvider.gvEhPlayPreview = false;
               this.gvProvider.gvPlayListUltimoIndexTocado = -1;
               this.gvProvider.gvPlayListItens[0].Selecionado = true;
               this.playEventGatilho.publish('play-preview');
             }
           }
         ]
       });
       confirm.present();
     }

      meusMarcadores(itemCol,itemObra) {
        //console.log(itemCol);
        //console.log(itemObra);

        //console.log(this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras);


        //let _str = this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras[itemObra].TagsIds;
        //console.log(this.gvProvider.gvColetaneas.ListaDeObjetos);
        let idsTagsObra:any = this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras[itemObra].TagsIds.split(',');

        for (var i = 0; i < this.gvProvider.gvListaMenu.length; i++) {
            if(this.gvProvider.gvListaMenu[i].TipoMenuAppJsonDto==1){
              this.indexDosMarcadores = i;
            }
        }

         let marcLocal:any = this.gvProvider.gvListaMenu[this.indexDosMarcadores].Tags;
         let obraTags:any = this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras[itemObra];

        //console.log(marcLocal);
        //console.log(obraTags);
        //console.log(idsTagsObra);

        //let oTags:any = [];

        let oTags = marcLocal.filter(function (item) {
        	return item.Sistema == false;
        });

        //console.log(oTags);

         let dTags:any = [];

        for(var x = 0; x < oTags.length; x++){

          let ehselecioado = idsTagsObra.filter(function (itemz) {
          	return itemz == oTags[x].IdeMembroTag;
          });

          //console.log(ehselecioado);

            if(ehselecioado.length > 0){
              //console.log('ehselecioado');
              dTags.push({IdeMembroTag: oTags[x].IdeMembroTag,NomeTag: oTags[x].NomeTag,Selected: true,Sistema: oTags[x].Sistema,Visivel: oTags[x].Visivel,flagNova: oTags[x].flagNova});
            }else{
              //console.log('nao ehselecioado');
              dTags.push({IdeMembroTag: oTags[x].IdeMembroTag,NomeTag: oTags[x].NomeTag,Selected: false,Sistema: oTags[x].Sistema,Visivel: oTags[x].Visivel,flagNova: oTags[x].flagNova});
            }

        }

        console.log(dTags);
        const modal = this.modalCtrl.create(MarcadoresPage,{paramTags:dTags,itemCol:itemCol,itemObra:itemObra,indexDosMarcadores:this.indexDosMarcadores});
        modal.present();

        modal.onDidDismiss(data => {
          console.log(data);
        });

      }

     // meusMarcadores(itemCol,itemObra) {
     //     let alert = this.alertCtrl.create();
     //     alert.setTitle('Which planets have you visited?');
     //
     //     alert.addInput({
     //       type: 'checkbox',
     //       label: 'Alderaan',
     //       value: 'value1',
     //       checked: true
     //     });
     //
     //     alert.addInput({
     //       type: 'checkbox',
     //       label: 'Bespin',
     //       value: 'value2'
     //     });
     //
     //     alert.addButton('Cancel');
     //     alert.addButton({
     //       text: 'Okay',
     //       handler: data => {
     //         console.log('Checkbox data:', data);
     //         this.testCheckboxOpen = false;
     //         this.testCheckboxResult = data;
     //       }
     //     });
     //     alert.present();
     //}


    addTocaColetanea(item){
      //console.log('click image addTocaColetanea');
      // if(this.gvProvider.gvColetaneas.gvPlayListColetanea.ehPrivada){
      //
      // }

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
          Selecionado:false,
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
        Selecionado:false,
        track:{
          src: this.gvProvider.gvStorage + obra.Arquivo,
          artist: obra.Autores,
          title: obra.Nome,
          art: this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + obra.Artes,
          preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
        }
      });
      if(!this.gvProvider.gvPlayListColetanea.ehPrivada){
        this.gvProvider.gvPlayListColetanea = {IdeColetanea:0,Nome:'',ehPrivada:false};
      }
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
         this.gvProvider.gvEhPlayPreview = true;
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

    handleLogin(){
      //this.navCtrl.popToRoot();
    }

    ionClearEvent(ev) {
      this.gvProvider.gvBuscar = '';
      this.gvProvider.gvColetaneas = [];
      this.gvProvider.gvPaginaAtual = 1;
      this.navCtrl.goToRoot(null);
      //this.navCtrl.popToRoot();
    }

    handler(ev) {

      console.log(this.gvProvider.gvBuscar);

      if(this.gvProvider.gvBuscar.length>=3){
        this.gvProvider.gvColetaneas = [];
        this.gvProvider.gvPaginaAtual = 1;
        //this.navCtrl.popToRoot();
        this.navCtrl.goToRoot(null);
      }

       if(ev.keyCode==13 && this.gvProvider.gvBuscar.length>=3){
         //this.gvProvider.gvColetaneas = [];
         this.gvProvider.gvPaginaAtual = 1;
         //this.navCtrl.popToRoot();
         this.navCtrl.goToRoot(null);
       }

       if(ev.keyCode==13 && this.gvProvider.gvBuscar==''){
         //this.gvProvider.gvColetaneas = [];
         this.gvProvider.gvPaginaAtual = 1;
         //this.navCtrl.popToRoot();
         this.navCtrl.goToRoot(null);
       }

       if( this.gvProvider.gvBuscar==''){
         //this.gvProvider.gvColetaneas = [];
         this.gvProvider.gvPaginaAtual = 1;
         //this.navCtrl.popToRoot();
         this.navCtrl.goToRoot(null);
       }

    }

}
