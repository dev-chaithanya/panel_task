import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validator, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, 
            MatSelectModule, MatButtonModule, MatDialogModule, 
            ReactiveFormsModule],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss'
})
export class AddAdminComponent {

  adminForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      adminId: ['', Validators.required],
      adminName: ['', Validators.required],
      adminEmail: ['', Validators.required],
      designation: ['', Validators.required],
    });
  }

  addAdmin() {
    console.log(this.adminForm.value)
  }
}
