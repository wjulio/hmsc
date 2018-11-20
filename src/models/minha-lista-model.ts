
export class MinhaLIstaModel {

    public nome: string;
    public id:number;
    public tocandoAgora:number;
    public ultimoTocado:number;
    public obras:any=[];

    constructor(){

    }

    stNome(nome){
      this.nome = nome;
    }

    stId(id){
      this.nome = id;
    }

    setTocandoAgora(tocandoAgora){
      this.ultimoTocado =   this.tocandoAgora;
      this.tocandoAgora = tocandoAgora;
    }


    addItem(idobra,nome,autores,arte,duracao,arquivo,dtcri,ehpreview){
        this.obras.push({
          IdeObra: 10816,
          Nome: "Matija - I'm Still Here (Original Mix)",
          Autores: "Matija",
          Arte: "Storage/04-05-2018/1.1099140037/Matija_-_I_m_Still_Here_(Original_Mix).jpg",
          Duracao: "12:00:00 AM",
          Arquivo: "Storage/04-05-2018/1.1099140037/Matija_-_I_m_Still_Here_(Original_Mix).mp3",
          DtCriacao: "5/5/2018 1:52:47 AM",
          ehPreview:ehpreview
        });
    }

    // removeItem(item){
    //
    //     for(i = 0; i < this.obras.length; i++) {
    //         if(this.obras[i] == item){
    //             this.obras.splice(i, 1);
    //         }
    //     }
    //
    // }

  }

// export class ObraModel {
//     public IdeObra: number;
//     public Nome: string;
//     public Autores: string;
//     public Arte: string;
//     public Duracao: string;
//     public Arquivo: string;
//     public DtCriacao: string;
//     public ehPreview:boolean=false;
//
//     constructor(){}
//
// }
