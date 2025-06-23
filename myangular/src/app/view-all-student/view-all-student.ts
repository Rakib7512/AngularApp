import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {
Student:any;

  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.loadAllStudent();
  }
  loadAllStudent(){

    this.Student=this.studentService.getAllStudent();
  }


}
