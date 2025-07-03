import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee implements OnInit{
  locations:Location;
  formGroup !: FormGroup;
  constructor(

    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService:LocationService

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
    this.loadAllLocation
  }

  loadAllLocation(){
    this.locations=this.locationService.getLocation();
  }


  addStudent(): void {

    const employee: Employee = { ...this.formGroup.value };
    this.employeeService.saveEmployere(employee).subscribe({

      next :(res)=>{
        console.log(" Employee Save", res);
        this.formGroup.reset();
        this.router.navigate(['/allEmployee']);
      },


      error :(error)=>{
          console.log(error);
      }
    })


  }
}


