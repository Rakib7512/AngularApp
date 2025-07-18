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
  
  transfer: HubTransfer = {
    parcelId: '',
    fromHub: '',
    toHub: '',
    departedAt: '',
    currentHub: ''
  };

  constructor(private hubTransferService: TransferHubService) {}
  ngOnInit(): void {

  }
  submitTransfer() {
    this.hubTransferService.saveTransfer(this.transfer);
    alert('Parcel transferred successfully!');
    this.transfer = {
      parcelId: '',
      fromHub: '',
      toHub: '',
      departedAt: '',
      currentHub: ''
    };
  }
}