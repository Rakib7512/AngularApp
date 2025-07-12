import { Component, OnInit } from '@angular/core';
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
    parcelId: 0,
    fromHub: '',
    currentHub:'',
    toHub: '',
    departedAt: new Date(),
    arrivedAt: new Date(),
    courierBy: ''
  };

  constructor(private transferService: TransferHubService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitTransfer(): void {
    this.transferService.createTransfer(this.transfer).subscribe(response => {
      alert('Transfer Recorded Successfully!');
    });
  }


}
