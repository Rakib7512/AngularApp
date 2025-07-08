import { Component } from '@angular/core';
import { PoliceStation } from '../model/police_station.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-district',
  standalone: false,
  templateUrl: './add-district.html',
  styleUrl: './add-district.css'
})
export class AddDistrict { districtForm: FormGroup;
  policeStations: PoliceStation[] = [];

  constructor(
    private fb: FormBuilder,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService
  ) {
    this.districtForm = this.fb.group({
      name: ['', Validators.required],
      policeStations: [[], Validators.required] // Array of selected Police Station IDs
    });
  }

  ngOnInit() {
    this.loadPoliceStations();
  }

  loadPoliceStations() {
    this.policeStationService.getAll().subscribe(data => {
      this.policeStations = data;
    });
  }

  onSubmit() {
    if (this.districtForm.invalid) return;

    const district: District = this.districtForm.value;

    this.districtService.add(district).subscribe(() => {
      alert('District added successfully!');
      this.districtForm.reset();
    });
  }
}
