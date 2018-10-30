import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { GlobalvarProvider } from './../../providers/globalvar/globalvar';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-minhaplaylist',
  templateUrl: 'minhaplaylist.html',
})
export class MinhaplaylistPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  lcCalendarIcon = 'calendar';
  lcDia:any = new Date();

  str:any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private restApiProvider: RestApiProvider, public gvProvider: GlobalvarProvider) {
    console.log('ListaDeObjetos:'+ gvProvider.gvMinhaLista.ListaDeObjetos.length);

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

    this.gvProvider.gvPaginaAtual = 1;
    this.gvProvider.gvItensPorPagina = 10;
    this.gvProvider.gvMinhaLista.ListaDeObjetos = [];

    this.infiniteScroll.enable(true);
    console.log('chamou carregaColetaneasPrivadas');
    //this.carregaColetaneasPrivadas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
    this.carregaColetaneasPrivadas(1,10);

  }

  carregaColetaneasPrivadas(PaginaAtual: number,ItensPorPagina: number) {
    this.restApiProvider.ObterColetaneasPrivadas('', '', '1', ''+PaginaAtual, ''+ItensPorPagina)
      .then((result: any) => {
        console.log('carregaColetaneasPrivadas tem resposta');
        for (var i = 0; i < result.ListaDeObjetos.length; i++) {
          var itemColetaneaPrivada = result.ListaDeObjetos[i];
          //"{{gvProvider.gvHostImageResize}}{{gvProvider.gvMaxWidth}}{{gvProvider.gvParamImgFile}}{{gvProvider.gvStorage}}{{item.Artes}}"
          itemColetaneaPrivada.Artes = this.gvProvider.gvHostImageResize + this.gvProvider.gvMaxWidth + this.gvProvider.gvParamImgFile + this.gvProvider.gvStorage + itemColetaneaPrivada.Artes;
          this.str = itemColetaneaPrivada.Artes;
          this.gvProvider.gvMinhaLista.ListaDeObjetos.push(itemColetaneaPrivada);
        }

          console.log(this.str);

        //
        // if (this.infiniteScroll) {
        //   this.infiniteScroll.complete();
        //   if (this.ListaDeObjetos.length == result.TotalDeRegistros) {
        //     this.infiniteScroll.enable(false);
        //   }
        // }
      })
      .catch((error: any) => {
        console.log('Erro na chamada de: carregaColetaneasPrivadas');
        this.toast.create({ message: 'Erro ao carregar minha lista ', position: 'botton', duration: 3000 }).present();
      });
  }

  getUsers() {
    setTimeout(() => {
      this.gvProvider.gvPaginaAtual += 1;
      this.carregaColetaneasPrivadas(this.gvProvider.gvPaginaAtual,this.gvProvider.gvItensPorPagina);
    }, 500);
  }

}
