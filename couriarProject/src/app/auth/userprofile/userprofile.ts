import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class Userprofile implements OnInit, OnDestroy {

  user: User | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService // FIXED: improved naming
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    if (!id) {
      this.router.navigate(['/login']);
      return;
    }

    this.subscription = this.userService.getUserById(id).subscribe({
      next: (data: User) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Failed to load user', error);
        alert('Failed to load user profile.');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
