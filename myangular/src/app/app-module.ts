import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Aboutus } from './aboutus/aboutus';
import { Studentform } from './studentform/studentform';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Addstudent } from './addstudent/addstudent';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    App,
    Home,
    Aboutus,
    Studentform,
    ViewAllStudent,
    Addstudent
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
