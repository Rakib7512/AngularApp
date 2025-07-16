import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { Parcel } from '../../model/parcel.model';
import { Observable } from 'rxjs';
import { RecParcelEmpDetModel } from '../../model/recParcelByEmpDet.modek';

@Injectable({
  providedIn: 'root'
})
export class RecParcelEmpDetService {

  private apiUrl = 'http://localhost:3000/recParcvelEmpDec';
  constructor(
    private http: HttpClient,
    private employee: Employee,
    private parcel: Parcel
  ) { }

  recParcelEmpDct(recParcelEmpDet: RecParcelEmpDetModel): Observable<any> {
    return this.http.post(this.apiUrl, recParcelEmpDet);

  }

}
