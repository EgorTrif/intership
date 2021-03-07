import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public allowedAccess!:boolean;
  formGroup!: FormGroup;
  
  loggedIn = false
  loginFailed = false;
  errorMessage: string = ""

  constructor( private http:HttpClient, private tokenStorage: TokenStorageService, private authService: AuthService, private router: Router, private appComponent: AppComponent)
  {this.allowedAccess = this.authService.isRouteAuthenticated();}

  ngOnInit(): void {
    this.initForm()
    if (this.tokenStorage.getToken()) {
      this.loggedIn = true;
      this.allowRouteAccess(this.loggedIn)
    }
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      orgguid: new FormControl("",[Validators.required])
    });
  }

  allowRouteAccess(access: boolean):void{
    this.authService.setIsAuthenticated(access);
    this.allowedAccess = this.authService.isRouteAuthenticated();
  }

  onSubmit(){
    if(this.formGroup.valid) {
    this.authService.login(this.formGroup.value).subscribe(
      data => {
        if (data.IsError === false) {
          this.tokenStorage.saveToken(data.Data.token);
        this.loggedIn = true;
        this.loginFailed = false;
        this.allowRouteAccess(this.loggedIn)
        this.appComponent.loggin()
        this.router.navigateByUrl('/home')
        } else {
          this.loginFailed = true;
          this.errorMessage = data.ErrMsg
        } 
        console.log(data)
      },
    );
  }
    
    console.log(this.formGroup)
    }
  }
