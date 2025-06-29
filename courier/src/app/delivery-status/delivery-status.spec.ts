import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryStatus } from './delivery-status';

describe('DeliveryStatus', () => {
  let component: DeliveryStatus;
  let fixture: ComponentFixture<DeliveryStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
