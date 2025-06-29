import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Home } from './home/home';
import { ShipmentServic } from './service/shipment.servic';
import { BookShipment } from './book-shipment/book-shipment';
import { ShipmentList } from './shipment-list/shipment-list';
import { Login } from './login/login';
import { TrackShipment } from './track-shipment/track-shipment';
import { Register } from './register/register';

const routes: Routes = [
{  path:'',component:Home},
{path:'track',component:TrackShipment},
{path:'book', component:BookShipment},
{path:'shipment', component:ShipmentList},
{path:'login', component:Login},
{path:'register', component:Register},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
