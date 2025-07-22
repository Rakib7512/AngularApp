import { Injectable } from '@angular/core';
import { HubTransfer } from '../../model/transferHub.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferHub } from '../transfer-hub/transfer-hub';

@Injectable({
  providedIn: 'root'
})
export class TransferHubService {

  private apiUrl = 'http://localhost:3000/transfer_Hub';

  

  constructor(private http: HttpClient) {}

  getLatestHub(parcelId: string): Observable<HubTransfer> {
    return this.http.get<HubTransfer>(`${this.apiUrl}/latest/${parcelId}`);
  }

  getHistory(parcelId: string): Observable<HubTransfer[]> {
    return this.http.get<HubTransfer[]>(`${this.apiUrl}/history/${parcelId}`);
  }

  saveTransfer(transferHub: HubTransfer): Observable<HubTransfer> {
    return this.http.post<HubTransfer>(this.apiUrl, transferHub);
  }


  updateParcelCurrentHub(parcelId: string, hubId: string): Observable<any> {
  return this.http.patch(`http://localhost:3000/parcel/${parcelId}`, {
    currentHub: hubId
  });
}
}