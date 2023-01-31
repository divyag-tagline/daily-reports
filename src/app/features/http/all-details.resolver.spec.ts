import { TestBed } from '@angular/core/testing';

import { AllDetailsResolver } from './all-details.resolver';

describe('AllDetailsResolver', () => {
  let resolver: AllDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
