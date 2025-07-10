import { Component } from '@angular/core';
import { HubTransfer } from '../../model/transferHub.model';
import { TransferHubService } from '../service/transfer-hub.service';

@Component({
  selector: 'app-transfer-hub',
  standalone: false,
  templateUrl: './transfer-hub.html',
  styleUrl: './transfer-hub.css'
})
export class TransferHub {
  transfer: HubTransfer = {
    parcelId: 0,
    fromHub: '',
    toHub: '',
    departedAt: new Date(),
    arrivedAt: new Date(),
    courierBy: ''
  };

  constructor(private transferService: TransferHubService) {}

  submitTransfer(): void {
    this.transferService.createTransfer(this.transfer).subscribe(response => {
      alert('Transfer Recorded Successfully!');
    });
  }


}
