import { TestBed, inject } from '@angular/core/testing';

import { AuthGaurdService } from './auth-guard.service';

describe('AuthGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurdService]
    });
  });

  it(
    'should be created',
    inject([AuthGaurdService], (service: AuthGaurdService) => {
      expect(service).toBeTruthy();
    })
  );
});
