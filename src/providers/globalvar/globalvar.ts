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
  public gvMinhaLista:any;

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
            "Nome": "Coletanea 1537036240209",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 10816,
                "Nome": "Matija - I'm Still Here (Original Mix)",
                "Autores": "Matija",
                "Artes": "Storage/04-05-2018/1.1099140037/Matija_-_I_m_Still_Here_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Matija_-_I_m_Still_Here_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10817,
                "Nome": "Adri Block - Watcha Gonna Do (Original Mix)",
                "Autores": "Adri Block",
                "Artes": "Storage/04-05-2018/1.1099140037/Adri_Block_-_Watcha_Gonna_Do_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Adri_Block_-_Watcha_Gonna_Do_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495966000)/"
              },
              {
                "IdeObra": 10818,
                "Nome": "Marc De Vole - Into The Fire (Original Mix)",
                "Autores": "Marc De Vole",
                "Artes": "Storage/04-05-2018/1.1099140037/Marc_De_Vole_-_Into_The_Fire_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Marc_De_Vole_-_Into_The_Fire_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10819,
                "Nome": "Henry Saiz - September (Original Mix)",
                "Autores": "Henry Saiz",
                "Artes": "Storage/04-05-2018/1.1099140037/Henry_Saiz_-_September_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Henry_Saiz_-_September_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10820,
                "Nome": "Mirko & Meex - Deep Inside (Original Mix)",
                "Autores": "Mirko & Meex",
                "Artes": "Storage/04-05-2018/1.1099140037/Mirko_&_Meex_-_Deep_Inside_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Mirko_&_Meex_-_Deep_Inside_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10821,
                "Nome": "Sander Kleinenberg, George McCrae - Colours In The Sun (Extended Mix) ",
                "Autores": "Sander Kleinenberg, George McCrae",
                "Artes": "Storage/04-05-2018/1.1099140037/Sander_Kleinenberg,_George_McCrae_-_Colours_In_The_Sun_(Extended_Mix)_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Sander_Kleinenberg,_George_McCrae_-_Colours_In_The_Sun_(Extended_Mix)_.mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10822,
                "Nome": "Ferreck Dawn & Robosonic - In Arms (Extended Mix)",
                "Autores": "Ferreck Dawn & Robosonic",
                "Artes": "Storage/04-05-2018/1.1099140037/Ferreck_Dawn_&_Robosonic_-_In_Arms_(Extended_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Ferreck_Dawn_&_Robosonic_-_In_Arms_(Extended_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10823,
                "Nome": "Claptone - In the Night (Original Mix)",
                "Autores": "Claptone",
                "Artes": "Storage/04-05-2018/1.1099140037/Claptone_-_In_the_Night_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Claptone_-_In_the_Night_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495966000)/"
              },
              {
                "IdeObra": 10824,
                "Nome": "Valentin Ilie - Belief (Misha Klein & No Hopes Remix) ",
                "Autores": "Valentin Ilie",
                "Artes": "Storage/04-05-2018/1.1099140037/Valentin_Ilie_-_Belief_(Misha_Klein_&_No_Hopes_Remix)_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Valentin_Ilie_-_Belief_(Misha_Klein_&_No_Hopes_Remix)_.mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10825,
                "Nome": "Electronic Male - Love We Had (Original Mix)",
                "Autores": "Electronic Male",
                "Artes": "Storage/04-05-2018/1.1099140037/Electronic_Male_-_Love_We_Had_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Electronic_Male_-_Love_We_Had_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10826,
                "Nome": "DJ Pierre - I Love the Way (Original Mix)",
                "Autores": "DJ Pierre",
                "Artes": "Storage/04-05-2018/1.1099140037/DJ_Pierre_-_I_Love_the_Way_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/DJ_Pierre_-_I_Love_the_Way_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495966000)/"
              },
              {
                "IdeObra": 10827,
                "Nome": "Kevin Di Serna - Horizons (Original Mix)",
                "Autores": "Kevin Di Serna",
                "Artes": "Storage/04-05-2018/1.1099140037/Kevin_Di_Serna_-_Horizons_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Kevin_Di_Serna_-_Horizons_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10828,
                "Nome": "Eagles & Butterflies - The Last Dance (Original Mix)",
                "Autores": "Eagles & Butterflies",
                "Artes": "Storage/04-05-2018/1.1099140037/Eagles_&_Butterflies_-_The_Last_Dance_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Eagles_&_Butterflies_-_The_Last_Dance_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525495966000)/"
              },
              {
                "IdeObra": 10829,
                "Nome": "Max Marinacci feat. Rescue Poetix - How Brutal This Love (Original Mix) ",
                "Autores": "Max Marinacci feat. Rescue Poetix",
                "Artes": "Storage/04-05-2018/1.1099140037/Max_Marinacci_feat._Rescue_Poetix_-_How_Brutal_This_Love_(Original_Mix)_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Max_Marinacci_feat._Rescue_Poetix_-_How_Brutal_This_Love_(Original_Mix)_.mp3",
                "DtCriacao": "/Date(1525495967000)/"
              },
              {
                "IdeObra": 10830,
                "Nome": "Kathy Brown, DnA Studios - You Give Good Love (DnA Funky Bass Mix)",
                "Autores": "Kathy Brown, DnA Studios",
                "Artes": "Storage/04-05-2018/1.1099140037/Kathy_Brown,_DnA_Studios_-_You_Give_Good_Love_(DnA_Funky_Bass_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/04-05-2018/1.1099140037/Kathy_Brown,_DnA_Studios_-_You_Give_Good_Love_(DnA_Funky_Bass_Mix).mp3",
                "DtCriacao": "/Date(1525495967000)/"
              }
            ],
            "IdeColetanea": 10468,
            "DtCriacao": "/Date(1537054243000)/",
            "HashCode": null
          },
          {
            "Nome": "Gera Capa 27/05/2018",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 10885,
                "Nome": "Hopium - Sunglasses",
                "Autores": "Hopium",
                "Artes": "Storage/23-05-2018/1.1497605854/Hopium_-_Sunglasses.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Hopium_-_Sunglasses.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10886,
                "Nome": "Marshmello, Juicy J & James Arthur - You Can Cry",
                "Autores": "Marshmello, Juicy J & James Arthur",
                "Artes": "Storage/23-05-2018/1.1497605854/Marshmello,_Juicy_J_&_James_Arthur_-_You_Can_Cry.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Marshmello,_Juicy_J_&_James_Arthur_-_You_Can_Cry.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10887,
                "Nome": "Diplo - Stay Open (feat. MÃ˜)",
                "Autores": "Diplo",
                "Artes": "Storage/23-05-2018/1.1497605854/Diplo_-_Stay_Open_(feat._MÃ˜).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Diplo_-_Stay_Open_(feat._MÃ˜).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10888,
                "Nome": "The Chainsmokers - Sick Boy",
                "Autores": "The Chainsmokers",
                "Artes": "Storage/23-05-2018/1.1497605854/The_Chainsmokers_-_Sick_Boy.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/The_Chainsmokers_-_Sick_Boy.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10889,
                "Nome": "Lemaitre - Rocket Girl (feat. Betty Who)",
                "Autores": "Lemaitre",
                "Artes": "Storage/23-05-2018/1.1497605854/Lemaitre_-_Rocket_Girl_(feat._Betty_Who).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Lemaitre_-_Rocket_Girl_(feat._Betty_Who).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10890,
                "Nome": "Hayden James - Just Friends (feat. Boy Matthews)",
                "Autores": "Hayden James",
                "Artes": "Storage/23-05-2018/1.1497605854/Hayden_James_-_Just_Friends_(feat._Boy_Matthews).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Hayden_James_-_Just_Friends_(feat._Boy_Matthews).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10891,
                "Nome": "Janelle MonÃ¡e - Make Me Feel",
                "Autores": "Janelle MonÃ¡e",
                "Artes": "Storage/23-05-2018/1.1497605854/Janelle_MonÃ¡e_-_Make_Me_Feel.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Janelle_MonÃ¡e_-_Make_Me_Feel.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10892,
                "Nome": "Duke Dumont, Ebenezer - Inhale",
                "Autores": "Duke Dumont, Ebenezer",
                "Artes": "Storage/23-05-2018/1.1497605854/Duke_Dumont,_Ebenezer_-_Inhale.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Duke_Dumont,_Ebenezer_-_Inhale.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10893,
                "Nome": "Antony & Cleopatra - The Islands",
                "Autores": "Antony & Cleopatra",
                "Artes": "Storage/23-05-2018/1.1497605854/Antony_&_Cleopatra_-_The_Islands.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Antony_&_Cleopatra_-_The_Islands.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10894,
                "Nome": "Client Liaison - Survival In The City",
                "Autores": "Client Liaison",
                "Artes": "Storage/23-05-2018/1.1497605854/Client_Liaison_-_Survival_In_The_City.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Client_Liaison_-_Survival_In_The_City.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10895,
                "Nome": "Alison Wonderland - Easy",
                "Autores": "Alison Wonderland",
                "Artes": "Storage/23-05-2018/1.1497605854/Alison_Wonderland_-_Easy.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Alison_Wonderland_-_Easy.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10896,
                "Nome": "Kllo - Potential",
                "Autores": "Kllo",
                "Artes": "Storage/23-05-2018/1.1497605854/Kllo_-_Potential.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Kllo_-_Potential.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10897,
                "Nome": "LSD - Genius (feat. Sia, Diplo & Labrinth)",
                "Autores": "LSD",
                "Artes": "Storage/23-05-2018/1.1497605854/LSD_-_Genius_(feat._Sia,_Diplo_&_Labrinth).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/LSD_-_Genius_(feat._Sia,_Diplo_&_Labrinth).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10898,
                "Nome": "Mansionair - Violet City",
                "Autores": "Mansionair",
                "Artes": "Storage/23-05-2018/1.1497605854/Mansionair_-_Violet_City.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Mansionair_-_Violet_City.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10899,
                "Nome": "Ukiyo - Go (feat. Chymes)",
                "Autores": "Ukiyo",
                "Artes": "Storage/23-05-2018/1.1497605854/Ukiyo_-_Go_(feat._Chymes).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Ukiyo_-_Go_(feat._Chymes).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              }
            ],
            "IdeColetanea": 10463,
            "DtCriacao": "/Date(1527319643000)/",
            "HashCode": null
          },
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
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Hopium_-_Sunglasses.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10886,
                "Nome": "Marshmello, Juicy J & James Arthur - You Can Cry",
                "Autores": "Marshmello, Juicy J & James Arthur",
                "Artes": "Storage/23-05-2018/1.1497605854/Marshmello,_Juicy_J_&_James_Arthur_-_You_Can_Cry.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Marshmello,_Juicy_J_&_James_Arthur_-_You_Can_Cry.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10887,
                "Nome": "Diplo - Stay Open (feat. MÃ˜)",
                "Autores": "Diplo",
                "Artes": "Storage/23-05-2018/1.1497605854/Diplo_-_Stay_Open_(feat._MÃ˜).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Diplo_-_Stay_Open_(feat._MÃ˜).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10888,
                "Nome": "The Chainsmokers - Sick Boy",
                "Autores": "The Chainsmokers",
                "Artes": "Storage/23-05-2018/1.1497605854/The_Chainsmokers_-_Sick_Boy.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/The_Chainsmokers_-_Sick_Boy.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10889,
                "Nome": "Lemaitre - Rocket Girl (feat. Betty Who)",
                "Autores": "Lemaitre",
                "Artes": "Storage/23-05-2018/1.1497605854/Lemaitre_-_Rocket_Girl_(feat._Betty_Who).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Lemaitre_-_Rocket_Girl_(feat._Betty_Who).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10890,
                "Nome": "Hayden James - Just Friends (feat. Boy Matthews)",
                "Autores": "Hayden James",
                "Artes": "Storage/23-05-2018/1.1497605854/Hayden_James_-_Just_Friends_(feat._Boy_Matthews).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Hayden_James_-_Just_Friends_(feat._Boy_Matthews).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10891,
                "Nome": "Janelle MonÃ¡e - Make Me Feel",
                "Autores": "Janelle MonÃ¡e",
                "Artes": "Storage/23-05-2018/1.1497605854/Janelle_MonÃ¡e_-_Make_Me_Feel.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Janelle_MonÃ¡e_-_Make_Me_Feel.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10892,
                "Nome": "Duke Dumont, Ebenezer - Inhale",
                "Autores": "Duke Dumont, Ebenezer",
                "Artes": "Storage/23-05-2018/1.1497605854/Duke_Dumont,_Ebenezer_-_Inhale.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Duke_Dumont,_Ebenezer_-_Inhale.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10893,
                "Nome": "Antony & Cleopatra - The Islands",
                "Autores": "Antony & Cleopatra",
                "Artes": "Storage/23-05-2018/1.1497605854/Antony_&_Cleopatra_-_The_Islands.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Antony_&_Cleopatra_-_The_Islands.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10894,
                "Nome": "Client Liaison - Survival In The City",
                "Autores": "Client Liaison",
                "Artes": "Storage/23-05-2018/1.1497605854/Client_Liaison_-_Survival_In_The_City.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Client_Liaison_-_Survival_In_The_City.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10895,
                "Nome": "Alison Wonderland - Easy",
                "Autores": "Alison Wonderland",
                "Artes": "Storage/23-05-2018/1.1497605854/Alison_Wonderland_-_Easy.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Alison_Wonderland_-_Easy.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10896,
                "Nome": "Kllo - Potential",
                "Autores": "Kllo",
                "Artes": "Storage/23-05-2018/1.1497605854/Kllo_-_Potential.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Kllo_-_Potential.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10897,
                "Nome": "LSD - Genius (feat. Sia, Diplo & Labrinth)",
                "Autores": "LSD",
                "Artes": "Storage/23-05-2018/1.1497605854/LSD_-_Genius_(feat._Sia,_Diplo_&_Labrinth).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/LSD_-_Genius_(feat._Sia,_Diplo_&_Labrinth).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10898,
                "Nome": "Mansionair - Violet City",
                "Autores": "Mansionair",
                "Artes": "Storage/23-05-2018/1.1497605854/Mansionair_-_Violet_City.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Mansionair_-_Violet_City.mp3",
                "DtCriacao": "/Date(1527131141000)/"
              },
              {
                "IdeObra": 10899,
                "Nome": "Ukiyo - Go (feat. Chymes)",
                "Autores": "Ukiyo",
                "Artes": "Storage/23-05-2018/1.1497605854/Ukiyo_-_Go_(feat._Chymes).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/23-05-2018/1.1497605854/Ukiyo_-_Go_(feat._Chymes).mp3",
                "DtCriacao": "/Date(1527131141000)/"
              }
            ],
            "IdeColetanea": 10462,
            "DtCriacao": "/Date(1527292592000)/",
            "HashCode": null
          },
          {
            "Nome": "pvt GUAREBER RECORDINGS UNRELEASED MIXES 6",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 10847,
                "Nome": "Mauro Mozart, Breno Barreto - Don't Stop Moving (Mauro Mozart Instrumental Unreleased Mix)",
                "Autores": "Mauro Mozart, Breno Barreto",
                "Artes": "Storage/15-05-2018/1.433127897/Mauro_Mozart,_Breno_Barreto_-_Don_t_Stop_Moving_(Mauro_Mozart_Instrumental_Unreleased_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/15-05-2018/1.433127897/Mauro_Mozart,_Breno_Barreto_-_Don_t_Stop_Moving_(Mauro_Mozart_Instrumental_Unreleased_Mix).mp3",
                "DtCriacao": "/Date(1526439009000)/"
              },
              {
                "IdeObra": 10848,
                "Nome": "Nacho Chapado, Junior Senna - Don't Let Go (Instrumental Unreleased Mix)",
                "Autores": "Nacho Chapado, Junior Senna",
                "Artes": "Storage/15-05-2018/1.433127897/Nacho_Chapado,_Junior_Senna_-_Don_t_Let_Go_(Instrumental_Unreleased_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/15-05-2018/1.433127897/Nacho_Chapado,_Junior_Senna_-_Don_t_Let_Go_(Instrumental_Unreleased_Mix).mp3",
                "DtCriacao": "/Date(1526439009000)/"
              },
              {
                "IdeObra": 10849,
                "Nome": "Mauro Mozart, Thomas Solvert, Rob Phillips - This Love Never Ends (Mauro Mozart Instrumental Unreleased Mix)",
                "Autores": "Mauro Mozart, Thomas Solvert, Rob Phillips",
                "Artes": "Storage/15-05-2018/1.433127897/Mauro_Mozart,_Thomas_Solvert,_Rob_Phillips_-_This_Love_Never_Ends_(Mauro_Mozart_Instrumental_Unreleased_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/15-05-2018/1.433127897/Mauro_Mozart,_Thomas_Solvert,_Rob_Phillips_-_This_Love_Never_Ends_(Mauro_Mozart_Instrumental_Unreleased_Mix).mp3",
                "DtCriacao": "/Date(1526439009000)/"
              },
              {
                "IdeObra": 10850,
                "Nome": "Mauro Mozart, Nacho Chapado - The Stars (Instrumental Unreleased Mix)",
                "Autores": "Mauro Mozart, Nacho Chapado",
                "Artes": "Storage/15-05-2018/1.433127897/Mauro_Mozart,_Nacho_Chapado_-_The_Stars_(Instrumental_Unreleased_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/15-05-2018/1.433127897/Mauro_Mozart,_Nacho_Chapado_-_The_Stars_(Instrumental_Unreleased_Mix).mp3",
                "DtCriacao": "/Date(1526439009000)/"
              }
            ],
            "IdeColetanea": 10427,
            "DtCriacao": "/Date(1526451853000)/",
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
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/1.-2126474627/Danny_Cruz_-_Life_Saver_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525922013000)/"
              },
              {
                "IdeObra": 10832,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Dj Kone & Marc Palacios Remix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/2.-1773872184/Dani_Masi_-_Walking_Away_feat._Robin_White_(Dj_Kone_&_Marc_Palacios_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/2.-1773872184/Dani_Masi_-_Walking_Away_feat._Robin_White_(Dj_Kone_&_Marc_Palacios_Remix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10833,
                "Nome": "David Aurel - Lost In The Desert (Original Mix) ",
                "Autores": "David Aurel",
                "Artes": "Storage/09-05-2018/3.-1142862804/David_Aurel_-_Lost_In_The_Desert_(Original_Mix)_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/3.-1142862804/David_Aurel_-_Lost_In_The_Desert_(Original_Mix)_.mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10834,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Nesco Remix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/4.-1072972285/Dani_Masi_-_Walking_Away_feat._Robin_White_(Nesco_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/4.-1072972285/Dani_Masi_-_Walking_Away_feat._Robin_White_(Nesco_Remix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10835,
                "Nome": "Dario D'Attis & Definition - Dreamcatcher feat. Jinadu (Original Mix)",
                "Autores": "Dario D'Attis & Definition",
                "Artes": "Storage/09-05-2018/5.-718917676/Dario_D_Attis_&_Definition_-_Dreamcatcher_feat._Jinadu_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/5.-718917676/Dario_D_Attis_&_Definition_-_Dreamcatcher_feat._Jinadu_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10836,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Original Mix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/6.-72733062/Dani_Masi_-_Walking_Away_feat._Robin_White_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/6.-72733062/Dani_Masi_-_Walking_Away_feat._Robin_White_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10837,
                "Nome": "David Morales - Back Home feat. Alex Uhlmann (David Morales Red Zone Mix)",
                "Autores": "David Morales",
                "Artes": "Storage/09-05-2018/7.13967910/David_Morales_-_Back_Home_feat._Alex_Uhlmann_(David_Morales_Red_Zone_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/7.13967910/David_Morales_-_Back_Home_feat._Alex_Uhlmann_(David_Morales_Red_Zone_Mix).mp3",
                "DtCriacao": "/Date(1525922015000)/"
              },
              {
                "IdeObra": 10838,
                "Nome": "Harry Romero - Poema (Extended Mix)",
                "Autores": "Harry Romero",
                "Artes": "Storage/09-05-2018/8.381431735/Harry_Romero_-_Poema_(Extended_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/8.381431735/Harry_Romero_-_Poema_(Extended_Mix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10839,
                "Nome": "Doc Martin, Jeff El Jefe - Corazon ",
                "Autores": "Doc Martin, Jeff El Jefe",
                "Artes": "Storage/09-05-2018/9.1021174782/Doc_Martin,_Jeff_El_Jefe_-_Corazon_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/9.1021174782/Doc_Martin,_Jeff_El_Jefe_-_Corazon_.mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10840,
                "Nome": "Franky Rizardo - Revoke (Original Mix)",
                "Autores": "Franky Rizardo",
                "Artes": "Storage/09-05-2018/10.1134198344/Franky_Rizardo_-_Revoke_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/10.1134198344/Franky_Rizardo_-_Revoke_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10841,
                "Nome": "The Golden Boy - Stigma (Original Mix) ",
                "Autores": "The Golden Boy",
                "Artes": "Storage/09-05-2018/11.1747312888/The_Golden_Boy_-_Stigma_(Original_Mix)_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/11.1747312888/The_Golden_Boy_-_Stigma_(Original_Mix)_.mp3",
                "DtCriacao": "/Date(1525922015000)/"
              },
              {
                "IdeObra": 10842,
                "Nome": "Hazzaro - Satisfaction",
                "Autores": "Hazzaro",
                "Artes": "Storage/09-05-2018/12.2115954470/Hazzaro_-_Satisfaction.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/12.2115954470/Hazzaro_-_Satisfaction.mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10843,
                "Nome": "Prok & Fitch - Whisky Den (Original Mix)",
                "Autores": "Prok & Fitch",
                "Artes": "Storage/09-05-2018/13.-2086829046/Prok_&_Fitch_-_Whisky_Den_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/13.-2086829046/Prok_&_Fitch_-_Whisky_Den_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10844,
                "Nome": "Danny Serrano - Fuck Duck",
                "Autores": "Danny Serrano",
                "Artes": "Storage/09-05-2018/14.-1461486160/Danny_Serrano_-_Fuck_Duck.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/14.-1461486160/Danny_Serrano_-_Fuck_Duck.mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10845,
                "Nome": "Dennis Ferrer, Skream - Old Yella (Original Mix)",
                "Autores": "Dennis Ferrer, Skream",
                "Artes": "Storage/09-05-2018/15.-1115429976/Dennis_Ferrer,_Skream_-_Old_Yella_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/15.-1115429976/Dennis_Ferrer,_Skream_-_Old_Yella_(Original_Mix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              },
              {
                "IdeObra": 10846,
                "Nome": "Dani Masi - Walking Away feat. Robin White (Juan Valencia Remix)",
                "Autores": "Dani Masi",
                "Artes": "Storage/09-05-2018/16.-1023875920/Dani_Masi_-_Walking_Away_feat._Robin_White_(Juan_Valencia_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/09-05-2018/16.-1023875920/Dani_Masi_-_Walking_Away_feat._Robin_White_(Juan_Valencia_Remix).mp3",
                "DtCriacao": "/Date(1525922014000)/"
              }
            ],
            "IdeColetanea": 10418,
            "DtCriacao": "/Date(1525931139000)/",
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
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/22-04-2018/1.-1200679655/Micky_Friedmann,_Pat_Bernetti__-_Eye_of_the_Tiger_(Original_Mix).mp3",
                "DtCriacao": "/Date(1524346575000)/"
              },
              {
                "IdeObra": 815,
                "Nome": "Pedro Pons, Esteban Lopez - Children (Original Mix)",
                "Autores": "Pedro Pons, Esteban Lopez",
                "Artes": "Storage/22-04-2018/1.-1200679655/Pedro_Pons,_Esteban_Lopez_-_Children_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/22-04-2018/1.-1200679655/Pedro_Pons,_Esteban_Lopez_-_Children_(Original_Mix).mp3",
                "DtCriacao": "/Date(1524346575000)/"
              }
            ],
            "IdeColetanea": 10398,
            "DtCriacao": "/Date(1524806644000)/",
            "HashCode": null
          },
          {
            "Nome": "Coletanea 1524286117083",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 468,
                "Nome": "Sergio Fernandez - Outer Space (Original Mix)",
                "Autores": "Sergio Fernandez",
                "Artes": "Storage/10-03-2018/1.1858088494/Sergio_Fernandez_-_Outer_Space_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/1.1858088494/Sergio_Fernandez_-_Outer_Space_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 469,
                "Nome": "Kinnerman - Horns & Hats (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Horns_&_Hats_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Horns_&_Hats_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 470,
                "Nome": "Kinnerman - Sexy Shit (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Sexy_Shit_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Sexy_Shit_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 471,
                "Nome": "Sergio Fernandez - Star Alliance (Original Mix)",
                "Autores": "Sergio Fernandez",
                "Artes": "Storage/10-03-2018/3.-1768976086/Sergio_Fernandez_-_Star_Alliance_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/3.-1768976086/Sergio_Fernandez_-_Star_Alliance_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 472,
                "Nome": "Kinnerman - Dominator (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/4.-1174919095/Kinnerman_-_Dominator_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/4.-1174919095/Kinnerman_-_Dominator_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 473,
                "Nome": "Roland Clark - House Will Survive (Original Mix)",
                "Autores": "Roland Clark",
                "Artes": "Storage/10-03-2018/5.-859038841/Roland_Clark_-_House_Will_Survive_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/5.-859038841/Roland_Clark_-_House_Will_Survive_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 474,
                "Nome": "Mike Ivy - Get Up (Everybody) (Original Mix)",
                "Autores": "Mike Ivy",
                "Artes": "Storage/10-03-2018/6.-538624254/Mike_Ivy_-_Get_Up_(Everybody)_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/6.-538624254/Mike_Ivy_-_Get_Up_(Everybody)_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 475,
                "Nome": "Kinnerman - Gimme Some (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/7.-519770341/Kinnerman_-_Gimme_Some_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/7.-519770341/Kinnerman_-_Gimme_Some_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 476,
                "Nome": "Roland Clark - House Will Survive (Ant LaRock Edit)",
                "Autores": "Roland Clark",
                "Artes": "Storage/10-03-2018/8.-196932656/Roland_Clark_-_House_Will_Survive_(Ant_LaRock_Edit).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/8.-196932656/Roland_Clark_-_House_Will_Survive_(Ant_LaRock_Edit).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 477,
                "Nome": "Danny Wild & Alexdoparis - Disco Smoke (Original Mix) ",
                "Autores": "Danny Wild & Alexdoparis",
                "Artes": "Storage/10-03-2018/9.132138716/Danny_Wild_&_Alexdoparis_-_Disco_Smoke_(Original_Mix)_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/9.132138716/Danny_Wild_&_Alexdoparis_-_Disco_Smoke_(Original_Mix)_.mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 478,
                "Nome": "Marsal Ventura - Linda (Victor Guez Remix)",
                "Autores": "Marsal Ventura",
                "Artes": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Victor_Guez_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Victor_Guez_Remix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 479,
                "Nome": "Marsal Ventura - Linda (G4BBA Remix)",
                "Autores": "Marsal Ventura",
                "Artes": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(G4BBA_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(G4BBA_Remix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 480,
                "Nome": "Marsal Ventura - Linda (Arny Vilax Remix)",
                "Autores": "Marsal Ventura",
                "Artes": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Arny_Vilax_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Arny_Vilax_Remix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              }
            ],
            "IdeColetanea": 395,
            "DtCriacao": "/Date(1524304120000)/",
            "HashCode": null
          },
          {
            "Nome": "Coletanea 1520796835119",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 468,
                "Nome": "Sergio Fernandez - Outer Space (Original Mix)",
                "Autores": "Sergio Fernandez",
                "Artes": "Storage/10-03-2018/1.1858088494/Sergio_Fernandez_-_Outer_Space_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/1.1858088494/Sergio_Fernandez_-_Outer_Space_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 469,
                "Nome": "Kinnerman - Horns & Hats (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Horns_&_Hats_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Horns_&_Hats_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 470,
                "Nome": "Kinnerman - Sexy Shit (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Sexy_Shit_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/2.1908643700/Kinnerman_-_Sexy_Shit_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 471,
                "Nome": "Sergio Fernandez - Star Alliance (Original Mix)",
                "Autores": "Sergio Fernandez",
                "Artes": "Storage/10-03-2018/3.-1768976086/Sergio_Fernandez_-_Star_Alliance_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/3.-1768976086/Sergio_Fernandez_-_Star_Alliance_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 472,
                "Nome": "Kinnerman - Dominator (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/4.-1174919095/Kinnerman_-_Dominator_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/4.-1174919095/Kinnerman_-_Dominator_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 473,
                "Nome": "Roland Clark - House Will Survive (Original Mix)",
                "Autores": "Roland Clark",
                "Artes": "Storage/10-03-2018/5.-859038841/Roland_Clark_-_House_Will_Survive_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/5.-859038841/Roland_Clark_-_House_Will_Survive_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 474,
                "Nome": "Mike Ivy - Get Up (Everybody) (Original Mix)",
                "Autores": "Mike Ivy",
                "Artes": "Storage/10-03-2018/6.-538624254/Mike_Ivy_-_Get_Up_(Everybody)_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/6.-538624254/Mike_Ivy_-_Get_Up_(Everybody)_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 475,
                "Nome": "Kinnerman - Gimme Some (Original Mix)",
                "Autores": "Kinnerman",
                "Artes": "Storage/10-03-2018/7.-519770341/Kinnerman_-_Gimme_Some_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/7.-519770341/Kinnerman_-_Gimme_Some_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 476,
                "Nome": "Roland Clark - House Will Survive (Ant LaRock Edit)",
                "Autores": "Roland Clark",
                "Artes": "Storage/10-03-2018/8.-196932656/Roland_Clark_-_House_Will_Survive_(Ant_LaRock_Edit).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/8.-196932656/Roland_Clark_-_House_Will_Survive_(Ant_LaRock_Edit).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 477,
                "Nome": "Danny Wild & Alexdoparis - Disco Smoke (Original Mix) ",
                "Autores": "Danny Wild & Alexdoparis",
                "Artes": "Storage/10-03-2018/9.132138716/Danny_Wild_&_Alexdoparis_-_Disco_Smoke_(Original_Mix)_.jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/9.132138716/Danny_Wild_&_Alexdoparis_-_Disco_Smoke_(Original_Mix)_.mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 478,
                "Nome": "Marsal Ventura - Linda (Victor Guez Remix)",
                "Autores": "Marsal Ventura",
                "Artes": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Victor_Guez_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Victor_Guez_Remix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 479,
                "Nome": "Marsal Ventura - Linda (G4BBA Remix)",
                "Autores": "Marsal Ventura",
                "Artes": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(G4BBA_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(G4BBA_Remix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              },
              {
                "IdeObra": 480,
                "Nome": "Marsal Ventura - Linda (Arny Vilax Remix)",
                "Autores": "Marsal Ventura",
                "Artes": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Arny_Vilax_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/10.695374926/Marsal_Ventura_-_Linda_(Arny_Vilax_Remix).mp3",
                "DtCriacao": "/Date(1520722921000)/"
              }
            ],
            "IdeColetanea": 223,
            "DtCriacao": "/Date(1520811234000)/",
            "HashCode": null
          },
          {
            "Nome": "processada 10-03-2018",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 455,
                "Nome": "JAXX DE LUXE - I'm Taking You High Feat. Aphra (Radio Edit)",
                "Autores": "JAXX DE LUXE",
                "Artes": "Storage/10-03-2018/1.1851196775/JAXX_DE_LUXE_-_I_m_Taking_You_High_Feat._Aphra_(Radio_Edit).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/1.1851196775/JAXX_DE_LUXE_-_I_m_Taking_You_High_Feat._Aphra_(Radio_Edit).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 456,
                "Nome": "JAXX DE LUXE - I'm Taking You High Feat. Aphra (Instrumental Mix)",
                "Autores": "JAXX DE LUXE",
                "Artes": "Storage/10-03-2018/1.1851196775/JAXX_DE_LUXE_-_I_m_Taking_You_High_Feat._Aphra_(Instrumental_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/1.1851196775/JAXX_DE_LUXE_-_I_m_Taking_You_High_Feat._Aphra_(Instrumental_Mix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 457,
                "Nome": "JAXX DE LUXE - I'm Taking You High Feat. Aphra (Original Mix)",
                "Autores": "JAXX DE LUXE",
                "Artes": "Storage/10-03-2018/1.1851196775/JAXX_DE_LUXE_-_I_m_Taking_You_High_Feat._Aphra_(Original_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/1.1851196775/JAXX_DE_LUXE_-_I_m_Taking_You_High_Feat._Aphra_(Original_Mix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 458,
                "Nome": "Candi Staton, Yuga - You Got The Love (Incognet Remix)",
                "Autores": "Candi Staton, Yuga",
                "Artes": "Storage/10-03-2018/2.-1347662088/Candi_Staton,_Yuga_-_You_Got_The_Love_(Incognet_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/2.-1347662088/Candi_Staton,_Yuga_-_You_Got_The_Love_(Incognet_Remix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 459,
                "Nome": "David del Olmo & Two Yupa - Set Me Free (Andy Rojas & Rio De La Duna Remix)",
                "Autores": "David del Olmo & Two Yupa",
                "Artes": "Storage/10-03-2018/3.-1274977704/David_del_Olmo_&_Two_Yupa_-_Set_Me_Free_(Andy_Rojas_&_Rio_De_La_Duna_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/3.-1274977704/David_del_Olmo_&_Two_Yupa_-_Set_Me_Free_(Andy_Rojas_&_Rio_De_La_Duna_Remix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 460,
                "Nome": "David Tort & DJ Ruff Meet DJ Disciple - Changes (DJ Fronter & DJ Mara Terrace Mix)",
                "Autores": "David Tort & DJ Ruff Meet DJ Disciple",
                "Artes": "Storage/10-03-2018/4.-622301147/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(DJ_Fronter_&_DJ_Mara_Terrace_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/4.-622301147/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(DJ_Fronter_&_DJ_Mara_Terrace_Mix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 461,
                "Nome": "David del Olmo & Two Yupa - Set Me Free (Dvit Bousa Remix)",
                "Autores": "David del Olmo & Two Yupa",
                "Artes": "Storage/10-03-2018/5.-271041265/David_del_Olmo_&_Two_Yupa_-_Set_Me_Free_(Dvit_Bousa_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/5.-271041265/David_del_Olmo_&_Two_Yupa_-_Set_Me_Free_(Dvit_Bousa_Remix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 462,
                "Nome": "David Tort & DJ Ruff Meet DJ Disciple - Changes (The Cube Guys Remix)",
                "Autores": "David Tort & DJ Ruff Meet DJ Disciple",
                "Artes": "Storage/10-03-2018/6.-191913695/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(The_Cube_Guys_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/6.-191913695/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(The_Cube_Guys_Remix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 463,
                "Nome": "Robbie Rivera - There Is No Escape (J8man, Etienne Ozborne Extended mix)",
                "Autores": "Robbie Rivera",
                "Artes": "Storage/10-03-2018/7.424964107/Robbie_Rivera_-_There_Is_No_Escape_(J8man,_Etienne_Ozborne_Extended_mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/7.424964107/Robbie_Rivera_-_There_Is_No_Escape_(J8man,_Etienne_Ozborne_Extended_mix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 464,
                "Nome": "David Tort & DJ Ruff Meet DJ Disciple - Changes (Federico Scavo Remix)",
                "Autores": "David Tort & DJ Ruff Meet DJ Disciple",
                "Artes": "Storage/10-03-2018/8.773380259/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(Federico_Scavo_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/8.773380259/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(Federico_Scavo_Remix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 465,
                "Nome": "Gaab - Night Time (No Requests Remix)",
                "Autores": "Gaab",
                "Artes": "Storage/10-03-2018/9.886697390/Gaab_-_Night_Time_(No_Requests_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/9.886697390/Gaab_-_Night_Time_(No_Requests_Remix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 466,
                "Nome": "David Tort & DJ Ruff Meet DJ Disciple - Changes (DJ Fronter & DJ Mara Club Mix)",
                "Autores": "David Tort & DJ Ruff Meet DJ Disciple",
                "Artes": "Storage/10-03-2018/10.1500420895/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(DJ_Fronter_&_DJ_Mara_Club_Mix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/10.1500420895/David_Tort_&_DJ_Ruff_Meet_DJ_Disciple_-_Changes_(DJ_Fronter_&_DJ_Mara_Club_Mix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              },
              {
                "IdeObra": 467,
                "Nome": "David del Olmo & Two Yupa - Set Me Free (Dave Urania Remix)",
                "Autores": "David del Olmo & Two Yupa",
                "Artes": "Storage/10-03-2018/11.1623553403/David_del_Olmo_&_Two_Yupa_-_Set_Me_Free_(Dave_Urania_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/10-03-2018/11.1623553403/David_del_Olmo_&_Two_Yupa_-_Set_Me_Free_(Dave_Urania_Remix).mp3",
                "DtCriacao": "/Date(1520711518000)/"
              }
            ],
            "IdeColetanea": 195,
            "DtCriacao": "/Date(1520718881000)/",
            "HashCode": null
          },
          {
            "Nome": "Coletanea 1520699740334",
            "Autores": "",
            "Artes": "Storage/capa/padrao.jpg",
            "Obras": [
              {
                "IdeObra": 210,
                "Nome": "Debby Holiday, Russ Rich - A Love Bizarre (Fabio Campos & Alberto Ponzo Remix)",
                "Autores": "Debby Holiday, Russ Rich",
                "Artes": "Storage/12-12-2017/3.1834385765/Debby_Holiday,_Russ_Rich_-_A_Love_Bizarre_(Fabio_Campos_&_Alberto_Ponzo_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/12-12-2017/3.1834385765/Debby_Holiday,_Russ_Rich_-_A_Love_Bizarre_(Fabio_Campos_&_Alberto_Ponzo_Remix).mp3",
                "DtCriacao": "/Date(1513125868000)/"
              },
              {
                "IdeObra": 211,
                "Nome": "Debby Holiday, Russ Rich - A Love Bizarre (Max Grandon Big Room Remix)",
                "Autores": "Debby Holiday, Russ Rich",
                "Artes": "Storage/12-12-2017/3.1834385765/Debby_Holiday,_Russ_Rich_-_A_Love_Bizarre_(Max_Grandon_Big_Room_Remix).jpg",
                "Duracao": "01/01/0001 00:00:00",
                "Arquivo": "Storage/12-12-2017/3.1834385765/Debby_Holiday,_Russ_Rich_-_A_Love_Bizarre_(Max_Grandon_Big_Room_Remix).mp3",
                "DtCriacao": "/Date(1513125868000)/"
              }
            ],
            "IdeColetanea": 183,
            "DtCriacao": "/Date(1520714162000)/",
            "HashCode": null
          }
        ]
      }

  }

}
