import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  typeUser: string;

  constructor() { }

  ngOnInit(): void {
    this.typeUser = JSON.parse(localStorage.getItem('user')).typeUser;
  }

}
