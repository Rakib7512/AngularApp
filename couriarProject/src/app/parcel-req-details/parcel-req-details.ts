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

@Component({
  selector: 'app-parcel-req-details',
  standalone: false,
  templateUrl: './parcel-req-details.html',
  styleUrl: './parcel-req-details.css'
})
export class ParcelReqDetails implements OnInit {
  
   parcelId: string = '';
  parcel?: Parcel;
  errorMsg: string = '';

  notifications: any[] = [];

  countries: Country[] = [];
divisions: Division[] = [];
districts: District[] = [];
policeStations: PoliceStation[] = [];

  constructor(
    private parcelService: ParcelService,
    
  private countryService: CountryService,
  private divisionService: DivisionService,
  private districtService: DistrictService,
  private policeStationService: PoliceStationService
  
  
  
  
  ) {}
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



}
