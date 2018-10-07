
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {

  private API_URL = 'http://disclosure-001-site1.gtempurl.com/'

  /*constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }*/

  constructor(public http: Http) { }

  ObterMenu(idMembro: string) {
     return new Promise((resolve, reject) => {
       var data = {
         idMembro: idMembro
       };

       //var idMembro = "idMembro=" + idMembro;
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
       let options = new RequestOptions({ headers: headers });
       let body = 'idMembro=' + idMembro;;

       console.log("Passou o post ObterMenu()");

       //this.http.post(this.API_URL + 'ObterListaDeComandos',body, options)
       this.http.post(this.API_URL + 'ObterListaDeComandos',data)
         .subscribe((result: any) => {
           resolve(result.json());
         },
         (error) => {
           reject(error.json());
         });
     });
   }

   // this.END_POINT = SERVER_URL + 'InsertNewUser';
   //  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
   //  let options = new RequestOptions({ headers: headers });
   //  let body = 'SchoolName=' + data.SchoolName + '&FirstName=' + data.FirstName + '&LastName=' + data.LastName + '&SchoolPassword=' + data.SchoolPassword +
   //             '&SchoolEmail=' + data.SchoolEmail + '&SchoolAddress=' + data.SchoolAddress + '&SchoolLogo=' + data.SchoolLogo + '&SchoolPhoneNumber=' + data.SchoolPhoneNumber +
   //             '&SchoolGuid=' + data.SchoolGuid + '&AccountAcitve=' + false + '&SchoolCode=' + data.SchoolCode + '&BusinessTypeId=' + 1;
   //  return this.http.post(`${this.END_POINT}`, body, options);
   //

}
