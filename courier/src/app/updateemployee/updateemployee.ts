import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  standalone: false,
  templateUrl: './updateemployee.html',
  styleUrl: './updateemployee.css'
})
export class Updateemployee implements OnInit {
  id: string = '';
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadStudentById();
  }

  loadStudentById() {
    // nicher id ta holo service class ar update ar return ar id
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmplpyeeById(this.id).subscribe({
      next: (res) => {
        this.employee = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('error fetching student:', err)
      }
    });
  }

  updateStudent(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: () => this.router.navigate(['/allStudent']),
      error: (err) => console.error('update fail', err)
    });
  }
}
