import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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