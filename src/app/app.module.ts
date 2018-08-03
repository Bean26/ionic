import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NormalLoadPage } from '../pages/normal-load/normal-load';
import { SettingPage } from "../pages/setting/setting";

import { Device } from "@ionic-native/device";
import { Camera } from "@ionic-native/camera";
import { QRScanner } from '@ionic-native/qr-scanner';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NormalLoadPage,
    SettingPage,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      //ios风格
      backButtonIcon: 'ios-arrow-back',
      backButtonText: 'Back',
      tabsHideOnSubPages: true,
      mode: 'ios'


      //android风格
      // backButtonIcon: 'md-arrow-back',
      // backButtonText: '返回',
      // tabsHideOnSubPages: true,
      // mode: 'md'
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NormalLoadPage,
    SettingPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    Device,
    Camera,
    QRScanner
  ]
})


export class AppModule {}
