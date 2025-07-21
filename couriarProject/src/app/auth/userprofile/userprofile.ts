import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userprofile',
  standalone: false,
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile implements OnInit{

user: User | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router,
    private userSer: UserService
  ) { }
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['/login']); // not logged in
      return;
    }

    // Fetch user data
    this.subscription = this.userSer.getUserById(+userId).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Failed to load user', error);
        alert('Failed to load user profile.');
      }
    );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
