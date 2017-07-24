import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { BuyPage } from '../pages/buy/buy';
import { SellPage } from '../pages/sell/sell';
 
import { MonthData } from '../providers/models/month-data';
import { MonthCardComponent } from '../components/month-card/month-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarPage,
    BuyPage,
    SellPage,
    MonthCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalendarPage,
    BuyPage,
    SellPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MonthData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
