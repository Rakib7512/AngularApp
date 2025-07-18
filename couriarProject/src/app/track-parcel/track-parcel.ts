import { Component } from '@angular/core';
import { HubTransfer } from '../../model/transferHub.model';
import { TransferHubService } from '../service/transfer-hub.service';

@Component({
  selector: 'app-track-parcel',
  standalone: false,
  templateUrl: './track-parcel.html',
  styleUrl: './track-parcel.css'
})
export class TrackParcel {
   trackingId = '';
  currentHub?: HubTransfer;
  history: HubTransfer[] = [];

  constructor(private hubTransferService: TransferHubService) {}
   track() {
     const id = this.trackingId.trim().toLowerCase();
    this.currentHub = this.hubTransferService.getLatestHub(this.trackingId);
    this.history = this.hubTransferService.getHistory(this.trackingId);
  }
}