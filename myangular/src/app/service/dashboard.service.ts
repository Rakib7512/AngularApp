import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private baseUrl = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getShipmentStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/shipment-stats`);
  }

  getMessages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/messages`);
  }
}
