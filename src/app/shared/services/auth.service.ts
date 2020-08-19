import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login, FirebaseLoginResponse } from '../models';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiKey = 'AIzaSyDUGIhnVt4ggWHpU_eZzKx5RJLkeWrKTEs';
  private token = new BehaviorSubject(null);
  token$ = this.token.asObservable();
  redirectUrl = '/home';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signin(details: Login): Observable<FirebaseLoginResponse> {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    return this.firebasePost(url, details);
  }

  signup(details: Login): Observable<FirebaseLoginResponse> {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    return this.firebasePost(url, details);
  }

  signout():void {
    this.token.next(null);
    this.router.navigate(['/signin']);
  }

  autoLogIn() {
    let tokenFromStorage = localStorage.getItem('userToken');
    if(!tokenFromStorage) return;

    this.token.next(tokenFromStorage);
    console.log('logged in');
  }

  private firebasePost(url, details): Observable<FirebaseLoginResponse> {
    return this.http.post<FirebaseLoginResponse>(url + this.apiKey,
      {
        ...details,
        returnSecureToken: true
      },
      {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(response => {
        this.token.next(response.idToken);
        localStorage.setItem('userToken', response.idToken);
      })
    )
  }

}