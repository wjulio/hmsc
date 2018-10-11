import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvarProvider {

  public myGlobalVar: string;
  public gvListaMenu:any = [];

  constructor() {
    //console.log('Hello GlobalvarProvider Provider');
  }

}
