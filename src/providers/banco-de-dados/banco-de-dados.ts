import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class BancoDeDadosProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {
    //console.log('Hello BancoDeDadosProvider Provider');
  }

  public RegistrarNoBD(ideMembro:string,identidadeDeLogin:MembroLocal) {
    let key = ideMembro;
    return this.saveMembroLocal(key, identidadeDeLogin);
  }

  // public insert(contact: Contact) {
  //   let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
  //   return this.save(key, contact);
  // }

  public RegistrarSensoObra(sensoobra: SensoObra) {
    //let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    //return this.save(key, sensoobra);
  }

  public RegistrarSensoColetanea(sensocoletanea: SensoColetanea) {
     //let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
     //return this.save(key, sensocoletanea);
   }

   /*
   public update(key: string, contact: Contact) {
     return this.save(key, contact);
   }
   */

   private saveMembroLocal(key: string, membro: MembroLocal) {
     return this.storage.set(key, membro);
   }


    private save(key: string, membro: MembroLocal) {
      return this.storage.set(key, membro);
    }


   public remove(key: string) {
     return this.storage.remove(key);
   }

/*   public getAll() {

     let contacts: ContactList[] = [];

     return this.storage.forEach((value: Contact, key: string, iterationNumber: Number) => {
       let contact = new ContactList();
       contact.key = key;
       contact.contact = value;
       contacts.push(contact);
     })
       .then(() => {
         return Promise.resolve(contacts);
       })
       .catch((error) => {
         return Promise.reject(error);
       });
   }

}
*/


   public getAllMembro() {

     let membros: MembroList[] = [];

     return this.storage.forEach((value: MembroLocal, key: string, iterationNumber: Number) => {
       let membro = new MembroList();
       membro.ideMembro = key;
       membro.membroLocal = value;
       membros.push(membro);
     })
       .then(() => {
         return Promise.resolve(membros);
       })
       .catch((error) => {
         return Promise.reject(error);
       });
   }

} //fim da main


export class SensoObra {
  IdeObra: string;
  TipoMidia:string;
}

export class SensoColetanea {
  IdeColetanea: string;
  Privativa:string;
}

export class MembroLocal {
  token: string;
}

export class MembroList {
  ideMembro: string;
  membroLocal:MembroLocal;
}

export class SensoObraList {
  DtAudicao:string;
  sensoObra: SensoObra;
}

export class SensoColetaneaList {
  DtAudicao:string;
  sensoColetanea: SensoColetanea;
}
