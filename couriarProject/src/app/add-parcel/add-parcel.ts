import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parcel',
  standalone: false,
  templateUrl: './add-parcel.html',
  styleUrl: './add-parcel.css'
})
export class AddParcel implements OnInit{
  
  

  parcel: Parcel = {
    trackingId:'',
    senderName: '',
    receiverName: '',
    senderPhone: '',
    receiverPhone: '',
    senderAddress: '',
    receiverAddress: '',
    fromHub: '',
    currentHub: '',
    toHub: '',
    deliveryPerson:'',
    status: 'Received at Source Hub'
  };

  constructor(private parcelService: ParcelService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitParcel(): void {
    this.parcelService.createParcel(this.parcel).subscribe(response => {
      this.router.navigate(['viewparcel'])
      alert('Parcel Created Successfully!');
    });
  }

}
