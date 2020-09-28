import { TestBed } from '@angular/core/testing';

import { PetBreadsService } from './pet-breads.service';

describe('PetBreadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetBreadsService = TestBed.get(PetBreadsService);
    expect(service).toBeTruthy();
  });
});
