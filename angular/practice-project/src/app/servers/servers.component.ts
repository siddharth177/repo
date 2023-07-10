import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onServersReload() {
    this.router.navigate(['servers']);  // will work - navigate doesn't know the current path

    // this.router.navigate(['servers'], {relativeTo: this.activatedRoute}); // sets the relative path - won't work as we don't have servers/servers path
  }

}
