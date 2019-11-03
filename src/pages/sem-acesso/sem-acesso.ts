import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BancoDeDadosProvider, MembroLocal, MembroList } from './../../providers/banco-de-dados/banco-de-dados';
/**
 * Generated class for the SemAcessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sem-acesso',
  templateUrl: 'sem-acesso.html',
})
export class SemAcessoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private bancoDados:BancoDeDadosProvider) {
    //this.bancoDados.removeAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SemAcessoPage');
  }

}
