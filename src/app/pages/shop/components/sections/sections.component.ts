import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/models/sections';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  isLoading = false;
  sections: Section[];

  constructor( private dbService: FirebaseService ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.dbService.getAllSections()
      .subscribe(res => {
        this.sections = res;
        this.isLoading = false;
      });
  }

}
