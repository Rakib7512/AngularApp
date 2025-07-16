import { Component, OnInit } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';
import { Country } from '../../model/country.module';
import { Division } from '../../model/division.model';
import { District } from '../../model/district.model';
import { PoliceStation } from '../../model/policeStation.model';
import { CountryService } from '../service/country.service';
import { DivisionService } from '../service/division.service';
import { DistrictService } from '../service/district.service';
import { PoliceStationService } from '../service/police-station.service';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../../model/employee.model';
import { FormGroup } from '@angular/forms';
import { RecParcelEmpDetService } from '../service/rec-parcel-emp-det.service';

@Component({
  selector: 'app-parcel-req-details',
  standalone: false,
  templateUrl: './parcel-req-details.html',
  styleUrl: './parcel-req-details.css'
})
export class ParcelReqDetails implements OnInit {

  editing: boolean = false;

  parcelId: string = '';
  parcel?: Parcel;
  errorMsg: string = '';
  RecForm!:FormGroup;

  notifications: any[] = [];
  employees:Employee[]=[];
  countries: Country[] = [];
  divisions: Division[] = [];
  districts: District[] = [];
  policeStations: PoliceStation[] = [];

  constructor(
    private parcelService: ParcelService,
    private employeeService: EmployeeService,
    private countryService: CountryService,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,
    private recParcelEmpService:RecParcelEmpDetService




  ) { }
  ngOnInit(): void {
    this.loadLocationData();

    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('parcelNotifications');
      this.notifications = stored ? JSON.parse(stored) : [];
    } else {
      console.warn('localStorage is not available.');
      this.notifications = [];
    }
  }


  loadLocationData(): void {
    this.employeeService.getAllEmployee().subscribe(data=> this.employees=data);
    this.countryService.getAll().subscribe(data => this.countries = data);
    this.divisionService.getAll().subscribe(data => this.divisions = data);
    this.districtService.getAll().subscribe(data => this.districts = data);
    this.policeStationService.getAll().subscribe(data => this.policeStations = data);
  }

  fetchParcel() {
    this.parcelService.getParcelById(this.parcelId).subscribe({
      next: (data) => {
        this.parcel = data;
        this.errorMsg = '';
      },
      error: () => {
        this.parcel = undefined;
        this.errorMsg = 'Parcel not found!';
      }
    });
  }
  getCountryName(id: string): string {
    return this.countries.find(c => c.id === id)?.name || id;
  }

  getDivisionName(id: string): string {
    return this.divisions.find(d => d.id === id)?.name || id;
  }

  getDistrictName(id: string): string {
    return this.districts.find(d => d.id === id)?.name || id;
  }

  getPoliceStationName(id: string): string {
    return this.policeStations.find(p => p.id === id)?.name || id;
  }



  clearNotifications() {
    localStorage.removeItem('parcelNotifications');
    this.notifications = [];
  }
  


    

    recParcel() {
    if (this.RecForm.invalid) return;

    if (this.editing) {
      this.employeeService.updateEmployee(this.RecForm.value).subscribe(() => {
        alert('Updated Successful');
        this.loadLocationData();
        
      });

    } else {
      const { name } = this.RecForm.value;
    this.recParcelEmpService.recParcelEmpDct({ name }).subscribe(() => {
        alert('Added successfully!');
        this.loadLocationData();
        this.employeeService.reset();
        this.editing = false;
      });
    }
  }



  }
   





