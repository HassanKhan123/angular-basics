import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      .textColor {
        color: white;
      }
    `,
  ],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test';
  username = '';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  showText = true;
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.username = '';
  }

  onToggle() {
    this.showText = !this.showText;
    this.logs.push(new Date());
  }
}
