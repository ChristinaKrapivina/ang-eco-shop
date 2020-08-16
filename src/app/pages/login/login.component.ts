import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') customForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(`Saved values: ${JSON.stringify(form.value)}`);
    this.authService.login(form.value)
      .subscribe(() => {
        this.authService.isLoggedIn = true;
        this.router.navigate([this.authService.redirectUrl]);
      })
    form.reset();
  }

}
