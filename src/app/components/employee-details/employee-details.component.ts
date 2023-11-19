import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { UserData, EXAMPLE_DATA } from '../../data';

// import { ApiService } from '../../services/api.service';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, AddEmployeeComponent, MatTableModule, MatCardModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})


export class EmployeeDetailsComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'reportingManager', 'Designation', 'Location'];
  dataSource = new MatTableDataSource<UserData>(EXAMPLE_DATA);

  
  constructor(public dialog: MatDialog) {}

  addEmployee(){
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '30%',
    });
  }
}
