import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './component/authenticate/login/login.component';
import { RegisterComponent } from './component/authenticate/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { ServicesComponent } from './component/services/services.component';



@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  LoginComponent,
  RegisterComponent,
  ContactComponent,
  BlogComponent,
  ServicesComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


