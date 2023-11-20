import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UphishPageComponent } from '../uphish-page/uphish-page.component';

@Component({
  selector: 'app-ulearn-page',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule, UphishPageComponent],
  templateUrl: './ulearn-page.component.html',
  styleUrl: './ulearn-page.component.scss'
})
export class UlearnPageComponent {

  chartOptionsBar = {
    title: {
    	text: "Number completed course vs score",
      fontSize: 16,
      fontFamily: "Arial, sans-serif",
      fontColor: "#1E7BE4",

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
		text: "Course Participation",
    fontSize: 16,
    fontFamily: "Arial, sans-serif",
    fontColor: "#1E7BE4",
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
