import { TestBed } from '@angular/core/testing';

import { PiterService } from './piter.service';

describe('PiterService', () => {
  let service: PiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
