import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _apiBaseUrl ="./login-api"; 
 // with prefix in proxy.conf.json 
 // (ng serve --proxy-config proxy.conf.json)
 // or other config in production mode

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http : HttpClient){}


  public postLogin(login: Login): Observable<LoginResponse>{
    let url = this._apiBaseUrl + "/public/auth";
    console.log("url="+url);
    return this._http.post<LoginResponse>(url,
                                         login,
                                         {headers: this._headers} );
  }
}
