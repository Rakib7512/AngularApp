import { TestBed } from '@angular/core/testing';

import { AuthServic } from './auth.servic';

describe('AuthServic', () => {
  let service: AuthServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
