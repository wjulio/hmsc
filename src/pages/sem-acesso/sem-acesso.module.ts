import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SemAcessoPage } from './sem-acesso';

@NgModule({
  declarations: [
    SemAcessoPage,
  ],
  imports: [
    IonicPageModule.forChild(SemAcessoPage),
  ],
})
export class SemAcessoPageModule {}
