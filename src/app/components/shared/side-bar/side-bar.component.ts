import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LandingPageComponent } from '../../landing-page/landing-page.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UlearnPageComponent } from '../../ulearn-page/ulearn-page.component';
import { UphishPageComponent } from '../../uphish-page/uphish-page.component';
import { ReportPageComponent } from '../../report-page/report-page/report-page.component';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardPageComponent } from "../../dashboard-page/dashboard-page.component";
@Component({
    selector: 'app-side-bar',
    standalone: true,
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    imports: [CommonModule, MatListModule, MatIconModule,
        MatButtonModule, LandingPageComponent, CanvasJSAngularChartsModule,
        UlearnPageComponent, UphishPageComponent, ReportPageComponent, RouterOutlet, DashboardPageComponent]
})
export class SideBarComponent {

}
