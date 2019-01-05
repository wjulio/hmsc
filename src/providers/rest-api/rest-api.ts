
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

  private API_URL = 'http://disclosure-001-site1.gtempurl.com/jpservico.aspx'
  //private API_URL = 'http://localhost:26223/wscloud/jpservico.aspx'
  //private API_URL = 'http://127.0.0.1/clouddj/jpservico.asmx/'
  //private API_URL = 'http://179.218.153.242/clouddj/jpservico.aspx';
  private urlPost = '';

  constructor(public http: Http) { }


    //ServidorDeConexao


  Conectar(idMembro: string) {
     return new Promise((resolve, reject) => {
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET' });
       //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
       let options = new RequestOptions({ headers: headers });
       let body = 'op=Conectar&idMembro=' + idMembro;

       console.log("Passou o post ObterMenu()");

       //this.http.post(this.API_URL + 'ObterListaDeComandos', body, options)
       this.http.post(this.API_URL, body, options)
         .subscribe((result: any) => {
           resolve(result.json());
         },
         (error) => {
           reject(error.json());
         });
     });
   }

  ObterMenu(idMembro: string) {
     return new Promise((resolve, reject) => {
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET' });
       //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
       let options = new RequestOptions({ headers: headers });
       let body = 'op=ObterListaDeComandos&idMembro=' + idMembro;

       console.log("Passou o post ObterMenu()");

       //this.http.post(this.API_URL + 'ObterListaDeComandos', body, options)
       this.http.post(this.API_URL, body, options)
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
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        let body = 'op=ObterColetaneasTodasPrivadasPaginadaComTag&busca=' + busca + '&idsTags=' + idsTags + '&idMembro=' + idMembro + '&nrPagina=' + nrPagina + '&numItems=' + numItems;

        //this.urlPost = this.API_URL + 'ObterColetaneasTodasPrivadasPaginadaComTag';

        console.log(body);
        //console.log("Passou o post ObterColetaneasPrivadas()");
        //console.log("urlPost:"+this.urlPost);

        //this.http.post(this.API_URL + 'ObterColetaneasTodasPrivadasPaginadaComTag', body, options)
        this.http.post(this.API_URL, body, options)
          .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
      });
    }


       ObterColetaneas(op:string,busca: string, idsTags:string, idMembro: string, nrPagina:string, numItems:string) {
          return new Promise((resolve, reject) => {
            //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
            let options = new RequestOptions({ headers: headers });
            let body = 'op=' + op + '&busca=' + busca + '&idsTags=' + idsTags + '&idMembro=' + idMembro + '&nrPagina=' + nrPagina + '&numItems=' + numItems;

            this.urlPost = this.API_URL+'?'+body;

            //console.log(body);
            //console.log("Passou o post ObterColetaneasPrivadas()");
            console.log("urlPost:"+this.urlPost);

            //this.http.post(this.API_URL + 'ObterColetaneasTodasPrivadasPaginadaComTag', body, options)
            this.http.post(this.API_URL, body, options)
              .subscribe((result: any) => {
                resolve(result.json());
              },
              (error) => {
                reject(error.json());
              });
          });
        }

        //SalvarColetaneaDoUsuario(ByVal _IdUsuario As String, ByVal _IdObras As List(Of String), ByVal _IdColetaneaDoUsuario As String, ByVal _NmColetaneaDoUsuario As String)
        SalvarColetaneaPrivada(idMembro:string, lsIdsObras:string, idColetanea:string, nmColetaneaDoUsuario:string) {
           return new Promise((resolve, reject) => {

             //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
             let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
             let options = new RequestOptions({ headers: headers });
             let body = 'op=SalvarColetaneaDoUsuario&idMembro=' + idMembro + '&lsIdsObras=' + lsIdsObras + '&idColetanea='+ idColetanea + '&nmColetaneaDoUsuario=' + nmColetaneaDoUsuario ;



             console.log("Postou SalvarColetaneaPrivada()");
             console.log(body);

             this.urlPost = this.API_URL+'?'+body;
             console.log("urlPost:"+this.urlPost);

             //this.http.post(this.API_URL + 'ObterListaDeComandos', body, options)
             this.http.post(this.API_URL, body, options)
               .subscribe((result: any) => {
                 resolve(result.json());
               },
               (error) => {
                 reject(error.json());
               });
           });
         }

}
