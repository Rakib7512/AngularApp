import { Component, OnInit } from '@angular/core';
import { Hub } from '../../model/hub.model';
import { HubService } from '../service/hub.service';

@Component({
  selector: 'app-view-hub',
  standalone: false,
  templateUrl: './view-hub.html',
  styleUrl: './view-hub.css'
})
export class ViewHub implements OnInit {

  hubs: Hub[] = [];

  constructor(private hubService: HubService) {}
  ngOnInit(): void {
     this.loadHubs();
  }

  loadHubs(): void {
    this.hubService.getAllHubs().subscribe(data => {
      this.hubs = data;
    });
  }

  deleteHub(id: number): void {
    this.hubService.deleteHub(id).subscribe(() => this.loadHubs());
  }

}
