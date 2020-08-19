import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseLoginResponse } from 'src/app/shared/models';
import { Subscription, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginForm') customForm: NgForm;
  subscription: Subscription;
  signinMode: boolean;
  isLoading = false;
  hasError = false;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.hasError = false;
    this.errorMessage = '';
    this.subscription = this.route.url
      .subscribe(url => {
        this.signinMode = url[0].path === 'signin' ? true : false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm):void {
    if (!form.valid) { return; }

    let observable: Observable<FirebaseLoginResponse>;
    this.isLoading = true;

    if(this.signinMode) { observable = this.authService.signin(form.value) }
    if(!this.signinMode) { observable = this.authService.signup(form.value) }

    observable.subscribe(
      () => {
        this.isLoading = false;
        form.reset();
        this.router.navigate([this.authService.redirectUrl]);
      },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.hasError = true;
        this.errorMessage = err.error.error.message;
        }
    )
  }

}
