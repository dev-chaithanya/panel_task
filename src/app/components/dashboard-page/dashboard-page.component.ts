import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlearnPageComponent } from "../ulearn-page/ulearn-page.component";
import { UphishPageComponent } from "../uphish-page/uphish-page.component";
import { ReportPageComponent } from "../report-page/report-page/report-page.component";

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss',
    imports: [CommonModule, UlearnPageComponent, UphishPageComponent, ReportPageComponent]
})
export class DashboardPageComponent {

}
