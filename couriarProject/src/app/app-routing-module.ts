import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddPoliceStation } from './add-police-station/add-police-station';
import { AddDistrict } from './add-district/add-district';
import { AddDivision } from './add-division/add-division';
import { AddCountry } from './add-country/add-country';
import { AddEmployee } from './add-employee/add-employee';

const routes: Routes = [
  {path:'',component:Home},
  {path:'addpolice',component:AddPoliceStation},
  {path:'addDist',component:AddDistrict},
  {path:'addDivi',component:AddDivision},
  {path:'addCountry',component:AddCountry},
  {path:'addEmp',component:AddEmployee},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
