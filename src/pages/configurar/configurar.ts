import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';

import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

import { EmqualqerdiaPage } from '../emqualqerdia/emqualqerdia';


/**
 * Generated class for the ConfigurarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configurar',
  templateUrl: 'configurar.html',
})
export class ConfigurarPage {

  imageProvider:any = "";
  imgPlay:string = "Storage/capa/play-button-icon-png-280x280.png";
  loader:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private restApiProvider: RestApiProvider,
      public gvProvider: GlobalvarProvider,
      public loadingController: LoadingController,
      private toast: ToastController)
      {

        this.imageProvider = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage ;
        console.log(this.imageProvider);
        this.imgPlay = this.gvProvider.gvStorage+'getimagepng.php?w='+ (this.gvProvider.gvMaxWidth/2) +'&filename='+this.gvProvider.gvStorage+'Storage/capa/play-button-icon-png-280x280.png';
        console.log(this.imgPlay);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurarPage');
    this.loader = this.loadingController.create({content: "Configurando...."});
    this.loader.present();
    this.ConfiguraEnderecoServidor();
  }

  ConfiguraEnderecoServidor() {
    this.restApiProvider.Conectar(this.gvProvider.gvIdMembroLogin.toString())
      .then((result: any) => {
        //this.toast.create({ message: 'Conexão ok! ', position: 'botton', duration: 3000 }).present();

        this.gvProvider.gvStorage = 'http://' + result.ServidorDeConexao + ':81/';
        this.gvProvider.gvHostImageResize = 'http://' + result.ServidorDeConexao + ':81/getimage.php?w=';
        console.log("serverSet:"+this.gvProvider.gvStorage);
        //console.log("serverSet:"+this.gvProvider.gvStorage);
        //this.nav.setRoot(EmqualqerdiaPage);
        this.loader.dismiss();
        this.navCtrl.setRoot(EmqualqerdiaPage);
        //this.navCtrl.goToRoot(null);

      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao conectar.' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

}
