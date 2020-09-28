import { TestBed } from '@angular/core/testing';

import { PetHouseService } from './pet-house.service';

describe('PetHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetHouseService = TestBed.get(PetHouseService);
    expect(service).toBeTruthy();
  });
});
