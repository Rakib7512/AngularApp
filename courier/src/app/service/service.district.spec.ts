import { TestBed } from '@angular/core/testing';

import { ServiceDistrict } from './service.district';

describe('ServiceDistrict', () => {
  let service: ServiceDistrict;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDistrict);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
