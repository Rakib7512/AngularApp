import { Component } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee {
  formGroup!: FormGroup
  constructor(private employee:Employee){}

}
