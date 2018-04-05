import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer       = false;
  serverCreationStatus = 'No server was created!';
  serverCreated        = false;
  serverName           = '';
  servers              = ['Dev1', 'Dev2'];

  constructor() {
      setTimeout(() => { this.allowNewServer = true; }, 2000);
   }

  ngOnInit() {
  }

  addNewServer() {
    console.log('test');
    return '<app-server></app-server>';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
