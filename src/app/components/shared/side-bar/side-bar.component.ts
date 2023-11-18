import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LandingPageComponent } from '../../landing-page/landing-page.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, LandingPageComponent, CanvasJSAngularChartsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  chartOptionsBar = {
    title: {
    	text: "Number completed course vs score"
    },
    data: [{
      type: "column",
      axisY: {
        title: "Number of completed courses",
        titleFontColor: "#3B3A3A",
      },
      axisX: {
        title: "Score %",
        titleFontColor: "#3B3A3A",
      },
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 },
        { x: 60, y: 68 },
        { x: 70, y: 28 },
        { x: 80, y: 34 },
        { x: 90, y: 14 }
      ]
    }]                
  };

  chartOptionsPie = {
	  animationEnabled: true,
	  title:{
		text: "Course Participation"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 35, name: "Yet to Start" },
		  { y: 7, name: "Incomplete" },
		  { y: 7, name: "Finished" }
		]
	  }]
	}
}
