import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LandingPageComponent } from '../../landing-page/landing-page.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, LandingPageComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
