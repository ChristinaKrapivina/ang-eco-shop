import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isWhite = false;
  token: string;
  subscription: Subscription;

  constructor( public authService: AuthService ) { }

  ngOnInit(): void {
    this.subscription = this.authService.token$.subscribe(
      newToken => {this.token = newToken}
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  @HostListener('document:scroll') onScrollEvent() {
    if (window.scrollY > 50) {
      this.isWhite = true;
    } else {
      this.isWhite = false;
    }
  }
  onLogOut() {
    this.authService.signout();
  }
}
