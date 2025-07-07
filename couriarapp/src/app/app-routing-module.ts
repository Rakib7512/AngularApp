import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Addemployee } from './addemployee/addemployee';
import { Home } from './home/home';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'addemployee', component: Addemployee }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
