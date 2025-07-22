import { Component, OnInit } from '@angular/core';
import { HubService } from '../service/hub.service';
import { CountryService } from '../service/country.service';
import { DivisionService } from '../service/division.service';
import { DistrictService } from '../service/district.service';
import { PoliceStationService } from '../service/police-station.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../model/country.module';
import { Division } from '../../model/division.model';
import { District } from '../../model/district.model';
import { PoliceStation } from '../../model/policeStation.model';
import { Hub } from '../../model/hub.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hub',
  standalone: false,
  templateUrl: './create-hub.html',
  styleUrl: './create-hub.css'
})
export class CreateHub implements OnInit {
 hubGroup!: FormGroup;
   editing: boolean = false;
   hub_Id: string | null = null;

  countries: Country[] = [];
  divisions: Division[] = [];
  districts: District[] = [];
  policeStations: PoliceStation[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,
    private hubService: HubService,
    private router:Router
  ) {

     this.hubGroup = this.fb.group({
      hubName: ['', Validators.required],
      country: ['', Validators.required],
      division: ['', Validators.required],
      district: ['', Validators.required],
      policeStation: ['', Validators.required]
    });

  }

  ngOnInit(): void {
   
  
    this.loadCountries()
  }
 loadCountries() {
    this.countryService.getAll().subscribe(data => {
      this.countries = data;
    });
  }



  onCountryChange() {
    const countryId = this.hubGroup.value.countryId;
    this.divisionService.getAll().subscribe(data => {
      this.divisions = data.filter(d => d.id == countryId);
    });
    this.districts = [];
    this.policeStations = [];
    this.hubGroup.patchValue({ divisionId: '', districtId: '', policeStationId: '' });
  }


   

  onDivisionChange() {
    const divisionId = this.hubGroup.value.divisionId;
    this.districtService.getAll().subscribe(data => {
      this.districts = data.filter(d => d.id == divisionId);
    });
    this.policeStations = [];
    this.hubGroup.patchValue({ districtId: '', policeStationId: '' });
  }

  onDistrictChange() {
    const districtId = this.hubGroup.value.districtId;
    this.policeStationService.getAll().subscribe(data => {
      this.policeStations = data.filter(p => p.id == districtId);
    });
    this.hubGroup.patchValue({ policeStationId: '' });
  }

  saveHub() {
    if (this.hubGroup.invalid) return;

    const employee: any = { ...this.hubGroup.value };
     if (this.editing) {
      employee.id = this.hub_Id;
      this.hubService.updateHub(employee).subscribe(() => {
        alert('Hub updated successfully!');
        this.router.navigate(['/view-hub']);
      });
    } else {
      this.hubService.saveHub(employee).subscribe(() => {
        alert('Hub added successfully!');
        this.hubGroup.reset();
        this.districts = [];
        this.districts = [];
        this.policeStations = [];
      });
    }

   
  }

}
