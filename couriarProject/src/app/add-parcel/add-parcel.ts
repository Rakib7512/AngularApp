import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Country } from '../../model/country.module';
import { Division } from '../../model/division.model';
import { District } from '../../model/district.model';
import { PoliceStation } from '../../model/policeStation.model';
import { CountryService } from '../service/country.service';
import { DivisionService } from '../service/division.service';
import { DistrictService } from '../service/district.service';
import { PoliceStationService } from '../service/police-station.service';

@Component({
  selector: 'app-add-parcel',
  standalone: false,
  templateUrl: './add-parcel.html',
  styleUrl: './add-parcel.css'
})
export class AddParcel implements OnInit {

  parcelForm!: FormGroup;
  editing: boolean = false;
  parcelId: string | null = null;



  countries: Country[] = [];
  allDivisions: Division[] = [];
  allDistricts: District[] = [];
  allPoliceStations: PoliceStation[] = [];

  filteredDivisions: Division[] = [];
  filteredDistricts: District[] = [];
  filteredPoliceStations: PoliceStation[] = [];



  parcel: Parcel = {
    trackingId: '',
    senderName: '',
    receiverName: '',
    senderPhone: '',
    receiverPhone: '',
    senderAddress: '',
    receiverAddress: '',
    reciveCountryHub: '',
    reciveDivisionHub: '',
    reciveDistrictHub: '',
    recivePoliceStationHub: '',
    sendCountryHub: '',
    sendDivisionHub: '',
    sendDistrictHub: '',
    sendPoliceStationHub: '',
    currentHub: '',
    bookingAgent:'',
    deliveryPerson: '',
    status: 'Received at Source Hub'
  };

  constructor(
    private countryService: CountryService,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,
    private parcelService: ParcelService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitParcel(): void {
    //  created trackingId then send to parcel 
    this.parcel.trackingId = uuidv4();

    //  parcelService backend 
    this.parcelService.createParcel(this.parcel).subscribe(response => {
      alert('Parcel Created Successfully!');
      this.router.navigate(['viewparcel']);
    }, error => {
      console.error('Parcel creation failed:', error);
      alert('Failed to create parcel!');
    });
  }

   onCountryChange() {
    const selectedCountryId = this.parcelForm.value.country;
    const selectedCountry = this.countries.find(c => c.id == selectedCountryId);
    if (selectedCountry) {
      this.filteredDivisions = this.allDivisions.filter(d => selectedCountry.divisions.includes(d.id!));
      this.filteredDistricts = [];
      this.filteredPoliceStations = [];
      this.parcelForm.patchValue({ division: '', district: '', policeStation: '' });
    }
  }

  onDivisionChange() {
    const selectedDivisionId = this.parcelForm.value.division;
    const selectedDivision = this.allDivisions.find(d => d.id == selectedDivisionId);
    if (selectedDivision) {
      this.filteredDistricts = this.allDistricts.filter(dist => selectedDivision.districts.includes(dist.id!));
      this.filteredPoliceStations = [];
      this.parcelForm.patchValue({ district: '', policeStation: '' });
    }
  }

  onDistrictChange() {
    const selectedDistrictId = this.parcelForm.value.district;
    const selectedDistrict = this.allDistricts.find(dist => dist.id == selectedDistrictId);
    if (selectedDistrict) {
      this.filteredPoliceStations = this.allPoliceStations.filter(ps => selectedDistrict.policeStations.includes(ps.id!));
      this.parcelForm.patchValue({ policeStation: '' });
    }
  }

}
