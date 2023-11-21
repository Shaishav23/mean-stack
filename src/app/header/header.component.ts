import { Component, OnDestroy, OnInit } from "@angular/core";

import { AuthService } from "../authentication/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authLiatenerSubs: Subscription;
  constructor( private authService: AuthService){}

  ngOnInit() {
    this.authLiatenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    }
  ngOnDestroy() {
    this.authLiatenerSubs.unsubscribe();
  }
}
