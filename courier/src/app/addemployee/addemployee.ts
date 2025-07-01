import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee {
  

  formGroup !: FormGroup;
  constructor(

    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      designation: [''],
      salary:[''],
        locatiomn:{
        id:[''],
        name:[''],
        photo:[''],
    }

    });
  }


  addStudent(): void {

    const student: Employee = { ...this.formGroup.value };
    this.employeeService.saveEmployere(student).subscribe({

      next :(res)=>{
        console.log(" Student Save", res);
        this.formGroup.reset();
        this.router.navigate(['/allStudent']);
      },


      error :(error)=>{
          console.log(error);
      }
    })


  }
}


