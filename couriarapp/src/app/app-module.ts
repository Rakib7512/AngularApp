import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Addemployee } from './addemployee/addemployee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Home } from './home/home';
import { AddDistrict } from './add-district/add-district';
import { Addpolicestation } from './addpolice-station/addpolice-station';
import { AddDivision } from './add-division/add-division';




@NgModule({
  declarations: [
    App,
    Addemployee,
    Home,
    AddDistrict,
    Addpolicestation,
    AddDivision
   
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


