import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewcarsComponent } from './viewcars/viewcars.component';

import { RentcarsComponent } from './rentcars/rentcars.component';
import { ContactusComponent } from './contactus/contactus.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
   },
{
  path:'Home',
  component:HomeComponent
 },
 {
  path:'Login',
  component:LoginComponent
 },
 {
  path:'View',
  component:ViewcarsComponent
 },
 {
  path:'rent',
  component:RentcarsComponent
 },
 {
  path:'contact',
  component:ContactusComponent
 },
 {
   path:'**',
   component:PagenotfoundComponent
 }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
