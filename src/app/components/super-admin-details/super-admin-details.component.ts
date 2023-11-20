import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EXAMPLE_DATA, UserData } from '../../data';
import { MatDialog } from '@angular/material/dialog';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { EditAdminComponent } from '../edit-admin/edit-admin.component';

@Component({
  selector: 'app-super-admin-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTableModule ],
  templateUrl: './super-admin-details.component.html',
  styleUrl: './super-admin-details.component.scss'
})
export class SuperAdminDetailsComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'Designation', 'Action'];
  dataSource = new MatTableDataSource<UserData>(EXAMPLE_DATA);

  constructor(public dialog: MatDialog, private router: Router) {}

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

  isButtonVisible(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/SuperAdminDetailsPage';
  }

  goBack() {
    this.router.navigate(['LandingPage']);
  }
}
