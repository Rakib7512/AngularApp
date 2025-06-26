import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { Updatestudent } from '../updatestudent/updatestudent';


@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {
  students: any;

  constructor(private studentService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.loadAllStudent();
  }


  loadAllStudent() {
    this.students = this.studentService.getAllStudent();
  }


  deleteStudent(id: string): void {
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        console.log("Student Delete");
        this.cdr.reattach();
        this.loadAllStudent();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateStudent(id: string): void {
    this.router.navigate(['updatestudent', id]);
  }
}
