import { TestBed } from '@angular/core/testing';

import { OutputAuthService } from './output-auth.service';

describe('OutputAuthService', () => {
  let service: OutputAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
