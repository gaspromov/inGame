import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-owner',
  templateUrl: './main-owner.component.html',
  styleUrls: ['./main-owner.component.css']
})
export class MainOwnerComponent implements OnInit {
  uEmail: string = JSON.parse(localStorage.getItem("user")).email

  constructor() { }

  ngOnInit(): void {
  }

}
