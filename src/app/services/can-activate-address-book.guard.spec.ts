import { TestBed } from '@angular/core/testing';

import { CanActivateAddressBookGuard } from './can-activate-address-book.guard';

describe('CanActivateAddessBookGuard', () => {
  let guard: CanActivateAddressBookGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAddressBookGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
