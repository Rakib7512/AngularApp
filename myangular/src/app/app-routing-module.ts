import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Aboutus } from './aboutus/aboutus';
import { Studentform } from './studentform/studentform';
import { ViewAllStudent } from './view-all-student/view-all-student';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'aboutus', component: Aboutus},
  { path: 'studentform', component: Studentform},
  {path:'allStudent', component:ViewAllStudent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
