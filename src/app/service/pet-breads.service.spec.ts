import { TestBed } from '@angular/core/testing';

import { PetBreedsService } from './pet-breeds.service';

describe('PetBreedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetBreedsService = TestBed.get(PetBreedsService);
    expect(service).toBeTruthy();
  });
});
