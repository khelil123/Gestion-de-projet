import { TestBed } from '@angular/core/testing';

import { SousServiceService } from './sous-service.service';

describe('SousServiceService', () => {
  let service: SousServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
