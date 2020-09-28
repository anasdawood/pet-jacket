import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private pet:Pet;

  constructor() { }

  setPet(pet:Pet)
  {
    this.pet = pet;
  }

  getPet():Pet
  {
    return this.pet;

  }
}
