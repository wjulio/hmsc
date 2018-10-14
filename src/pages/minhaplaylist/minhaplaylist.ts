import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';

/**
 * Generated class for the MinhaplaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minhaplaylist',
  templateUrl: 'minhaplaylist.html',
})
export class MinhaplaylistPage {

lcCalendarIcon = 'calendar';
lcDia:any = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public gvProvider: GlobalvarProvider) {
    console.log('ListaDeObjetos:'+gvProvider.gvMinhaLista.ListaDeObjetos.length);

    // var date_string = '/Date(1233323754523)/';
    // var lcDia = new Date(parseInt(/\/Date\((\d+).*/.exec(date_string)[1]));
    //var lcDia = new Date(1233323754523);
    //console.log('ListaDeObjetos:'+lcDia);
    //console.log(platform.width());
    //MaxWidth = platform.width();
    //console.log('MaxWidth:'+MaxWidth);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhaplaylistPage');
  }

}
