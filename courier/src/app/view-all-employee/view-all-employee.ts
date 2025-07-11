import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { Country } from '../../model/country.model';


@Component({
  selector: 'app-view-all-employee',
  standalone: false,
  templateUrl: './view-all-employee.html',
  styleUrl: './view-all-employee.css'
})
export class ViewAllEmployee implements OnInit{
    emp!: Employee;

  employees: Employee[] = [];
  countries: Country[] = [];
  divisions: Divisions[] = [];
  districts: District[] = [];
  policeStations: PoliceStation[] = [];

  constructor(
    private employeeService: Employeeservice,
    private countryService: Countryservice,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loadAllEmployee();
  }

  
}
