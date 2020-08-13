import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ){}

  isLoggedIn(){
    if (localStorage.getItem('accessToken') == "" || localStorage.getItem('accessToken') == null)
      return false;
    else
      return true;
  }

  isOwner(){
    if (JSON.parse(localStorage.getItem('user')).typeUser == "serverowner")
      return true;
    else 
      return false;
  }

  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( this.isLoggedIn() ){
        if (this.isOwner())
          this.router.navigate(['home']);
        else 
          this.router.navigate(['homePage']);
      }
      
    return true;
  }
  
}
