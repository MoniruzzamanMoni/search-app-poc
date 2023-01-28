import { TestBed } from '@angular/core/testing';

import { SearchEventBusService } from './search-event-bus.service';

describe('SearchEventBusService', () => {
  let service: SearchEventBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchEventBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
