import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ResetpasswordPageComponent } from "../resetpassword-page/resetpassword-page.component";

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, RouterOutlet, ResetpasswordPageComponent]
})
export class LoginPageComponent {

  constructor(private router: Router) {}

  ForgotPassword(){
    console.log("testing")
    this.router.navigate(['ResetPassword']);
  }

  Login(){
    console.log("testing");
    this.router.navigate(['LandingPage']);
  }

  CreateAccount(){
    console.log("testing");
    this.router.navigate(['RegisterPage']);
  }
}
