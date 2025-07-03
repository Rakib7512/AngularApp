import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashbord',
  standalone: false,
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css'
})
export class Dashbord implements OnInit {
shipmentStats: any;
  messages: string[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getShipmentStats().subscribe(data => {
      this.shipmentStats = data;
    });

    this.dashboardService.getMessages().subscribe(data => {
      this.messages = data;
    });
  }
}
