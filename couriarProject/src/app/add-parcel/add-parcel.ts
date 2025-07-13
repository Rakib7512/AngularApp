import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  countries: Country[] = [];
  divisions: Division[] = [];
  districts: District[] = [];
  policeStations: PoliceStation[] = [];

  // Sender
  filteredSenderDivisions: Division[] = [];
  filteredSenderDistricts: District[] = [];
  filteredSenderPoliceStations: PoliceStation[] = [];

  // Receiver
  filteredReceiverDivisions: Division[] = [];
  filteredReceiverDistricts: District[] = [];
  filteredReceiverPoliceStations: PoliceStation[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,
    private parcelService: ParcelService,
    private router: Router
  ) {
    this.parcelForm = this.fb.group({
      trackingId: [''],
      senderName: ['', Validators.required],
      senderPhone: ['', Validators.required],
      senderAddress: ['', Validators.required],
      sendCountry: ['', Validators.required],
      sendDivision: ['', Validators.required],
      sendDistrict: ['', Validators.required],
      sendPoliceStation: ['', Validators.required],

      receiverName: ['', Validators.required],
      receiverPhone: ['', Validators.required],
      receiverAddress: ['', Validators.required],
      receiveCountry: ['', Validators.required],
      receiveDivision: ['', Validators.required],
      receiveDistrict: ['', Validators.required],
      receivePoliceStation: ['', Validators.required],

      currentHub: ['', Validators.required],
      bookingAgent: ['', Validators.required],
      deliveryPerson: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadMasterData();
  }

  loadMasterData() {
    this.countryService.getAll().subscribe(data => this.countries = data);
    this.divisionService.getAll().subscribe(data => this.divisions = data);
    this.districtService.getAll().subscribe(data => this.districts = data);
    this.policeStationService.getAll().subscribe(data => this.policeStations = data);
  }

  onSubmitParcel() {
    

    const parcel: Parcel = { ...this.parcelForm.value };
    parcel.trackingId = uuidv4();

    this.parcelService.saveParcel(parcel).subscribe(() => {
      alert('Parcel created successfully!');
      this.parcelForm.reset();
      this.clearFilters();
      this.router.navigate(['/viewparcel']);
    }, error => {
      console.error(error);
      alert('Failed to create parcel.');
    });
  }

  clearFilters() {
    this.filteredSenderDivisions = [];
    this.filteredSenderDistricts = [];
    this.filteredSenderPoliceStations = [];

    this.filteredReceiverDivisions = [];
    this.filteredReceiverDistricts = [];
    this.filteredReceiverPoliceStations = [];
  }

  // ✅ Cascading Sender
  onCountryChange() {
  const countryId = this.parcelForm.value.sendCountry;
  const selectedCountry = this.countries.find(c => c.id === countryId);
  if (selectedCountry) {
    this.filteredSenderDivisions = this.divisions.filter(div =>
      selectedCountry.divisions.includes(div.id)
    );
  } else {
    this.filteredSenderDivisions = [];
  }
  this.filteredSenderDistricts = [];
  this.filteredSenderPoliceStations = [];
  this.parcelForm.patchValue({ sendDivision: '', sendDistrict: '', sendPoliceStation: '' });
}

onDivisionChange() {
  const divisionId = this.parcelForm.value.sendDivision;
  const selectedDivision = this.divisions.find(div => div.id === divisionId);
  if (selectedDivision) {
    this.filteredSenderDistricts = this.districts.filter(dist =>
      selectedDivision.districts.includes(dist.id)
    );
  } else {
    this.filteredSenderDistricts = [];
  }
  this.filteredSenderPoliceStations = [];
  this.parcelForm.patchValue({ sendDistrict: '', sendPoliceStation: '' });
}

onDistrictChange() {
  const districtId = this.parcelForm.value.sendDistrict;
  const selectedDistrict = this.districts.find(dist => dist.id === districtId);
  if (selectedDistrict) {
    this.filteredSenderPoliceStations = this.policeStations.filter(ps =>
      selectedDistrict.policeStations.includes(ps.id!)
    );
  } else {
    this.filteredSenderPoliceStations = [];
  }
  this.parcelForm.patchValue({ sendPoliceStation: '' });
}



  // ✅ Cascading Receiver
  onCountryChange2() {
  const countryId = this.parcelForm.value.receiveCountry;
  const selectedCountry = this.countries.find(c => c.id === countryId);
  if (selectedCountry) {
    this.filteredReceiverDivisions = this.divisions.filter(div =>
      selectedCountry.divisions.includes(div.id)
    );
  } else {
    this.filteredReceiverDivisions = [];
  }
  this.filteredReceiverDistricts = [];
  this.filteredReceiverPoliceStations = [];
  this.parcelForm.patchValue({ receiveDivision: '', receiveDistrict: '', receivePoliceStation: '' });
}

onDivisionChange2() {
  const divisionId = this.parcelForm.value.receiveDivision;
  const selectedDivision = this.divisions.find(div => div.id === divisionId);
  if (selectedDivision) {
    this.filteredReceiverDistricts = this.districts.filter(dist =>
      selectedDivision.districts.includes(dist.id)
    );
  } else {
    this.filteredReceiverDistricts = [];
  }
  this.filteredReceiverPoliceStations = [];
  this.parcelForm.patchValue({ receiveDistrict: '', receivePoliceStation: '' });
}

onDistrictChange2() {
  const districtId = this.parcelForm.value.receiveDistrict;
  const selectedDistrict = this.districts.find(dist => dist.id === districtId);
  if (selectedDistrict) {
    this.filteredReceiverPoliceStations = this.policeStations.filter(ps =>
      selectedDistrict.policeStations.includes(ps.id!)
    );
  } else {
    this.filteredReceiverPoliceStations = [];
  }
  this.parcelForm.patchValue({ receivePoliceStation: '' });
}

}
