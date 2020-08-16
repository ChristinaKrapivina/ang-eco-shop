import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  apiKey = 'AIzaSyDUGIhnVt4ggWHpU_eZzKx5RJLkeWrKTEs';

  constructor( private http: HttpClient ) { }
  isLoggedIn = false;
  redirectUrl = '/home';

  login(details: Login): Observable<Object> {
    return this.http.post(this.firebaseURL + this.apiKey,
      {
        email: details.email,
        password: details.password,
        returnSecureToken: true
      },
      {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  checkLogIn(): boolean {
    return this.isLoggedIn;
  }

}