import { Component } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';

@Component({
  selector: 'app-add-parcel',
  standalone: false,
  templateUrl: './add-parcel.html',
  styleUrl: './add-parcel.css'
})
export class AddParcel {
  parcel: Parcel = {
    senderName: '',
    receiverName: '',
    senderPhone: '',
    receiverPhone: '',
    senderAddress: '',
    receiverAddress: '',
    fromHub: '',
    toHub: '',
    status: 'Received at Source Hub'
  };

  constructor(private parcelService: ParcelService) {}

  submitParcel(): void {
    this.parcelService.createParcel(this.parcel).subscribe(response => {
      alert('Parcel Created Successfully!');
    });
  }

}
