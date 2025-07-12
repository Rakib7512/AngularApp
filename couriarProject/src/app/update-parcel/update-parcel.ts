import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Parcel } from '../../model/parcel.model';
import { ParcelService } from '../service/parcel.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-parcel',
  standalone: false,
  templateUrl: './update-parcel.html',
  styleUrl: './update-parcel.css'
})
export class UpdateParcel implements OnInit{
  id:string='';
  parcel:Parcel=new Parcel();
  constructor(
    private parcelService:ParcelService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,



  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadParcelById() {
    // nicher id ta holo service class ar update ar return ar id
    this.id = this.route.snapshot.params['id'];
    this.parcelService.getParcelById(this.id).subscribe({
      next: (res) => {
        this.parcel = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('error fetching student:', err)
      }
    });
  }

  updateParcel(): void {
    this.parcelService.UpdateParcels(this.id).subscribe({
      next: () => this.router.navigate(['/allparcel']),
      error: (err) => console.error('update fail', err)
    });
  }
}
  


