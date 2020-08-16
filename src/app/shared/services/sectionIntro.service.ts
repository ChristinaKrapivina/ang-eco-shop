import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Section } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SectionIntroService {
  private section = new BehaviorSubject(null);
  section$ = this.section.asObservable();

  constructor() {}
  
  changeSection(section: Section) {
    this.section.next(section);
  }
}