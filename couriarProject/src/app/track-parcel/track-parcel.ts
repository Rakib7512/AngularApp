import { Component } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';

@Component({
  selector: 'app-track-parcel',
  standalone: false,
  templateUrl: './track-parcel.html',
  styleUrl: './track-parcel.css'
})
export class TrackParcel {
  trackingId: string = '';
  parcel: Parcel | null = null;
  errorMsg: string = '';

  constructor(private parcelService: ParcelService){}

   onTrack(): void {
    if (this.trackingId.trim() === '') return;

    this.parcelService.trackParcel(this.trackingId).subscribe({
      next: (res) => {
        this.parcel = res;
        this.errorMsg = '';
      },
      error: () => {
        this.parcel = null;
        this.errorMsg = `❌ No parcel found with tracking ID: ${this.trackingId}`;
      }
    });
  }

}
