import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { ShowusersComponent } from './MyComponents/showusers/showusers.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"Login", component:LoginComponent},
  {path:"Register", component:RegisterComponent},
  {path:"showUsers", component:ShowusersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
