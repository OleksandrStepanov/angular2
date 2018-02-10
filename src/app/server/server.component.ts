import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 123;
  serverName: string = 'offline';

  constructor() {
    this.serverName = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverName;
  }

  getColor() {
    return this.serverName === 'online' ? 'green' : 'red';
  }
}
