import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Section } from '../models/sections';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseURL = 'https://firestore.googleapis.com/v1/projects/eco-shop-bddcf/databases/(default)/documents';

  constructor( private http: HttpClient ) {}

  // create(post: Post, token: string): Observable<Object> {
  //   let searchParams = new HttpParams();
  //   searchParams = searchParams.append('auth', token);

  //   return this.http.post(this.firebaseURL, post, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     }),
  //     params: searchParams
  //   })
  // }
  
  // deleteAll(token: string): Observable<Object> {
  //   let searchParams = new HttpParams();
  //   searchParams = searchParams.append('auth', token);

  //   return this.http.delete(this.firebaseURL, {
  //     params: searchParams
  //   });
  // }

  getAllSections(): Observable<Section[]>{
    return this.http.get(`${this.firebaseURL}/sections`)
      .pipe(
        map(response => {
          let arr: Section[] = [];
          response.documents.forEach(doc => {
            let section: Section = {};
            section.id = doc.fields.id.stringValue;
            section.img = doc.fields.img.stringValue;
            section.title = doc.fields.title.stringValue;
            section.text = doc.fields.text.stringValue;
            arr.push(section);
          })
          return arr;
        })
      )
  }
}