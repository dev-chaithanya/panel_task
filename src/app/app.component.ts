import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LandingPageComponent} from './components/landing-page/landing-page.component';
import { NavBarComponent } from "./components/shared/nav-bar/nav-bar.component";
import { SideBarComponent } from "./components/shared/side-bar/side-bar.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, LandingPageComponent, 
              NavBarComponent, SideBarComponent, LoginPageComponent, 
              MatCardModule, MatButtonModule, MatFormFieldModule, 
              // HttpClientModule
            ]
})
export class AppComponent {
  title = 'AdminPanel';

  constructor(private router: Router) {}

  ForgotPassword(){
    console.log("testing")
    this.router.navigate(['ResetPassword']);
  }
}
