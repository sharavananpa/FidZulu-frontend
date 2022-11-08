import { TestBed } from '@angular/core/testing';

import { PriceLocationService } from './price-location.service';

describe('PriceLocationService', () => {
  let service: PriceLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
