import { Injectable } from '@angular/core';
import { User } from './../interfaces/user/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://pipapo-graz.at/api';
  constructor(private http: Http) { }

  public login(userInfo: User): Observable<any> {

    const body = { email: userInfo.email, password: userInfo.password };
    return this.http.post(this.apiUrl + '/signin', body);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public register(userInfo: User): Observable<any> {
    const body = { first_name: userInfo.first_name, surname: userInfo.surname, email: userInfo.email, password: userInfo.password, c_password: userInfo.c_password };
    return this.http.post(this.apiUrl + '/signup', body);
  }
}
