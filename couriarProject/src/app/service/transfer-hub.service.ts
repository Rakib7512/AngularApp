import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HubTransfer } from '../../model/transferHub.model';
import { TransferHub } from '../transfer-hub/transfer-hub';

@Injectable({
  providedIn: 'root'
})
export class TransferHubService {

  private key = 'hubTransfers';

  constructor() {}

   
private getAllTransfers(): HubTransfer[] {
    const stored = localStorage.getItem(this.key);
    return stored ? JSON.parse(stored) : [];
  }

  // transfer save করো
  saveTransfer(transfer: HubTransfer): void {
    const transfers = this.getAllTransfers();
    transfer.id = transfers.length + 1;
    transfers.push(transfer);
    localStorage.setItem(this.key, JSON.stringify(transfers));
  }

  // একটা Parcel-এর সব transfer দেখাও
 getHistory(parcelId: string): HubTransfer[] {
  return this.getAllTransfers().filter(t => t.parcelId.toLowerCase() === parcelId.toLowerCase());
}

  // latest/current hub
  getLatestHub(parcelId: string): HubTransfer | undefined {
    const transfers = this.getHistory(parcelId);
    return transfers.sort((a, b) => new Date(b.departedAt).getTime() - new Date(a.departedAt).getTime())[0];
  }
  
}