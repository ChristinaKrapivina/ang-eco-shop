import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Section, FirebaseSection, FirebaseSectionsResponse, FirebaseProductsResponse, Product } from '../models';

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
  getSectionProducts(sectionName: string): Observable<Product[]> {
    return this.http.get(`${this.firebaseURL}/${sectionName}`)
      .pipe(
        map((response: FirebaseProductsResponse) => {
          let arr: Product[] = [];
          response.documents.forEach(doc => {
            let product: Product = {};
            product.id = doc.fields.id.integerValue;
            product.title = doc.fields.title.stringValue;
            product.price = doc.fields.price.stringValue;
            product.image = [];
            doc.fields.img.arrayValue.values.forEach (value => {
              product.image.push(value.stringValue);
            })
            product.description = [];
            doc.fields.descr.arrayValue.values.forEach (value => {
              product.description.push(value.stringValue);
            })
            arr.push(product);
          })
          return arr;
        })
      )
  }

  getSection(section: string):Observable<Section> {
    return this.http.get(`${this.firebaseURL}/sections/${section}`)
      .pipe(
        map((response: FirebaseSection) => {
          let section: Section = {};
          section.id = response.fields.id.stringValue;
          section.img = response.fields.img.stringValue;
          section.title = response.fields.title.stringValue;
          section.text = response.fields.text.stringValue;
          return section;
        })
      )

  }
  getAllSections(): Observable<Section[]>{
    return this.http.get(`${this.firebaseURL}/sections`)
      .pipe(
        map((response: FirebaseSectionsResponse) => {
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