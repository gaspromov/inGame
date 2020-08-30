import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OutputAuthService } from 'src/app/shared/outputAuth/output-auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  auth_method = 'sign-in';
  typeUser: string;
  typeAuthOutput: string;

  constructor(
    private outputAuthService: OutputAuthService
) {
    outputAuthService.changeEmitted$.subscribe(type => {
        this.changeTypeUser(type);
    });}

  ngOnInit(): void {

  }


  changeMethod(method: string){
    this.auth_method = method;
  }

  changeTypeUser(type){
    if ( type == 'advertiser' )
      this.typeAuthOutput = 'рекламодателя';
    else if ( type == 'serverowner' )
      this.typeAuthOutput = 'серверовладельца';
    else{
      return;
    }
    this.typeUser = type;

  }

}
