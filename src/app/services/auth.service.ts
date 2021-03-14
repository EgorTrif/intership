import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

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

  private readonly _isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService, private router: Router) { }

  public isRouteAuthenticated() {
    return this._isAuthenticated$;
  }

  public setIsAuthenticated(isAuth: boolean): void {
    this._isAuthenticated$.next(isAuth)

  }

  login(data: AuthDataRequestInterface): Observable<any> {
    const params = new HttpParams().append('guid', data.orgguid)
    return this.http.post(AUTH_API, data, { params });
  }
  logout(): void {
    this.setIsAuthenticated(false)
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login')
  }

}
