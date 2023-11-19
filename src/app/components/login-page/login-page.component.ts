import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ResetpasswordPageComponent } from "../resetpassword-page/resetpassword-page.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [CommonModule, MatCardModule, MatButtonModule, 
              MatFormFieldModule, RouterOutlet, ResetpasswordPageComponent, 
              ReactiveFormsModule, FormsModule]
})
export class LoginPageComponent {

  email:string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ForgotPassword(){
    console.log("testing")
    this.router.navigate(['ResetPassword']);
  }

  Login(){
    console.log("testing");
    console.log(this.email, this.password);
    if (this.email === 'chaithanyanair06@gmail.com' && this.password === 'chaithanya12345') {
      console.log(this.email, this.password);
    this.router.navigate(['LandingPage']);
    } 
    else {
      this.errorMessage = "Invalid email or password"
    }
  }

  CreateAccount(){
    this.router.navigate(['RegisterPage']);
  }
}
