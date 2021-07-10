import { TestBed } from '@angular/core/testing';

import { CarrentalGuard } from './carrental.guard';

describe('CarrentalGuard', () => {
  let guard: CarrentalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarrentalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
