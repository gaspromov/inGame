import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/shared/servers/servers.service';

@Component({
  selector: 'app-my-servers',
  templateUrl: './my-servers.component.html',
  styleUrls: ['./my-servers.component.css']
})
export class MyServersComponent implements OnInit {
  servers: any = [{}];

  constructor(
    public http: ServersService,
  ) { }

  async ngOnInit() {
    await this.http.getUserServers()
    .then(w =>{
      this.servers = w;
      console.log(w);
    })
    .catch(e => console.log(e))
  }

}
