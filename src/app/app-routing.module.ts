import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './unsign/main/main.component';
import { AuthComponent } from './unsign/auth/auth.component';
import { IsAuthGuard } from './shared/guards/is-auth.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { IsOwnerGuard } from './shared/guards/is-owner.guard';
import { IsAdvertGuard } from './shared/guards/is-advert.guard';
import { MainOwnerComponent } from './serverowner/main-owner/main-owner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainAdvertComponent } from './advertiser/main-advert/main-advert.component';
import { NewServerComponent } from './serverowner/new-server/new-server.component';
import { MyServersComponent } from './serverowner/my-servers/my-servers.component';
import { MonitoringAllComponent } from './monitoring/monitoring-all/monitoring-all.component';
import { SignInComponent } from './unsign/sign-in/sign-in.component';
import { SignUpComponent } from './unsign/sign-up/sign-up.component';


const routes: Routes = [
  { path: "main", component: MainComponent, canActivate: [IsAuthGuard]},
  { path: "home", component: MainOwnerComponent, canActivate: [AuthGuard, IsOwnerGuard]},
  { path: "new-server", component: NewServerComponent, canActivate: [AuthGuard, IsOwnerGuard]},
  { path: "my-servers", component: MyServersComponent, canActivate: [AuthGuard, IsOwnerGuard]},
  { path: "homePage", component: MainAdvertComponent,canActivate: [AuthGuard, IsAdvertGuard] },  

  { path: "auth", component: AuthComponent, canActivate: [IsAuthGuard], children: [
    { path: "login/:type", component: SignInComponent },
    { path: "sign-up/:type", component: SignUpComponent },
  ]},

  { path: "monitoring/:game", component: MonitoringAllComponent },
  { path: "monitoring", redirectTo: "/monitoring/cs:go" },
  { path: "404", component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: "/main"},
  { path: "**", redirectTo: "/404"},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
