import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

baseUrl: string="http://localhost:3000/country";
  constructor(private http:HttpClient) { }

  getLocation():Observable<any>{

    return this.http.get(this.baseUrl);
  }


  saveCountry(country:Country):Observable<any>{
    return this.http.post(this.baseUrl,country);
  }
   deleteCountry(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getCountryById(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }

  updateCountry(id: string, country: Country): Observable<any> {
    return this.http.put(this.baseUrl + "/" + id, Country);
  }
}
