import { TestBed, inject } from '@angular/core/testing';

import { Observer.TestService } from './observer.test.service';

describe('Observer.TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Observer.TestService]
    });
  });

  it('should be created', inject([Observer.TestService], (service: Observer.TestService) => {
    expect(service).toBeTruthy();
  }));
});
