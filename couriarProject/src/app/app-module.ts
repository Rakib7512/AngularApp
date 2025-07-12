import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddPoliceStation } from './add-police-station/add-police-station';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Home } from './home/home';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AddDistrict } from './add-district/add-district';
import { AddDivision } from './add-division/add-division';
import { AddCountry } from './add-country/add-country';
import { AddEmployee } from './add-employee/add-employee';
import { AddParcel } from './add-parcel/add-parcel';
import { TransferHub } from './transfer-hub/transfer-hub';
import { TrackParcel } from './track-parcel/track-parcel';
import { ViewEmp } from './view-emp/view-emp';
import { ViewAddParcel } from './view-add-parcel/view-add-parcel';
import { UpdateParcel } from './update-parcel/update-parcel';

@NgModule({
  declarations: [
    App,
    AddPoliceStation,
    Home,
    AddDistrict,
    AddDivision,
    AddCountry,
    AddEmployee,
    AddParcel,
    TransferHub,
    TrackParcel,
    ViewEmp,
    ViewAddParcel,
    UpdateParcel
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
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
