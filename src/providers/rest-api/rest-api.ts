
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
  private API_URL = 'http://localhost:26223/wscloud/jservico.asmx/'
  //private API_URL = 'http://127.0.0.1/clouddj/jservico.asmx/'

  constructor(public http: Http) { }

  ObterMenu(idMembro: string) {
     return new Promise((resolve, reject) => {
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
       let options = new RequestOptions({ headers: headers });
       let body = 'idMembro=' + idMembro;

       console.log("Passou o post ObterMenu()");

       this.http.post(this.API_URL + 'ObterListaDeComandos', body, options)
         .subscribe((result: any) => {
           resolve(result.json());
         },
         (error) => {
           reject(error.json());
         });
     });
   }

   /*
   _busca As String,
   _idsTags As List(Of String),
   _idMembro As Integer,
   _nrPagina As Integer,
   _numItems As Integer
   */

   ObterColetaneasPrivadas(busca: string, idsTags:string, idMembro: string, nrPagina:string, numItems:string) {
      return new Promise((resolve, reject) => {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
        let options = new RequestOptions({ headers: headers });
        let body = 'busca=' + busca + '&idsTags=' + idsTags + '&idMembro=' + idMembro + '&nrPagina=' + nrPagina + '&numItems=' + numItems;

        console.log(body);
        console.log("Passou o post ObterColetaneasPrivadas()");

        this.http.post(this.API_URL + 'ObterColetaneasTodasPrivadasPaginadaComTag', body, options)
          .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
      });
    }

}
