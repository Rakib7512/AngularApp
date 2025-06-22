import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Aboutus } from './aboutus/aboutus';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'aboutus', component: Aboutus}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
