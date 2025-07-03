import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-all-employee',
  standalone: false,
  templateUrl: './view-all-employee.html',
  styleUrl: './view-all-employee.css'
})
export class ViewAllEmployee implements OnInit{
  employees: any;

  constructor(private employeeService:EmployeeService,
    private router:Router,
    private cdr: ChangeDetectorRef
    
  ){}
  ngOnInit(): void {
    this.loadAllEmployee();
  }

  loadAllEmployee(){
    this.employees=this.employeeService.getAllEmployee();
  }

   deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        console.log("Employee Delete");
        this.cdr.reattach();
        this.loadAllEmployee();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateEmployee(id: string): void {
    this.router.navigate(['updatestudent', id]);
  }



}
