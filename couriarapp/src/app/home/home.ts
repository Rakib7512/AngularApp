import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
loginForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      alert('⚠️ Please fill in all required fields correctly.');
      return;
    }

    const { email, password } = this.loginForm.value;

    // ✅ Dummy authentication (you'll replace this later with real backend)
    if (email === 'admin@dhl.com' && password === '123456') {
      alert('✅ Login successful!');
      // Redirect to dashboard or employee list
      this.router.navigate(['/allEmp']);
    } else {
      alert('❌ Invalid email or password!');
    }
  }
}
