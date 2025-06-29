import { TestBed } from '@angular/core/testing';

import { DeliveryServic } from './delivery.servic';

describe('DeliveryServic', () => {
  let service: DeliveryServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
