import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { LocationService } from '../service/location.service';
import { Country } from '../../model/country.model';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee implements OnInit{
  locations:Country[]=[];
 
  formGroup !: FormGroup;
  constructor(

    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private countryService:CountryService,
    private cdr:ChangeDetectorRef

  ) { }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      salary:[''],
      designation: [''],
      date:[''],
      photo:[''],
        location:{
        country:[''],
        district:[''],
        policeStation:[''],
    }

    });
    this.loadAllLocation();
    this.formGroup.get('location')?.get('country',)?.valueChanges.subscribe(country=>{
      const selectedLocation =this.locations.find(loc=>loc.country===country);
      if(selectedLocation){
        this.formGroup.patchValue({location:selectedLocation});
      }
    })


    
  }

  loadAllLocation(){
    this.countryService.getLocation().subscribe({
      next:(loc)=>{
        this.locations=loc;
      },
      error:(err)=>{

        console.log(err);
      }



    }) ;
  }


  


  addStudent(): void {

    const employee: Employee = { ...this.formGroup.value };
    this.employeeService.saveEmployere(employee).subscribe({

      next :(res)=>{
        this.loadAllLocation
        console.log(" Employee Save", res);
        this.formGroup.reset();
        this.router.navigate(['/allEmployee']);
        this.cdr.reattach;

      },


      error :(error)=>{
          console.log(error);
      }
    })


  }
}


