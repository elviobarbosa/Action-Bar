import { TestBed } from '@angular/core/testing';

import { ActionBarService } from './action-bar.service';

describe('ActionBarService', () => {
  let service: ActionBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
