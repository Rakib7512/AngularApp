import { Component, Injectable, OnInit } from '@angular/core';
import { HubTransfer } from '../../model/transferHub.model';
import { TransferHubService } from '../service/transfer-hub.service';

@Component({
  selector: 'app-transfer-hub',
  standalone: false,
  templateUrl: './transfer-hub.html',
  styleUrl: './transfer-hub.css'
})


export class TransferHub implements OnInit {
  latestHubTransfer: HubTransfer[] = [];
  
   transfer: HubTransfer = {
    parcelId: '',
    fromHub: '',
    toHub: '',
    departedAt: '',
    currentHub: '',
    courierBy: ''
  };

  constructor(private hubTransferService: TransferHubService) {}

  ngOnInit(): void {

  }

  loadLatestHub(parcelId: string): void {
  this.hubTransferService.getLatestHub(parcelId).subscribe(data => {
    this.latestHubTransfer = [data]; // single object কে array বানিয়ে নাও
  });

}



submitTransfer() {
  if (this.transfer.parcelId && this.transfer.fromHub && this.transfer.toHub &&
      this.transfer.departedAt && this.transfer.currentHub && this.transfer.courierBy) {
    this.hubTransferService.saveTransfer(this.transfer).subscribe(() => {
      alert('Parcel transferred successfully!');
      this.loadLatestHub(this.transfer.parcelId); // Save করার পরে আবার দেখাও
      this.transfer = {
        parcelId: '',
        fromHub: '',
        toHub: '',
        departedAt: '',
        currentHub: '',
        courierBy: ''
      };
    });
  } else {
    alert('Please fill all fields');
  }
}
}