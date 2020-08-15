import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  borderMove = false;
  sectionText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus leo, purus leo imperdiet egestas erat eget, fringilla sodales purus, purus leo. Sed cursus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus leo, purus leo imperdiet egestas erat eget, fringilla sodales purus, purus leo. Sed cursus."
  ]

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll') onScrollEvent() {
    if (window.scrollY > 400) {
      this.borderMove = true;
    } else {
      this.borderMove = false;
    }
  }

}
