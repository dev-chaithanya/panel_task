import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-admin',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, 
            MatSelectModule, MatButtonModule, ReactiveFormsModule, 
            MatDialogModule],
  templateUrl: './edit-admin.component.html',
  styleUrl: './edit-admin.component.scss'
})
export class EditAdminComponent {

  editAdminForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editAdminForm = this.formBuilder.group({
      AdminId: ['', Validators.required],
      AdminName: ['', Validators.required],
      AdminEmail: ['', Validators.required],
      designation: ['', Validators.required],
    });
  }

  EditAdmin(){
    console.log(this.editAdminForm.value)
  }
}
