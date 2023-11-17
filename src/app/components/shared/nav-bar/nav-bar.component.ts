import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from "../side-bar/side-bar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { RouterOutlet} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { LandingPageComponent } from "../../landing-page/landing-page.component";
import {MatButtonModule} from '@angular/material/button';
@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    imports: [CommonModule, SideBarComponent, MatToolbarModule,
        MatIconModule, MatListModule, RouterOutlet,
        MatMenuModule, LandingPageComponent, MatButtonModule]
})
export class NavBarComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


}
