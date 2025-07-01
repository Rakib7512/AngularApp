<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
=======
import { Component } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { FormGroup } from '@angular/forms';
>>>>>>> 385e24a6c6dfe4e1cdde1c67a900675bca4412cb

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
<<<<<<< HEAD
export class Addemployee implements OnInit{
  
  formGroup!:FormGroup
constructor(
  private employeeSarvice:EmployeeService,
  private formBuilder:FormBuilder,
  private router:Router

){}
  ngOnInit(): void {
  this.formGroup=this.formBuilder.group({


  });
  }
=======
export class Addemployee {
  formGroup!: FormGroup
  constructor(private employee:Employee){}

>>>>>>> 385e24a6c6dfe4e1cdde1c67a900675bca4412cb
}
