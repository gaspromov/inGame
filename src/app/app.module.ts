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
import { NewServerComponent } from './serverowner/new-server/new-server.component';
import { MyServersComponent } from './serverowner/my-servers/my-servers.component';
import { MonitoringAllComponent } from './monitoring/monitoring-all/monitoring-all.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ViewAllServersComponent } from './monitoring/view-all-servers/view-all-servers.component';
import { MonitoringSideBarComponent } from './monitoring/monitoring-side-bar/monitoring-side-bar.component';
import { NewCpcComponent } from './advertiser/new-cpc/new-cpc.component';

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
    MainAdvertComponent,
    NewServerComponent,
    MyServersComponent,
    MonitoringAllComponent,
    PaginationComponent,
    ViewAllServersComponent,
    MonitoringSideBarComponent,
    NewCpcComponent
    
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
