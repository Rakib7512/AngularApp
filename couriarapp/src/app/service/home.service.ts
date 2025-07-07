import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface LoginPayload {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {

   private loginUrl = 'http://localhost:3000/users'; // endpoint in db.json

  constructor(private http: HttpClient) {}

  // Check if email & password match any user in db.json
  login(payload: LoginPayload): Observable<any> {
    return this.http.get<any[]>(`${this.loginUrl}?email=${payload.email}&password=${payload.password}`);
  }
}
