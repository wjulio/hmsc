import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = [];
  playerItems: any = [];
  itemExpandHeight: number = 500;

  constructor(public navCtrl: NavController) {

    this.items = [
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false}
    ];

    this.playerItems = [
        {titulo: 'item1',artista: '', urlcapa:'',urlmp3:''},
        {titulo: 'item2',artista: '', urlcapa:'',urlmp3:''},
        {titulo: 'item3',artista: '' ,urlcapa:'',urlmp3:''},
        {titulo: 'item4',artista: '', urlcapa:'',urlmp3:''},
        {titulo: 'item5',artista:'', urlcapa:'',urlmp3:''},
        {titulo: 'item6',artista: '', urlcapa:'',urlmp3:''},
        {titulo: 'item7',artista: '', urlcapa:'',urlmp3:''}
    ];

  }


     expandItem(item){

         this.items.map((listItem) => {

             if(item == listItem){
                 listItem.expanded = !listItem.expanded;
             } else {
                 listItem.expanded = false;
             }

             return listItem;

         });

     }

}
