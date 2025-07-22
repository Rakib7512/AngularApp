import { Component, Injectable, OnInit } from '@angular/core';
import { HubTransfer } from '../../model/transferHub.model';
import { TransferHubService } from '../service/transfer-hub.service';
import { RecParcelEmpDetService } from '../service/rec-parcel-emp-det.service';
import { RecParcelEmpDetModel } from '../../model/recParcelByEmpDet.modek';

@Component({
  selector: 'app-transfer-hub',
  standalone: false,
  templateUrl: './transfer-hub.html',
  styleUrl: './transfer-hub.css'
})


export class TransferHub implements OnInit {
  latestHubTransfer: HubTransfer[] = [];
  recParcel: RecParcelEmpDetModel = new RecParcelEmpDetModel();

  transfer: HubTransfer = {
    parcelId: '',
    fromHub: '',
    toHub: '',
    departedAt: '',
    currentHub: '',
    courierBy: ''
  };

  constructor(
    private hubTransferService: TransferHubService,
    private recParcelByEmp: RecParcelEmpDetService
  ) { }

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


  getCurrentHubByParcelId(parcelId: string) {
    this.recParcelByEmp.geteceivedParcelById(parcelId).subscribe(data=>{
      this.recParcel = data;
    });

  }

  onChange(parcelId: string) {
  console.log('Parcel ID changed:', parcelId);
  this.getCurrentHubByParcelId(parcelId);
 
}


}