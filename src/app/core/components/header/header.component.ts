import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isWhite = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll') onScrollEvent() {
    if (window.scrollY > 50) {
      this.isWhite = true;
    } else {
      this.isWhite = false;
    }
  }
}
