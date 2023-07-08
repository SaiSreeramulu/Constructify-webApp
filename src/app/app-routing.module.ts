import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { ShowusersComponent } from './MyComponents/showusers/showusers.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './MyComponents/logout/logout.component';
import { CartComponent } from './MyComponents/cart/cart.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"Login", component:LoginComponent},
  {path:"Register", component:RegisterComponent},
  {path:"showUsers", component:ShowusersComponent},
  {path:"Home", canActivate:[AuthGuard], component:HomeComponent},
  {path:"Cart",    canActivate:[AuthGuard], component:CartComponent},
  {path:"Logout",    canActivate:[AuthGuard], component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
