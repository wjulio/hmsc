import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { GlobalvarProvider } from './../../providers/globalvar/globalvar';

/**
 * Generated class for the SalvaColetaneaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salva-coletanea-modal',
  templateUrl: 'salva-coletanea-modal.html',
})
export class SalvaColetaneaModalPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public gvProvider: GlobalvarProvider) {
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalvaColetaneaModalPage');
  }

  Salvar() {
    this.viewCtrl.dismiss({ nmColetanea:this.gvProvider.gvPlayListColetanea.Nome});
  }

}
