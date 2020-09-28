import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetBreadsService {

  breads: any;
  constructor() {
    this.breads = [
{ label: "Cat", value: "Cat"},
{ label: "Dog", value: "Dog"}
    ]
  }

returnAllBreads(){
  return this.breads;
}
  
}
