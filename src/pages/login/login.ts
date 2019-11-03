import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController,Events } from 'ionic-angular';
import { EmqualqerdiaPage } from '../emqualqerdia/emqualqerdia';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { BancoDeDadosProvider, MembroLocal } from './../../providers/banco-de-dados/banco-de-dados';
//import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: MembroLocal;
  key: string;
  inputEmail:string;
  loader:any;

    constructor(
                  public navCtrl: NavController,
                  public navParams: NavParams,
                  private restApiProvider: RestApiProvider,
                  public gvProvider: GlobalvarProvider,
                  public registroEventsGatilho: Events,
                  public loadingController: LoadingController,
                  private bancoDadosProvider: BancoDeDadosProvider,
                  //private ga: GoogleAnalytics,
                  private toast: ToastController) {

      this.model = new MembroLocal();
      //this.inputEmail = 'wjulio.melo@gmail.com';
      //this.model.token = 'wjulio.melo@gmail.com';

    }

    ionViewDidLoad() {
      //console.log('ionViewDidLoad LoginPage');
      //this.ga.trackView('Pagia de Registro').then(() => {}).catch(e => console.log(e));
    }

    // Registrar() {
    //   this.navCtrl.setRoot(EmqualqerdiaPage);
    // }

    MembroReistrado() {
      //console.log(this.inputEmail);
      this.gvProvider.RegistrarGA('PedeRegistro','PedeRegistro-'+this.inputEmail);
      this.restApiProvider.ObterRegistro(this.inputEmail)
        .then((result: any) => {
          //this.toast.create({ message: 'Conexão ok! ', position: 'botton', duration: 3000 }).present();
          if(result.Chave > 0 ){
            this.key = result.Chave;
            this.model.token = result.Permissao;
            this.gvProvider.gvToken = result.Permissao;
            this.gvProvider.gvIdMembroLogin = this.key;
            this.save();
            this.gvProvider.RegistrarGA('PedeRegistroAutorizado','PedeRegistro-'+this.inputEmail);
          }else {
            this.loader.dismiss();
            this.toast.create({ message: 'falha ao registrar.', position: 'botton', duration: 3000 }).present();
          }


          // this.gvProvider.gvStorage = 'http://' + result.ServidorDeConexao + ':81/';
          // this.gvProvider.gvHostImageResize = 'http://' + result.ServidorDeConexao + ':81/getimage.php?w=';
          //console.log("result:"+result);
          // //console.log("serverSet:"+this.gvProvider.gvStorage);
          // //this.nav.setRoot(EmqualqerdiaPage);
          // this.loader.dismiss();s
          // this.Registrar();
          // //this.navCtrl.setRoot(EmqualqerdiaPage);
          //this.navCtrl.goToRoot(null);

        })
        .catch((error: any) => {
          this.toast.create({ message: 'Erro ao conectar.' + error.error, position: 'botton', duration: 3000 }).present();
        });
    }

    Registrar() {
      //this.navCtrl.setRoot(EmqualqerdiaPage);
      if(this.inputEmail.length>=7){
        this.model.token = this.inputEmail;
        this.loader = this.loadingController.create({content: "Agarde...."});
        this.loader.present();
        this.MembroReistrado();
      }
    }

    save() {
      this.saveToken()
        .then(() => {
          this.toast.create({ message: 'Registrado com sucesso.', duration: 3000, position: 'botton' }).present();
          this.registroEventsGatilho.publish('registrou');
          this.navCtrl.setRoot(EmqualqerdiaPage);
          //this.navCtrl.goToRoot(null);
          //this.navCtrl.getRootNav().setRoot(EmqualqerdiaPage);
        })
        .catch(() => {
          this.toast.create({ message: 'falhou ao registrar.', duration: 3000, position: 'botton' }).present();
        });
    }

    private saveToken() {
      //RegistrarNoBD(ideMembro:string,identidadeDeLogin:MembroLocal)
      //console.log('insert(this.model)');
      this.loader.dismiss();
      return this.bancoDadosProvider.RegistrarNoBD(this.key,this.model);
      //return;
    }

}

// export class User {
//   email: string;
//   password: string;
// }
