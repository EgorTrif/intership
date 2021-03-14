import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  readonly isLoggedIn$:Observable<boolean> = this.authService.isRouteAuthenticated()
  loginForm = true;
  formGroup!: FormGroup;

  username = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required]);
  orgguid = new FormControl("",[Validators.required]);
  
  errorMessage: string = ""

  constructor( private http:HttpClient, private tokenStorage: TokenStorageService, private authService: AuthService, 
  private router: Router,
  private _snackBar: MatSnackBar)
  {this.authService.isRouteAuthenticated()}

  ngOnInit(): void {
    this.initForm()
    if (this.tokenStorage.getToken()) {
    this.authService.setIsAuthenticated(true)
    this.loginForm = false
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
    this.authService.isRouteAuthenticated();
  }
 
  openSnackBar(massage: string){
    this._snackBar.open('You have successfully loged in!', 'End now', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
    })
  }

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.orgguid.hasError('required')) {
      return 'You must enter a value';
    }
    return
  }

  onSubmit(){
    if(this.formGroup.valid) {
    this.authService.login(this.formGroup.value).subscribe(
      data => {
        if (data.IsError === false) {
        this.authService.setIsAuthenticated(true)
        this.tokenStorage.saveToken(data.Data.token);
        this.allowRouteAccess(true)
        this._snackBar.open('You have successfully loged in!', 'x', {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        })
        this.router.navigateByUrl('/home')
        } else {
          this.errorMessage = data.ErrMsg
          this._snackBar.open( this.errorMessage, 'x', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          })
          
        } 
        console.log(data)
      },
    );
  }
    
    console.log(this.formGroup)
    }
  }
