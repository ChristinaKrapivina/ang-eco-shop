import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isWhite = false;

  constructor( public authService: AuthService ) { }

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
