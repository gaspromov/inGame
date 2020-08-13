import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgxMaskModule} from "ngx-mask";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './unsign/sign-up/sign-up.component';
import { SignInComponent } from './unsign/sign-in/sign-in.component';
import { AuthComponent } from './unsign/auth/auth.component';
import { MainComponent } from './unsign/main/main.component';
import { MainOwnerComponent } from './serverowner/main-owner/main-owner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainAdvertComponent } from './advertiser/main-advert/main-advert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    AuthComponent,
    MainComponent,
    MainOwnerComponent,
    NotFoundComponent,
    SideBarComponent,
    MainAdvertComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(/*options*/),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
