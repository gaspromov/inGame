import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  auth_method = 'sign-in';
  typeUser = "serverowner";

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  changeMethod(method: string){
    this.auth_method = method;
  }

  changeTypeUser(){
    if (this.typeUser == "serverowner")
      this.typeUser = "advertiser"
    else
      this.typeUser = "serverowner"
  }

}
