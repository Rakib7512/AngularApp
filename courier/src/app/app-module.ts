import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { TrackShipment } from './track-shipment/track-shipment';
import { BookShipment } from './book-shipment/book-shipment';
import { ShipmentList } from './shipment-list/shipment-list';
import { DeliveryStatus } from './delivery-status/delivery-status';
import { Login } from './login/login';
import { Register } from './register/register';
import { ViewAllEmployee } from './view-all-employee/view-all-employee';

import { Addemployee } from './addemployee/addemployee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { Updateemployee } from './updateemployee/updateemployee';
import { ViewAllLocation } from './view-all-location/view-all-location';
import { Addlocation } from './addlocation/addlocation';





@NgModule({
  declarations: [
    App,
    Home,
    Dashboard,
    TrackShipment,
    BookShipment,
    ShipmentList,
    DeliveryStatus,
    Login,
    Register,
    ViewAllEmployee,
    Addemployee,
    Updateemployee,
    ViewAllLocation,
    Addlocation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    ReactiveFormsModule




  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
