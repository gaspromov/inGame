import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monitoring-all',
  templateUrl: './monitoring-all.component.html',
  styleUrls: ['./monitoring-all.component.css']
})
export class MonitoringAllComponent implements OnInit {
  game: string;

  constructor(
    private activeRouter: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    console.log(this.game)
  }

}
