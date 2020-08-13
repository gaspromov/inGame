import { TestBed } from '@angular/core/testing';

import { IsAdvertGuard } from './is-advert.guard';

describe('IsAdvertGuard', () => {
  let guard: IsAdvertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdvertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
