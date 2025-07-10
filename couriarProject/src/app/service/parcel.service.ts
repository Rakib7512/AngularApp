import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

 private baseUrl = 'http://localhost:3000/parcel';

  constructor(private http: HttpClient) {}

  createParcel(parcel: Parcel): Observable<Parcel> {
    return this.http.post<Parcel>(this.baseUrl, parcel);
  }

  getAllParcels(): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(this.baseUrl);
  }

  getParcelById(id: number): Observable<Parcel> {
    return this.http.get<Parcel>(`${this.baseUrl}/${id}`);
  }

  updateParcelStatus(id: number, status: string, currentHub: string): Observable<Parcel> {
    return this.http.put<Parcel>(`${this.baseUrl}/${id}/status`, { status, currentHub });
  }
}
