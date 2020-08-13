import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsOwnerGuard implements CanActivate {
  
  constructor(
    private router: Router,
  ){}

  isOwner(){
    if (JSON.parse(localStorage.getItem('user')).typeUser == "serverowner")
      return true;
    else 
      return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.isOwner())
        this.router.navigate(['main']);
    return true;
  }
  
}
