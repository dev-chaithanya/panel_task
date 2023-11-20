import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CERTIFICATE_DATA, certificateData } from '../../data';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule,
    MatIconModule, MatTableModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  displayedColumns: string[] = ['date', 'name', 'Experience'];
  dataSource = new MatTableDataSource<certificateData>(CERTIFICATE_DATA);

  constructor(private router: Router) { }
  ngOnInit(){
    console.log(this.dataSource.data)
  }
  goBack() {
    this.router.navigate(['LandingPage']);
  }
}
