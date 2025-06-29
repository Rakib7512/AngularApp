import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackShipment } from './track-shipment';

describe('TrackShipment', () => {
  let component: TrackShipment;
  let fixture: ComponentFixture<TrackShipment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackShipment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackShipment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
