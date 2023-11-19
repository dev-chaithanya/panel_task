import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-resetpassword-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, 
            MatFormFieldModule, RouterOutlet, LoginPageComponent],
  templateUrl: './resetpassword-page.component.html',
  styleUrl: './resetpassword-page.component.scss'
})
export class ResetpasswordPageComponent {
  constructor(private router: Router) {}

  backToLogin(){
    this.router.navigate(['']);
  }
}
