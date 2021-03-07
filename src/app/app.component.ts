import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'login-page';
  public allowedAccess!:boolean;
  loggedIn = false;

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private authService: AuthService) {
    this.allowedAccess = this.authService.isRouteAuthenticated();
   }

  
  ngOnInit(): void {
    this.loggedIn = !!this.tokenStorageService.getToken();
    }
    logout(): void {
      this.tokenStorageService.signOut();
      this.router.navigateByUrl('/login')
      this.loggedIn = false;
      this.blockAccess(this.loggedIn)
    }
    loggin(): void {
      this.loggedIn = true
    }

    blockAccess(access: boolean): void {
      this.authService.setIsAuthenticated(access);
      this.allowedAccess = this.authService.isRouteAuthenticated();
    }
}