import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../service/location.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee implements OnInit {
  locations: Location[] = [];

  formGroup !: FormGroup;
  constructor(

    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService: LocationService,
    private cdr: ChangeDetectorRef

  ) { }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      salary: [''],
      designation: [''],
      date: [''],
      photo: [''],
      location: {
        country: [''],
        division:[''],
        district: [''],
        policeStation: ['']
      }

    });
    // this.loadAllLocation();
    // this.formGroup.get('location')?.get('country',)?.valueChanges.subscribe(country=>{
    //   const selectedLocation =this.locations.find(loc=>loc.country===country);
    //   if(selectedLocation){
    //     this.formGroup.patchValue({location:selectedLocation});
    //   }
    // })



  }

  // loadAllLocation(){
  //   this.locationService.getLocation().subscribe({
  //     next:(loc)=>{
  //       this.locations=loc;
  //     },
  //     error:(err)=>{

  //       console.log(err);
  //     }



  //   }) ;
  // }





  addStudent(): void {

    const employee: Employee = { ...this.formGroup.value };
    this.employeeService.saveEmployere(employee).subscribe({

      next: (res) => {
        // this.loadAllLocation
        console.log(" Employee Save", res);
        this.formGroup.reset();
        this.router.navigate(['/allEmployee']);
        this.cdr.reattach;

      },


      error: (error) => {
        console.log(error);
      }
    })


  }
}

