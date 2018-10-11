
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'; //Response,
import 'rxjs/add/operator/map';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {

  //private API_URL = 'http://disclosure-001-site1.gtempurl.com/jservico.asmx/'
  //private API_URL = 'http://localhost:26223/wscloud/jservico.asmx/'
  private API_URL = 'http://127.0.0.1/clouddj/jservico.asmx/'

  //private API_URL2 = 'http://disclosure-001-site1.gtempurl.com/appmob/dados.json'

  /*constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }*/

  constructor(public http: Http) { }

  ObterMenu(idMembro: string) {
     return new Promise((resolve, reject) => {
       // var data = {
       //   idMembro: idMembro
       // };

       // let headers = new Headers();
       //    headers.append('Access-Control-Allow-Origin' , '*');
       //    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       //    headers.append('Accept','application/x-www-form-urlencoded');
       //    headers.append('content-type','application/x-www-form-urlencoded');

       //var idMembro = "idMembro=" + idMembro;
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
       //--//let options = new RequestOptions({ headers: this.headers.getXMLHeader()});
       //let options = new RequestOptions({ headers:headers,withCredentials: true});
       let options = new RequestOptions({ headers: headers });
       let body = 'idMembro=' + idMembro;

       console.log("Passou o post ObterMenu()");

       //this.http.post(this.API_URL + 'ObterListaDeComandos',body, options)
       this.http.post(this.API_URL + 'ObterListaDeComandos', body, options)
         .subscribe((result: any) => {
           resolve(result.json());
         },
         (error) => {
           reject(error.json());
         });
     });
   }

}
