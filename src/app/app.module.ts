import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './MyComponents/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ShowusersComponent } from './MyComponents/showusers/showusers.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LogoutComponent } from './MyComponents/logout/logout.component';
import { CartComponent } from './MyComponents/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ShowusersComponent,
    HomeComponent,
    LogoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
