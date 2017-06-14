import { TestBed, inject } from '@angular/core/testing';

import { EtsyService } from './etsy.service';

describe('EtsyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtsyService]
    });
  });

  it('should be created', inject([EtsyService], (service: EtsyService) => {
    expect(service).toBeTruthy();
  }));
});
