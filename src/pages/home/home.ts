import { Component,ElementRef, Renderer } from '@angular/core';
import { NavController,Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('divArea') divAreaRef: ElementRef;
  @ViewChild('myEx') myExRef: ElementRef;

  items: any = [];
  playerItems: any = [];
  itemExpandHeight: number = 500;

  constructor(public navCtrl: NavController,renderer: Renderer,public expandHeightGatilho: Events) {

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

        this.adjust();
         this.items.map((listItem) => {
             if(item == listItem){
                 this.expandHeightGatilho.publish('setExpandHeight');
                 listItem.expanded = !listItem.expanded;
             } else {
                 this.expandHeightGatilho.publish('setExpandHeight');
                 listItem.expanded = false;
             }
             return listItem;

         });

     }

     adjust() {

       // const ta = this.divAreaRef.nativeElement;
       // const ta2 = this.myExRef;//.nativeElement;

       //ta2.expandHeight = ta.offsetHeight;
       //this.itemExpandHeight = ta.offsetHeight;

     }

}
