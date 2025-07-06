import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District } from '../../model/district.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

// baseUrl: string="http://localhost:3000/district";
//   constructor(private http:HttpClient) { }

//   getDistrict():Observable<any>{

//     return this.http.get(this.baseUrl);
//   }


//   saveDistrict(districr:District):Observable<any>{
//     return this.http.post(this.baseUrl,districr);
//   }
//    deleteDistrict(country: string): Observable<any> {
//     return this.http.delete(this.baseUrl + "/" + id);
//   }

//   getLocationById(id: string): Observable<any> {
//     return this.http.get(this.baseUrl + "/" + id);
//   }

//   updateLocation(id: string, location: Location): Observable<any> {
//     return this.http.put(this.baseUrl + "/" + id, Location);
//   }
}

