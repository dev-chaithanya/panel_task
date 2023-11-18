import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'app-uphish-page',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './uphish-page.component.html',
  styleUrl: './uphish-page.component.scss'
})
export class UphishPageComponent {

  chartOptionsPieOpened = {
	  animationEnabled: true,
	  title:{
		text: "Opened"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 22, name: "Opened" },
      { y: 78, name: "Unopened" }
		]
	  }]
	}
  chartOptionsPieVisited = {
	  animationEnabled: true,
	  title:{
		text: "Visited"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 16, name: "Visited" },
      { y: 84, name: "Unvisited" }
		]
	  }]
	}

  chartOptionsPieCompromised = {
	  animationEnabled: true,
	  title:{
		text: "Compromised"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 18, name: "Compromised" },
      { y: 82, name: "UnCompromised" }
		]
	  }]
	}
  chartOptionsPieReported = {
	  animationEnabled: true,
	  title:{
		text: "Reported"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 8, name: "Reported" },
      { y: 92, name: "Not Reported" }
		]
	  }]
	}
}
