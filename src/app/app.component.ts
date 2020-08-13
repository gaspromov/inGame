import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InGame';
  typeUser: string = "";
  
  ngOnInit(){
    if (localStorage.getItem('accessToken') != "" && localStorage.getItem('accessToken') != null){
      this.typeUser = JSON.parse(localStorage.getItem('user')).typeUser
    }

  }
}
