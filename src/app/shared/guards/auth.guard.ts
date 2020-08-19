import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  token: string;

  constructor(
    private authService: AuthService,
    private router: Router) {
      this.authService.token$.subscribe(
        newToken => this.token = newToken
      )
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const { url } = state;

      if (this.token) return true;

      this.authService.redirectUrl = url;
      this.router.navigate(['/signin']);
      return false;
  }
}
