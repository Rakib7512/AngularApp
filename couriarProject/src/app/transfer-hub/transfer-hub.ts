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

  ngOnInit(): void {}

  onChange(parcelId: string) {
    console.log('Parcel ID changed:', parcelId);
    this.getCurrentHubByParcelId(parcelId);
    this.loadLatestHub(parcelId);
  }

  getCurrentHubByParcelId(parcelId: string) {
    this.recParcelByEmp.geteceivedParcelById(parcelId).subscribe(data => {
      this.recParcel = data;
    });
  }

  loadLatestHub(parcelId: string): void {
    this.hubTransferService.getLatestHub(parcelId).subscribe(data => {
      this.latestHubTransfer = [data];
      this.transfer.fromHub = data.currentHub; // auto-set fromHub
    });
  }

  submitTransfer() {
    if (
      this.transfer.parcelId &&
      this.transfer.fromHub &&
      this.transfer.toHub &&
      this.transfer.currentHub &&
      this.transfer.courierBy
    ) {
      this.transfer.departedAt = new Date().toISOString(); // auto-set

      this.hubTransferService.saveTransfer(this.transfer).subscribe(() => {
        // Update the parcel's current hub
        this.hubTransferService.updateParcelCurrentHub(this.transfer.parcelId, this.transfer.toHub).subscribe(() => {
          alert('Parcel transferred and updated successfully!');
          this.loadLatestHub(this.transfer.parcelId); // refresh latest
          this.resetTransfer();
        });
      });
    } else {
      alert('Please fill all required fields');
    }
  }

  resetTransfer() {
    this.transfer = {
      parcelId: '',
      fromHub: '',
      toHub: '',
      departedAt: '',
      currentHub: '',
      courierBy: ''
    };
  }


}