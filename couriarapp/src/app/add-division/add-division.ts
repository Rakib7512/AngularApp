import { Component, OnInit } from '@angular/core';
import { District } from '../model/district.model';
import { DivisionService } from '../service/division.service';
import { DistrictService } from '../service/district.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-division-component',
  standalone: false,
  templateUrl: './add-division.html',
  styleUrl: './add-division.css'
})
export class AddDivision implements OnInit{

  divisionForm!: FormGroup;
  districts: District[] = [];

  constructor(
    private fb: FormBuilder,
    private divisionService: DivisionService,
    private districtService: DistrictService
  ) { }

  ngOnInit() {
    this.divisionForm = this.fb.group({
      name: ['', Validators.required],
      districts: [[], Validators.required]
    });

    this.loadDistricts();
  }

  loadDistricts() {
    this.districtService.getAll().subscribe(data => {
      this.districts = data;
    });
  }

  onSubmit() {
    if (this.divisionForm.invalid) return;

    const division = this.divisionForm.value;

    this.divisionService.add(division).subscribe(() => {
      alert('Division added successfully');
      this.divisionForm.reset();
    });
  }

}