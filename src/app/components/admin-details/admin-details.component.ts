import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { EXAMPLE_DATA, UserData } from '../../data';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.scss'
})
export class AdminDetailsComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'reportingManager', 'Designation', 'Location'];
  dataSource = new MatTableDataSource<UserData>(EXAMPLE_DATA);
}
