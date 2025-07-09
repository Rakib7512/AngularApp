import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'couriarProject';
  trackingNumber: string = '';

onSearch(): void {
  if (this.trackingNumber.trim()) {
    alert(`Tracking shipment: ${this.trackingNumber}`);
    // আপনি চাইলে router.navigate করে tracking পেজে পাঠাতে পারেন:
    // this.router.navigate(['/track', this.trackingNumber]);
  }
}
}
