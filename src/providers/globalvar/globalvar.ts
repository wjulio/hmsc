import { Injectable } from '@angular/core';
import { ITrackConstraint} from 'ionic-audio';

/*
  Generated class for the GlobalvarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvarProvider {

  public gvIdMembro:number = 1;
  public myGlobalVar: string;
  public gvListaMenu:any = [];
  public gvMinhaLista:any;
  public gvColetaneas:any = [];
  public gvMaxWidth:any = "300";
  //public gvStorage:any = 'http://127.0.0.1:81/';
  public gvStorage:any = 'http://179.218.229.220:81/';
  //public gvHostImageResize:any = 'http://127.0.0.1/CloudDj/fx/getimage.aspx?w=';
  public gvHostImageResize:any = 'http://179.218.229.220:81/getimage.php?w=';
  public gvParamImgFile = '&filename=';
  public gvPaginaAtual:any = 1;
  public gvItensPorPagina:any = 10;

  public gvPlayListItens:any = [];

  public singleTrack: ITrackConstraint;

  constructor() {
    //console.log('Hello GlobalvarProvider Provider');

    this.gvMinhaLista =
      {
        "Pagina": 1,
        "ItensPorPagina": 10,
        "TotalDeRegistros": 10,
        "TotalDePaginas": 1,
        "ListaDeObjetos": [
          {
            "Nome": "ele test debug",
            "Autores": "",
            "Artes": "Private/25-05-2018/-2021454597/mosaico.1.jpg",
            "Obras": [
              {
                "IdeObra": 10885,
                "Nome": "Hopium - Sunglasses",
                "Autores": "Hopium",
                "Artes": "Storage/23-05-2018/1.1497605854/Hopium_-_Sunglasses.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Hopium_-_Sunglasses.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10886,
                "Nome": "Marshmello, Juicy J & James Arthur - You Can Cry",
                "Autores": "Marshmello, Juicy J & James Arthur",
                "Artes": "Storage/23-05-2018/1.1497605854/Marshmello,_Juicy_J_&_James_Arthur_-_You_Can_Cry.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Marshmello,_Juicy_J_&_James_Arthur_-_You_Can_Cry.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10887,
                "Nome": "Diplo - Stay Open (feat. MÃ˜)",
                "Autores": "Diplo",
                "Artes": "Storage/23-05-2018/1.1497605854/Diplo_-_Stay_Open_(feat._MÃ˜).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Diplo_-_Stay_Open_(feat._MÃ˜).mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10888,
                "Nome": "The Chainsmokers - Sick Boy",
                "Autores": "The Chainsmokers",
                "Artes": "Storage/23-05-2018/1.1497605854/The_Chainsmokers_-_Sick_Boy.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/The_Chainsmokers_-_Sick_Boy.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10889,
                "Nome": "Lemaitre - Rocket Girl (feat. Betty Who)",
                "Autores": "Lemaitre",
                "Artes": "Storage/23-05-2018/1.1497605854/Lemaitre_-_Rocket_Girl_(feat._Betty_Who).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Lemaitre_-_Rocket_Girl_(feat._Betty_Who).mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10890,
                "Nome": "Hayden James - Just Friends (feat. Boy Matthews)",
                "Autores": "Hayden James",
                "Artes": "Storage/23-05-2018/1.1497605854/Hayden_James_-_Just_Friends_(feat._Boy_Matthews).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Hayden_James_-_Just_Friends_(feat._Boy_Matthews).mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10891,
                "Nome": "Janelle MonÃ¡e - Make Me Feel",
                "Autores": "Janelle MonÃ¡e",
                "Artes": "Storage/23-05-2018/1.1497605854/Janelle_MonÃ¡e_-_Make_Me_Feel.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Janelle_MonÃ¡e_-_Make_Me_Feel.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10892,
                "Nome": "Duke Dumont, Ebenezer - Inhale",
                "Autores": "Duke Dumont, Ebenezer",
                "Artes": "Storage/23-05-2018/1.1497605854/Duke_Dumont,_Ebenezer_-_Inhale.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Duke_Dumont,_Ebenezer_-_Inhale.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10893,
                "Nome": "Antony & Cleopatra - The Islands",
                "Autores": "Antony & Cleopatra",
                "Artes": "Storage/23-05-2018/1.1497605854/Antony_&_Cleopatra_-_The_Islands.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Antony_&_Cleopatra_-_The_Islands.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10894,
                "Nome": "Client Liaison - Survival In The City",
                "Autores": "Client Liaison",
                "Artes": "Storage/23-05-2018/1.1497605854/Client_Liaison_-_Survival_In_The_City.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Client_Liaison_-_Survival_In_The_City.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10895,
                "Nome": "Alison Wonderland - Easy",
                "Autores": "Alison Wonderland",
                "Artes": "Storage/23-05-2018/1.1497605854/Alison_Wonderland_-_Easy.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Alison_Wonderland_-_Easy.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10896,
                "Nome": "Kllo - Potential",
                "Autores": "Kllo",
                "Artes": "Storage/23-05-2018/1.1497605854/Kllo_-_Potential.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Kllo_-_Potential.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10897,
                "Nome": "LSD - Genius (feat. Sia, Diplo & Labrinth)",
                "Autores": "LSD",
                "Artes": "Storage/23-05-2018/1.1497605854/LSD_-_Genius_(feat._Sia,_Diplo_&_Labrinth).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/LSD_-_Genius_(feat._Sia,_Diplo_&_Labrinth).mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10898,
                "Nome": "Mansionair - Violet City",
                "Autores": "Mansionair",
                "Artes": "Storage/23-05-2018/1.1497605854/Mansionair_-_Violet_City.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Mansionair_-_Violet_City.mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              },
              {
                "IdeObra": 10899,
                "Nome": "Ukiyo - Go (feat. Chymes)",
                "Autores": "Ukiyo",
                "Artes": "Storage/23-05-2018/1.1497605854/Ukiyo_-_Go_(feat._Chymes).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Ukiyo_-_Go_(feat._Chymes).mp3",
                "DtCriacao": "24/05/2018 00:05:41"
              }
            ],
            "IdeColetanea": 10462,
            "DtCriacao": "25/05/2018 20:56:32",
            "HashCode": null
          },
          {
            "Nome": "2018 05 maio 02",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 10831,
                "Nome": "Danny Cruz - Life Saver (Original Mix)",
                "Autores": "Danny Cruz",
                "Artes": "Storage/09-05-2018/1.-2126474627/Danny_Cruz_-_Life_Saver_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/1.-2126474627/Danny_Cruz_-_Life_Saver_(Original_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:33"
              },
              {
                "IdeObra": 10832,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Dj Kone & Marc Palacios Remix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/2.-1773872184/Dani_Masi_-_Walking_Away_feat._Robin_White_(Dj_Kone_&_Marc_Palacios_Remix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/2.-1773872184/Dani_Masi_-_Walking_Away_feat._Robin_White_(Dj_Kone_&_Marc_Palacios_Remix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10833,
                "Nome": "David Aurel - Lost In The Desert (Original Mix) ",
                "Autores": "David Aurel",
                "Artes": "Storage/09-05-2018/3.-1142862804/David_Aurel_-_Lost_In_The_Desert_(Original_Mix)_.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/3.-1142862804/David_Aurel_-_Lost_In_The_Desert_(Original_Mix)_.mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10834,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Nesco Remix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/4.-1072972285/Dani_Masi_-_Walking_Away_feat._Robin_White_(Nesco_Remix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/4.-1072972285/Dani_Masi_-_Walking_Away_feat._Robin_White_(Nesco_Remix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10835,
                "Nome": "Dario D'Attis & Definition - Dreamcatcher feat. Jinadu (Original Mix)",
                "Autores": "Dario D'Attis & Definition",
                "Artes": "Storage/09-05-2018/5.-718917676/Dario_D_Attis_&_Definition_-_Dreamcatcher_feat._Jinadu_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/5.-718917676/Dario_D_Attis_&_Definition_-_Dreamcatcher_feat._Jinadu_(Original_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10836,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Original Mix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/6.-72733062/Dani_Masi_-_Walking_Away_feat._Robin_White_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/6.-72733062/Dani_Masi_-_Walking_Away_feat._Robin_White_(Original_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10837,
                "Nome": "David Morales - Back Home feat. Alex Uhlmann (David Morales Red Zone Mix)",
                "Autores": "David Morales",
                "Artes": "Storage/09-05-2018/7.13967910/David_Morales_-_Back_Home_feat._Alex_Uhlmann_(David_Morales_Red_Zone_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/7.13967910/David_Morales_-_Back_Home_feat._Alex_Uhlmann_(David_Morales_Red_Zone_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:35"
              },
              {
                "IdeObra": 10838,
                "Nome": "Harry Romero - Poema (Extended Mix)",
                "Autores": "Harry Romero",
                "Artes": "Storage/09-05-2018/8.381431735/Harry_Romero_-_Poema_(Extended_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/8.381431735/Harry_Romero_-_Poema_(Extended_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10839,
                "Nome": "Doc Martin, Jeff El Jefe - Corazon ",
                "Autores": "Doc Martin, Jeff El Jefe",
                "Artes": "Storage/09-05-2018/9.1021174782/Doc_Martin,_Jeff_El_Jefe_-_Corazon_.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/9.1021174782/Doc_Martin,_Jeff_El_Jefe_-_Corazon_.mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10840,
                "Nome": "Franky Rizardo - Revoke (Original Mix)",
                "Autores": "Franky Rizardo",
                "Artes": "Storage/09-05-2018/10.1134198344/Franky_Rizardo_-_Revoke_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/10.1134198344/Franky_Rizardo_-_Revoke_(Original_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10841,
                "Nome": "The Golden Boy - Stigma (Original Mix) ",
                "Autores": "The Golden Boy",
                "Artes": "Storage/09-05-2018/11.1747312888/The_Golden_Boy_-_Stigma_(Original_Mix)_.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/11.1747312888/The_Golden_Boy_-_Stigma_(Original_Mix)_.mp3",
                "DtCriacao": "10/05/2018 00:13:35"
              },
              {
                "IdeObra": 10842,
                "Nome": "Hazzaro - Satisfaction",
                "Autores": "Hazzaro",
                "Artes": "Storage/09-05-2018/12.2115954470/Hazzaro_-_Satisfaction.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/12.2115954470/Hazzaro_-_Satisfaction.mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10843,
                "Nome": "Prok & Fitch - Whisky Den (Original Mix)",
                "Autores": "Prok & Fitch",
                "Artes": "Storage/09-05-2018/13.-2086829046/Prok_&_Fitch_-_Whisky_Den_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/13.-2086829046/Prok_&_Fitch_-_Whisky_Den_(Original_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10844,
                "Nome": "Danny Serrano - Fuck Duck",
                "Autores": "Danny Serrano",
                "Artes": "Storage/09-05-2018/14.-1461486160/Danny_Serrano_-_Fuck_Duck.jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/14.-1461486160/Danny_Serrano_-_Fuck_Duck.mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10845,
                "Nome": "Dennis Ferrer, Skream - Old Yella (Original Mix)",
                "Autores": "Dennis Ferrer, Skream",
                "Artes": "Storage/09-05-2018/15.-1115429976/Dennis_Ferrer,_Skream_-_Old_Yella_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/15.-1115429976/Dennis_Ferrer,_Skream_-_Old_Yella_(Original_Mix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              },
              {
                "IdeObra": 10846,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Juan Valencia Remix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/16.-1023875920/Dani_Masi_-_Walking_Away_feat._Robin_White_(Juan_Valencia_Remix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/09-05-2018/16.-1023875920/Dani_Masi_-_Walking_Away_feat._Robin_White_(Juan_Valencia_Remix).mp3",
                "DtCriacao": "10/05/2018 00:13:34"
              }
            ],
            "IdeColetanea": 10418,
            "DtCriacao": "10/05/2018 02:45:39",
            "HashCode": null
          },
          {
            "Nome": "test 01",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 811,
                "Nome": "Micky Friedmann, Pat Bernetti  - Eye of the Tiger (Original Mix)",
                "Autores": "Micky Friedmann, Pat Bernetti ",
                "Artes": "Storage/22-04-2018/1.-1200679655/Micky_Friedmann,_Pat_Bernetti__-_Eye_of_the_Tiger_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/22-04-2018/1.-1200679655/Micky_Friedmann,_Pat_Bernetti__-_Eye_of_the_Tiger_(Original_Mix).mp3",
                "DtCriacao": "21/04/2018 18:36:15"
              },
              {
                "IdeObra": 815,
                "Nome": "Pedro Pons, Esteban Lopez - Children (Original Mix)",
                "Autores": "Pedro Pons, Esteban Lopez",
                "Artes": "Storage/22-04-2018/1.-1200679655/Pedro_Pons,_Esteban_Lopez_-_Children_(Original_Mix).jpg",
                "Duracao": "00:00:00",
                "Arquivo": "Storage/22-04-2018/1.-1200679655/Pedro_Pons,_Esteban_Lopez_-_Children_(Original_Mix).mp3",
                "DtCriacao": "21/04/2018 18:36:15"
              }
            ],
            "IdeColetanea": 10398,
            "DtCriacao": "27/04/2018 02:24:04",
            "HashCode": null
          }
        ]
      }


  }

}
