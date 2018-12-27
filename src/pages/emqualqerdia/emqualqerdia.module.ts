import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmqualqerdiaPage } from './emqualqerdia';
import { ExpandableHeaderComponent } from '../../components/expandable-header/expandable-header';

@NgModule({
  declarations: [
    EmqualqerdiaPage,
    ExpandableHeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(EmqualqerdiaPage),
  ],
})
export class EmqualqerdiaPageModule {}
