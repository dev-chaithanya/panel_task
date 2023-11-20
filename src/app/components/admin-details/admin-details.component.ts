import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { EXAMPLE_DATA, UserData } from '../../data';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { EditAdminComponent } from '../edit-admin/edit-admin.component';
@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.scss'
})
export class AdminDetailsComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'Designation', 'Action'];
  dataSource = new MatTableDataSource<UserData>(EXAMPLE_DATA);

  constructor(public dialog: MatDialog) {}

  addAdmin(){
    const dialogRef = this.dialog.open(AddAdminComponent, {
      width: '30%',
    });
  }

  editAdmin(){
    const dialogRef = this.dialog.open(EditAdminComponent,{
      width: '30%',
    });
  }
}
