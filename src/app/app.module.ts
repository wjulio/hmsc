import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MinhaplaylistPage } from '../pages/minhaplaylist/minhaplaylist';
import { EmqualqerdiaPage } from '../pages/emqualqerdia/emqualqerdia';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { BackgroundMode } from '@ionic-native/background-mode';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

import { ExpandableComponent } from '../components/expandable/expandable';
// import { TimelineComponent } from '../components/timeline/timeline';
// import { TimelineTimeComponent } from '../components/timeline/timeline';
// import { TimelineItemComponent } from '../components/timeline/timeline';
// import { FlashCardComponent } from '../components/flash-card/flash-card';

import { RestApiProvider } from '../providers/rest-api/rest-api';
import { GlobalvarProvider } from '../providers/globalvar/globalvar';

export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExpandableComponent,
    ListPage,
    MinhaplaylistPage,
    EmqualqerdiaPage
    // FlashCardComponent,
    // TimelineComponent,
    // TimelineItemComponent,
    // TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MinhaplaylistPage,
    EmqualqerdiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider,
    GlobalvarProvider
  ]
})
export class AppModule {}
