import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { IsNullOrUndefined } from "util";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ){}

  isLoggedIn(){
    if (localStorage.getItem('accessToken') == "" || localStorage.getItem('accessToken') == null)
      return false;
    else
      return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(!this.isLoggedIn()) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        this.router.navigate(['login'])
      }
      return true;
  }
  
}
