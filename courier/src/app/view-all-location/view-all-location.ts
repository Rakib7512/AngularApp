import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-location',
  standalone: false,
  templateUrl: './view-all-location.html',
  styleUrl: './view-all-location.css'
})
export class ViewAllLocation implements OnInit {
  locations:any;
  constructor(
    private locationService:LocationService,
    private router:Router,
    private cdr:ChangeDetectorRef
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    loadAllLocation(){
    this.locations=this.locationService.getLocation();
  }


  deleteLocation(id: string): void {
    this.locationService.deleteLocation(id).subscribe({
      next: (res) => {
        console.log("Employee Delete");
        this.cdr.reattach();
        this.loadAllLocation();
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
