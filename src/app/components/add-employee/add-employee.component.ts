import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, ReactiveFormsModule, 
    // HttpClientModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  employeeForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      reportingManager: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  addEmployee() {
    console.log(this.employeeForm.value)
    // if (this.employeeForm.valid) {
    //   this.api.postEmployee(this.employeeForm.value).subscribe({
    //     next: (res) => {
    //       alert("employee Added successfully!");
    //     },
    //     error:()=> {
    //       alert("Error while adding the employee!");
    //     }
    //   })
    // }
  }
}
