import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController,LoadingController  } from 'ionic-angular';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-marcadores',
  templateUrl: 'marcadores.html',
})
export class MarcadoresPage {

  indexDosMarcadores:any=0;
  marcadoresLocais:any=[];
  novoMarcador:string='';
  loader:any;
  myToast:any;
  itemChanged:boolean = false;

  constructor(
                public navCtrl: NavController,
                private restApiProvider: RestApiProvider,
                public gvProvider: GlobalvarProvider,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public loadingController: LoadingController,
                private toast: ToastController
              ){


                //let lcTags:any = this.navParams.get('paramTags');
                //let itemObra:any = this.navParams.get('itemObra');
                //let obra:any = this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras[itemObra];
                //let marcados:any=[];

                this.marcadoresLocais = this.navParams.get('paramTags');
                this.indexDosMarcadores = this.navParams.get('indexDosMarcadores');
                this.itemChanged = false;
                console.log('indexDosMarcadores');
                console.log(this.indexDosMarcadores);


    }

  ionViewDidLoad() {

    // let tag:any;
    // if(marcados.length>0){
    //   for(var x = 0; x < marcados.length; x++){
    //     if(marcados[x] == marcLocal[j].IdeMembroTag.toString()){
    //       //console.log(marcados[x] +'-->*'+marcLocal[j].IdeMembroTag.toString());
    //       marcLocal[j].Selected = true;
    //       tag = {IdeMembroTag: marcLocal[j].IdeMembroTag,NomeTag: marcLocal[j].NomeTag,Selected: true,Sistema: marcLocal[j].Sistema,Visivel: marcLocal[j].Visivel,flagNova: marcLocal[j].flagNova};
    //       this.marcadoresLocais.push(tag);
    //     }else{
          ////console.log(marcados[x] +'-->'+marcLocal[j].IdeMembroTag.toString());
          ////marcLocal[i].Selected = false;
          ////tag = {IdeMembroTag: marcLocal[j].IdeMembroTag,NomeTag: marcLocal[j].NomeTag,Selected: false,Sistema: marcLocal[j].Sistema,Visivel: marcLocal[j].Visivel,flagNova: marcLocal[j].flagNova};
    //       this.marcadoresLocais.push({IdeMembroTag: marcLocal[j].IdeMembroTag,NomeTag: marcLocal[j].NomeTag,Selected: false,Sistema: marcLocal[j].Sistema,Visivel: marcLocal[j].Visivel,flagNova: marcLocal[j].flagNova});
    //     }
    //   }
    // }

  }

  selecionaMarcador(index){
    this.itemChanged = true;
    this.marcadoresLocais[index].Selected = !this.marcadoresLocais[index].Selected;
    //console.log(this.marcadoresLocais[index]);
  }

  dismiss() {
    //let data = { 'foo': 'bar' };
    //this.viewCtrl.dismiss(data);
    //this.marcadoresLocais = [];
    //console.log(this.marcadoresLocais);

    if(!this.itemChanged){
      console.log('this.itemChanged = false');
      this.viewCtrl.dismiss();
      return;
    }

    console.log('this.itemChanged = true');

    let ids:any = [];
    for (var i = 0; i < this.marcadoresLocais.length; i++) {
      if(this.marcadoresLocais[i].Selected){
        ids.push(this.marcadoresLocais[i].IdeMembroTag.toString());
      }
    }

    if(ids.length>0){
      console.log(ids.toString());
      this.AderirMarcadores(ids.toString());
    }else{
      console.log('tags removidas');
      //se _lsMembroTags.count = 0 todas as tags aderidas pelo usuario serao apagadas
      this.AderirMarcadores('');
      //this.viewCtrl.dismiss();
    }

  }

  CriarNovoMarcador(strMarcador){
    //console.log(this.novoMarcador);
    console.log(strMarcador);
    console.log(this.indexDosMarcadores);
    //return;
    this.loader = this.loadingController.create({content: "Salvando...."});
    this.loader.present();

    this.restApiProvider.CriarMarcador(this.gvProvider.gvIdMembroLogin,strMarcador)
      .then((result: any) => {
        //console.log('result');
        //console.log(result);

        if(result.flagNova){
          this.marcadoresLocais.push(result);
          console.log(this.gvProvider.gvListaMenu);
          //this.gvProvider.gvListaMenu[this.indexDosMarcadores].Tags.push(result);
          //this.gvProvider.gvListaMenu[this.indexDosMarcadores].Contador = this.gvProvider.gvListaMenu[this.indexDosMarcadores].Tags.length;
        }else{
          this.toast.create({ message: 'Erro ao criar o novo marcador.', position: 'botton', duration: 3000 }).present();
        }

        this.novoMarcador = '';
        this.loader.dismiss();

      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro na conexão ao criar o novo marcador.' + error.error, position: 'botton', duration: 6000 }).present();
      });
  }

  AderirMarcadores(idsTags:string){
    this.loader = this.loadingController.create({content: "Salvando...."});
    this.loader.present();

    let itemCol:any = this.navParams.get('itemCol');
    let itemObra:any = this.navParams.get('itemObra');
    let idObra:string = this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras[itemObra].IdeObra;
    //console.log(idObra);
    this.restApiProvider.AderirMarcadores(this.gvProvider.gvIdMembroLogin,idObra,idsTags)
      .then((result: any) => {
        console.log(result);
        if(result.RetornoComSucesso){
          this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras[itemObra].TagsIds = idsTags.toString() //idsTags.split(',');
          console.log(this.gvProvider.gvColetaneas.ListaDeObjetos[itemCol].Obras[itemObra].TagsIds);
          this.loader.dismiss();
          this.viewCtrl.dismiss();
        }else{
          this.loader.dismiss();
          this.myToast = this.toast.create({ message: 'Erro ao salvar marcadores.', position: 'botton', showCloseButton: true });
          this.myToast.onDidDismiss(data => {this.viewCtrl.dismiss();});
          this.myToast.present();
        }

      })
      .catch((error: any) => {

        this.loader.dismiss();
        this.myToast = this.toast.create({ message: 'Erro ao salvar marcadores.', position: 'botton', showCloseButton: true });
        this.myToast.onDidDismiss(data => {this.viewCtrl.dismiss();});
        this.myToast.present();

      });
  }


}
