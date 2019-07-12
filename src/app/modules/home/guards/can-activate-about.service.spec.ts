import { TestBed } from '@angular/core/testing';

import { CanActivateAboutService } from './can-activate-about.service';

describe('CanActivateAboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateAboutService = TestBed.get(CanActivateAboutService);
    expect(service).toBeTruthy();
  });
});
