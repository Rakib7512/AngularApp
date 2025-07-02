import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ShipmentServic } from './service/shipment.servic';
import { BookShipment } from './book-shipment/book-shipment';
import { ShipmentList } from './shipment-list/shipment-list';
import { Login } from './login/login';
import { TrackShipment } from './track-shipment/track-shipment';
import { Register } from './register/register';
import { ViewAllEmployee } from './view-all-employee/view-all-employee';
import { Updateemployee } from './updateemployee/updateemployee';
import { Addemployee } from './addemployee/addemployee';

const routes: Routes = [
{  path:'',component:Home},
{path:'track',component:TrackShipment},
{path:'book', component:BookShipment},
{path:'shipment', component:ShipmentList},
{path:'login', component:Login},
{path:'register', component:Register},
{path:'allEmp', component:ViewAllEmployee},
{path:'addEmp', component:Addemployee},
{path:'updateEmp/:id', component:Updateemployee},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
