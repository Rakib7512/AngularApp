import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HubTransfer } from '../../model/transferHub.model';

@Injectable({
  providedIn: 'root'
})
export class TransferHubService {

   private baseUrl = 'http://localhost:3000/transfer_Hub';

  constructor(private http: HttpClient) {}

  createTransfer(transfer: HubTransfer): Observable<HubTransfer> {
    return this.http.post<HubTransfer>(this.baseUrl, transfer);
  }

  getTransfersByParcelId(parcelId: number): Observable<HubTransfer[]> {
    return this.http.get<HubTransfer[]>(`http://localhost:3000/api/parcel/${parcelId}/transfers`);
  }
}
