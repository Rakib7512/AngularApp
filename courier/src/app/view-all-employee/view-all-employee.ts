import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-view-all-employee',
  standalone: false,
  templateUrl: './view-all-employee.html',
  styleUrl: './view-all-employee.css'
})
export class ViewAllEmployee implements OnInit{
  employees: any;

  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.loadAllEmployee();
  }

  loadAllEmployee(){
    this.employees=this.employeeService.getAllEmployee();
  }



}
