import { Component } from '@angular/core';
import { HubTransfer } from '../../model/transferHub.model';
import { TransferHubService } from '../service/transfer-hub.service';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';

@Component({
  selector: 'app-track-parcel',
  standalone: false,
  templateUrl: './track-parcel.html',
  styleUrl: './track-parcel.css'
})
export class TrackParcel {
 trackingId = '';
  parcel: Parcel | null = null;
  errorMessage = '';

  constructor(private parcelService: ParcelService) {}

  track() {
    if (!this.trackingId) {
      this.errorMessage = 'Please enter a tracking ID.';
      return;
    }

    this.parcelService.getByTrackingId(this.trackingId).subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          this.parcel = res[0]; // Since you used `?trackingId=`, backend returns array
          this.errorMessage = '';
        } else {
          this.parcel = null;
          this.errorMessage = 'No parcel found with that tracking ID.';
        }
      },
      error: () => {
        this.parcel = null;
        this.errorMessage = 'Error fetching parcel.';
      }
    });
  }
}