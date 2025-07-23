import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { User } from '../../../model/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { Parcel } from '../../../model/parcel.model';
import { ParcelService } from '../../service/parcel.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-userprofile',
  standalone: false,
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile implements OnInit {
  user: User | null = null;
  userParcels: Parcel[] = [];

  constructor(
    private parcelService: ParcelService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}



  ngOnInit(): void {
   if (isPlatformBrowser(this.platformId)) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        this.user = parsedUser.user;

        // Call this after setting user
        if (this.user?.id) {
          this.loadUserParcels(this.user.id);
        }
      } else {
        console.error('User not logged in.');
      }
    } else {
      console.warn('localStorage not available (server-side)');
    }
  }

  loadUserParcels(userId: string): void {
    this.parcelService.getParcelsByUserId(userId).subscribe({
      next: (data) => {
        this.userParcels = data;
      },
      error: (err) => {
        console.error('Failed to load user parcel history:', err);
      }
    });
  }
}