import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseLoginResponse } from 'src/app/shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginForm') customForm: NgForm;
  subscription: Subscription;
  page: string;
  text: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.subscription = this.route.url
      .subscribe(url => {
        this.page = url[0].path;
        this.text = this.page === 'signin' ? 'Sign in' : 'Sign up'
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if(this.page === 'signin') {
      this.authService.signin(form.value)
        .subscribe((response: FirebaseLoginResponse) => {
          this.authService.token = response.idToken;
          this.router.navigate([this.authService.redirectUrl]);
        })
    }
    if(this.page === 'signup') {
      this.authService.signup(form.value)
        .subscribe((response: FirebaseLoginResponse) => {
          this.authService.token = response.idToken;
          this.router.navigate([this.authService.redirectUrl]);
        })
    }
    
    form.reset();
  }

}
