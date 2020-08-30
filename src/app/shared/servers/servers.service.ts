import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  url = "https://ingame-ads.herokuapp.com/api/v1/servers";
  header: HttpHeaders;
  token = localStorage.getItem('accessToken')

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.header = new HttpHeaders().set('Authorization', `bearer ${this.token}`);
  }

  async postServer(data){
    return await this.http.post(`${this.url}`, data, {headers: this.header}).toPromise();
  }

  getAllServers(game){
    if (game == 'cs:go')
      game = 'csgo';
    return this.http.get(`${this.url}/game/${game}`)
  }

  async getUserServers(){
    return await this.http.get(`${this.url}/user`, {headers: this.header}).toPromise()
  }

}
