import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
baseUrl: string="http://localhost:3000/employees";
  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<any>{

    return this.http.get(this.baseUrl);
  }

}
