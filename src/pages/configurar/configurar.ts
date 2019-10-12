import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';

import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { BancoDeDadosProvider, MembroLocal, MembroList } from './../../providers/banco-de-dados/banco-de-dados';

import { EmqualqerdiaPage } from '../emqualqerdia/emqualqerdia';
import { SemAcessoPage } from '../sem-acesso/sem-acesso';
import { LoginPage } from '../login/login';

//import { GoogleAnalytics } from '@ionic-native/google-analytics';

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

  membros: MembroList[];
  imageProvider:any = "";
  imgPlay:string = "Storage/capa/play-button-icon-png-280x280.png";
  loader:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private restApiProvider: RestApiProvider,
      public gvProvider: GlobalvarProvider,
      public loadingController: LoadingController,
      private toast: ToastController,
      //private ga: GoogleAnalytics,
      private bancoDados:BancoDeDadosProvider
    )
      {

        this.imageProvider = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage ;
        //console.log(this.imageProvider);
        this.imgPlay = this.gvProvider.gvStorage+'getimagepng.php?w='+ (this.gvProvider.gvMaxWidth/2) +'&filename='+this.gvProvider.gvStorage+'Storage/capa/play-button-icon-png-280x280.png';
        //console.log(this.imgPlay);

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConfigurarPage');
    this.loader = this.loadingController.create({content: "Configurando...."});
    this.loader.present();
    //this.ga.trackView('Home').then(() => {}).catch(e => console.log(e));
    this.ConfiguraEnderecoServidor();
  }

  ConfiguraEnderecoServidor() {
    this.restApiProvider.Conectar(this.gvProvider.gvToken)
      .then((result: any) => {
        //this.toast.create({ message: 'Conexão ok! ', position: 'botton', duration: 3000 }).present();

        this.gvProvider.gvStorage = 'http://' + result.ServidorDeConexao + ':81/';
        this.gvProvider.gvHostImageResize = 'http://' + result.ServidorDeConexao + ':81/getimage.php?w=';
        //console.log("serverSet:"+this.gvProvider.gvStorage);
        //console.log("serverSet:"+this.gvProvider.gvStorage);
        //this.nav.setRoot(EmqualqerdiaPage);

        if(result.Status == "0"){
          this.loader.dismiss();
          //this.toast.create({ message: 'Conta sem permissão.', position: 'botton', duration: 3000 }).present();
          console.log(result.Status);
          //this.navCtrl.setRoot(SemAcessoPage);
          this.Registrar();
        }else{
          this.loader.dismiss();
          this.Registrar();
        }

        //this.navCtrl.setRoot(EmqualqerdiaPage);
        //this.navCtrl.goToRoot(null);

      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao conectar.' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  Registrar(){
    this.bancoDados.getAllMembro()
      .then((result) => {
        this.membros = result;
        //console.log('ionViewDidLoad this.bancoDados.getAllMembro()');
        //console.log(this.membros);
        if(this.membros.length > 0){
          //console.log('this.membros.length > 0');
          //this.bancoDados.remove(this.gvProvider.gvIdMembroLogin);
          this.bancoDados.remove('0');
          this.bancoDados.remove('1');
          //this.bancoDados.remove('3');
          //this.bancoDados.remove('7');
          //this.restApiProvider.RegistraGA('Entrou','Entrou-'+this.gvProvider.gvIdMembroLogin);
          this.gvProvider.RegistrarGA('Entrou','Entrou-'+this.gvProvider.gvIdMembroLogin);
          this.navCtrl.setRoot(EmqualqerdiaPage);
        }else{
          this.navCtrl.setRoot(LoginPage);
        }
      });
  }

}
