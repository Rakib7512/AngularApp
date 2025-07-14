import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferHubService } from '../service/transfer-hub.service';

@Component({
  selector: 'app-view-hub-transfer',
  standalone: false,
  templateUrl: './view-hub-transfer.html',
  styleUrl: './view-hub-transfer.css'
})
export class ViewHubTransfer implements OnInit {




  hubTransfer!: any;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private hubTransferService: TransferHubService,

  ) { }
  ngOnInit(): void {
    this.loadAllChangehub()
  }

   loadChangehub(id:string) {
    this.hubTransfer = this.hubTransferService.getTransfersByParcelId(id);
  }

   loadAllChangehub() {
    this.hubTransfer = this.hubTransferService.getAllTransferHubBy;
  }

  updateParcel(id: string): void {
    this.router.navigate(['update Parcel', id])


  }


  deleteTransferHub(id: string): void {
    this.hubTransferService.deleteTransferHub(id).subscribe({
      next: (res) => {
        console.log("Parcel Delete");
        this.cdr.reattach();
        this.loadAllChangehub();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
