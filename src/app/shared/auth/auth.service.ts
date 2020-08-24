import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "src/app/shared/interfaces/user"
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://peaceful-sands-75853.herokuapp.com/api/v1/auth";
  header: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { 
    this.header = new HttpHeaders().set('Content-type', 'application/json');
  }


  async postNewUser(data: User) {
    return await this.http.post(`${this.url}/register`, data, {headers: this.header}).toPromise()
  }

  async getUser(data: User){
    return await this.http.post(`${this.url}/login`, data, {headers: this.header}).toPromise()
  }

  logout(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    this.router.navigate(['main']);
  }

  setLocalStorageUser(data: any = {}){
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user))
  }
  
}
