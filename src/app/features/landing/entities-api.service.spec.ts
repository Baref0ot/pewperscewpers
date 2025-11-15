import { TestBed } from '@angular/core/testing';

import { EntitiesApiService } from './entities-api.service';

describe('EntitiesApiService', () => {
  let service: EntitiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntitiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
