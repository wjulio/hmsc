import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MarcadoresPage } from '../pages/marcadores/marcadores';
import { MinhaplaylistPage } from '../pages/minhaplaylist/minhaplaylist';
import { EmqualqerdiaPage } from '../pages/emqualqerdia/emqualqerdia';
import { ConfigurarPage } from '../pages/configurar/configurar';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { DatePipe } from '@angular/common';

// import { BackgroundMode } from '@ionic-native/background-mode';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

// import { ExpandableComponent } from '../components/expandable/expandable';
// import { TimelineComponent } from '../components/timeline/timeline';
// import { TimelineTimeComponent } from '../components/timeline/timeline';
// import { TimelineItemComponent } from '../components/timeline/timeline';
// import { FlashCardComponent } from '../components/flash-card/flash-card';
import { ExpandableHeaderComponent } from '../components/expandable-header/expandable-header';

import { RestApiProvider } from '../providers/rest-api/rest-api';
import { GlobalvarProvider } from '../providers/globalvar/globalvar';

import { IonicStorageModule } from '@ionic/storage';
import { BancoDeDadosProvider } from '../providers/banco-de-dados/banco-de-dados';

export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ExpandableComponent,
    ListPage,
    MinhaplaylistPage,
    EmqualqerdiaPage,ConfigurarPage,
    MarcadoresPage,LoginPage,
    ExpandableHeaderComponent
    // FlashCardComponent,
    // TimelineComponent,
    // TimelineItemComponent,
    // TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    IonicStorageModule.forRoot({name: '__mydb',driverOrder: ['indexeddb', 'sqlite', 'websql']}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MinhaplaylistPage,
    MarcadoresPage,
    EmqualqerdiaPage,ConfigurarPage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider,
    GlobalvarProvider,
    GoogleAnalytics,
    DatePipe,
    BancoDeDadosProvider
  ]
})
export class AppModule {}
