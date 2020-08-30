import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdversService {
  url = "https://ingame-ads.herokuapp.com/api/v1/cpc";
  header: HttpHeaders;
  token = localStorage.getItem('accessToken')

  constructor(
    public http: HttpClient
  ) {
    this.header = new HttpHeaders().set('Authorization', `bearer ${this.token}`);
  }

  async postNewCPC(data: any = {}){
    return await this.http.post(`${this.url}`, data, {headers: this.header}).toPromise()
  }
}
