import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ServersService } from 'src/app/shared/servers/servers.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-servers',
  templateUrl: './view-all-servers.component.html',
  styleUrls: ['./view-all-servers.component.css']
})
export class ViewAllServersComponent implements OnInit {
  game: string;
  servers: any = [{}];

  constructor(
    public http: ServersService,
    public activedRouter: ActivatedRoute,
  ) {
    this.activedRouter.params.subscribe(param => 
      {
        this.game = param.game;
        this.getAllServers();
      })
   }

  ngOnInit(): void {
    this.getAllServers()
  }

  getAllServers(){
    this.http.getAllServers(this.game).subscribe(data => {
      this.servers = data
      console.log(data);
    })
  }

}
