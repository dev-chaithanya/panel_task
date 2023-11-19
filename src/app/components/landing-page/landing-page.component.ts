import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../shared/nav-bar/nav-bar.component";
import { SideBarComponent } from "../shared/side-bar/side-bar.component";
import { DashboardPageComponent } from "../dashboard-page/dashboard-page.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [CommonModule, NavBarComponent, SideBarComponent, DashboardPageComponent]
})
export class LandingPageComponent {
    isToggled = false;

    onToggleChange(value: any) {
        this.isToggled = value;
        console.log("parent:",this.isToggled)
      }
}
