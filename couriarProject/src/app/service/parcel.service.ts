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

  getAllParcels(): Observable<any> {
    return this.http.get(this.baseUrl);
  }


  UpdateParcels(id:string): Observable<any> {
    return this.http.put(this.baseUrl + "/" + id, Parcel);
  }

  getParcelById(id: string): Observable<Parcel> {
    return this.http.get<Parcel>(`${this.baseUrl}/${id}`);
  }


  deleteParcel(id : string):Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);


  }

  updateParcelStatus(id: string, status: string, currentHub: string): Observable<Parcel> {
    return this.http.put<Parcel>(`${this.baseUrl}/${id}/status`, { status, currentHub });
  }


  trackParcel(trackingId: string): Observable<Parcel> {
    return this.http.get<Parcel>(`${this.baseUrl}/track/${trackingId}`);
  }
}
