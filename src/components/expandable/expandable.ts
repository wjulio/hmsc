import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

    @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
    @Input('expanded') expanded;
    @Input('expandHeight') expandHeight;

    constructor(public renderer: Renderer,public expandEvents: Events) {
      this.expandEvents.subscribe('setExpandHeight', () =>{
          //this.playPreview(this.gvProvider.singleTrack);
          this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
        console.log('expandHeight:'+this.expandHeight);  
        });
    }

    ngAfterViewInit(){
        //this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', 'auto');
    }

}
