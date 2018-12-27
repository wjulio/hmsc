import { Injectable } from '@angular/core';
import { ITrackConstraint} from 'ionic-audio';

/*
  Generated class for the GlobalvarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvarProvider {

  public gvIdMembroLogin:number = 3;
  public myGlobalVar: string;
  public gvListaMenu:any = [];
  public gvMinhaLista:any;
  public gvColetaneas:any = [];
  public gvMaxWidth:any = "300";
  //public gvStorage:any = 'http://127.0.0.1:81/';
  public gvStorage:any = 'http://179.218.160.17:81/';
  //public gvHostImageResize:any = 'http://127.0.0.1/CloudDj/fx/getimage.aspx?w=';
  public gvHostImageResize:any = 'http://179.218.160.17:81/getimage.php?w=';
  public gvParamImgFile = '&filename=';
  public gvPaginaAtual:any = 1;
  public gvItensPorPagina:any = 10;
  public gvBuscar:string = '';

  public gvPlayListItens:any = [];
  public gvPlayListUltimoIndexTocado:number = -1;
  public gvPlayListIndexSelecionado:number = -1;

  public singleTrack: ITrackConstraint;

  constructor() {
    //console.log('Hello GlobalvarProvider Provider');


  }

}
