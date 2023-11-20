import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, 
            MatSelectModule, MatButtonModule, ReactiveFormsModule, 
            MatDialogModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent {
  editEmployeeForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogref: MatDialogRef<EditEmployeeComponent>) { }

  ngOnInit(): void {
    this.editEmployeeForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      reportingManager: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  EditEmployee(){
    console.log(this.editEmployeeForm.value)
    this.editEmployeeForm.reset();
    this.dialogref.close();
  }
}
