import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from "../side-bar/side-bar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { Router, RouterOutlet} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { LandingPageComponent } from "../../landing-page/landing-page.component";
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardPageComponent } from "../../dashboard-page/dashboard-page.component";
import { ReportPageComponent } from "../../report-page/report-page/report-page.component";
import { AdminDetailsComponent } from "../../admin-details/admin-details.component";
import { EmployeeDetailsComponent } from "../../employee-details/employee-details.component";
@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    imports: [CommonModule, SideBarComponent, MatToolbarModule,
        MatIconModule, MatListModule, RouterOutlet,
        MatMenuModule, LandingPageComponent, MatButtonModule,
        MatSidenavModule, DashboardPageComponent, ReportPageComponent,
        AdminDetailsComponent, EmployeeDetailsComponent]
})
export class NavBarComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
  @ViewChild('dashboard') dashboard: ElementRef | any;
  @ViewChild('report') report: ElementRef | any;
  @ViewChild('admin') admin: ElementRef | any;
  @ViewChild('employee') employee: ElementRef | any;

  showMenu = false;

    toggleMenu() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
    this.menuToggled.emit(this.showMenu);
  }
  constructor(private router: Router) {}

  viewDashboard(){
    this.dashboard.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  viewReportDetails(){
    this.report.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  viewAdminDetails(){
    this.admin.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  viewEmployeeDetails(){
    this.employee.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  viewProfile(){
    this.router.navigate(['Profile'])
  }

  logout(){
    this.router.navigate(['LoginPage']);
  }
}
