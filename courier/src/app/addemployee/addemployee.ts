import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
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
}
