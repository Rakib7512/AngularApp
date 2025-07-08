import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Countryservice {

  private apiUrl = 'http://localhost:3000/countries';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  add(country: Country): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, country);
  }

  update(country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${country.id}`, country);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}