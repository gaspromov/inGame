import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from "src/app/shared/auth/auth.service";
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  @Input() typeUser: string;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    console.log(this.typeUser)
  }

}
