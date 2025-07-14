import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HubTransfer } from '../../model/transferHub.model';
import { TransferHub } from '../transfer-hub/transfer-hub';

@Injectable({
  providedIn: 'root'
})
export class TransferHubService {

   private baseUrl = 'http://localhost:3000/transfer_Hub';

  constructor(private http: HttpClient) {}

  createTransfer(transfer: HubTransfer): Observable<HubTransfer> {
    return this.http.post<HubTransfer>(this.baseUrl, transfer);
  }

  getTransfersByParcelId(parcelId: string): Observable<HubTransfer[]> {
    return this.http.get<HubTransfer[]>(`http://localhost:3000/api/parcel/${parcelId}/transfers`);
  }




  
    UpdateTransferHub(id:string): Observable<any> {
      return this.http.put(this.baseUrl + "/" + id, TransferHub);
    }
  
    getTransferHubById(id: string): Observable<TransferHub> {
      return this.http.get<TransferHub>(`${this.baseUrl}/${id}`);
    }

    getAllTransferHubBy(): Observable<TransferHub> {
      return this.http.get<TransferHub>(`${this.baseUrl}`);
    }
  
  
    deleteTransferHub(id : string):Observable<any>{
      return this.http.delete(this.baseUrl+'/'+id);
  
      } 
    }
