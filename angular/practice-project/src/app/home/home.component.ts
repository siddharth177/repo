import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id?: number) {
    if (id) {
      this.router.navigate(
        ['/servers', id, 'edit'],
        {
          queryParams: {allowEdit: '1'},
          fragment: 'loading'
        });
    }
    else {
      this.router.navigate(['./servers']);
    }
  }

  onLogin() {
    this.auth.login();
  }

  onLogout() {
    this.auth.logout();
  }
}
