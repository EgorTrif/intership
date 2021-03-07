import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthDataRequestInterface {
  username: string
  password: string
  orgguid: string
}

const AUTH_API = 'https://jaffawebapidev.amax.co.il/API/LandingPage/LoginToSystem';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated!:boolean;
  
  constructor(private http: HttpClient) { }

  public isRouteAuthenticated():boolean{
    return this.isAuthenticated;
  }

  public setIsAuthenticated(isAuth:boolean):void{
    this.isAuthenticated = isAuth;
  }

  login(data: AuthDataRequestInterface): Observable<any> {
    const params = new HttpParams().append('guid', data.orgguid)
    return this.http.post(AUTH_API, data, { params });
  }
}
