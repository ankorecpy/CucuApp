import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { PurchasePage } from '../pages/purchase/purchase';
import { SalePage } from '../pages/sale/sale';
import { OperationsPage } from '../pages/operations/operations';
import { ReportPage } from '../pages/report/report';
import { InformationPage } from '../pages/information/information';
import { PendingSalesPage } from '../pages/pending-sales/pending-sales';
import { AnnualClosurePage } from '../pages/annual-closure/annual-closure';
 
import { MonthData } from '../providers/models/month-data';
import { MonthCardComponent } from '../components/month-card/month-card';
import { Sale } from '../providers/models/sale-data';
import { Purchase } from '../providers/models/purchase-data';
import { Production } from '../providers/models/production-data';

import { SaleDao } from '../providers/dataBase/sale-dao';
import { PurchaseDao } from '../providers/dataBase/purchase-dao';
import { ProductionDao } from '../providers/dataBase/production-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarPage,
    PurchasePage,
    SalePage,
    OperationsPage,
    InformationPage,
    ReportPage,
    InformationPage,
    PendingSalesPage,
    AnnualClosurePage,
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
    PurchasePage,
    SalePage,
    OperationsPage,
    ReportPage,
    InformationPage,
    PendingSalesPage,
    AnnualClosurePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MonthData,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Sale,
    Purchase,
    Production,
    SaleDao,
    PurchaseDao,
    ProductionDao
  ]
})
export class AppModule {}
