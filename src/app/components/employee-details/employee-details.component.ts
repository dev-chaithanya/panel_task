import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { UserData, EXAMPLE_DATA } from '../../data';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import {MatIconModule} from '@angular/material/icon';

// import { ApiService } from '../../services/api.service';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, 
            AddEmployeeComponent, MatTableModule, MatCardModule, 
            EditEmployeeComponent, MatIconModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})


export class EmployeeDetailsComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'reportingManager', 'Designation', 'Location', 'Action'];
  dataSource = new MatTableDataSource<UserData>(EXAMPLE_DATA);

  
  constructor(public dialog: MatDialog) {}

  addEmployee(){
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '30%',
    });
  }

  editEmployee(){
    const dialogRef = this.dialog.open(EditEmployeeComponent,{
      width: '30%',
    });
  }
}
