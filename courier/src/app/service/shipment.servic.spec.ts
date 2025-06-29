import { TestBed } from '@angular/core/testing';

import { ShipmentServic } from './shipment.servic';

describe('ShipmentServic', () => {
  let service: ShipmentServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
