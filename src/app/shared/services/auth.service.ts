import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiKey = 'AIzaSyDUGIhnVt4ggWHpU_eZzKx5RJLkeWrKTEs';
  redirectUrl = '/home';
  token: string | null = null;

  constructor( private http: HttpClient ) { }

  signin(details: Login): Observable<Object> {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    return this.firebasePost(url, details);
  }

  signup(details: Login): Observable<Object> {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    return this.firebasePost(url, details);
  }

  signout():void {
    this.token = null;
  }

  checkLogIn(): string {
    return this.token;
  }

  private firebasePost(url, details) {
    return this.http.post(url + this.apiKey,
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

}