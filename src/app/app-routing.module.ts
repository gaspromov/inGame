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


const routes: Routes = [
  { path: "main", component: MainComponent, canActivate: [IsAuthGuard]},
  { path: "home", component: MainOwnerComponent, canActivate: [AuthGuard, IsOwnerGuard]},
  { path: "homePage", component: MainAdvertComponent,canActivate: [AuthGuard, IsAdvertGuard] },
  { path: "login", component: AuthComponent, canActivate: [IsAuthGuard] },
  { path: "404", component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: "/main"},
  { path: "**", redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
