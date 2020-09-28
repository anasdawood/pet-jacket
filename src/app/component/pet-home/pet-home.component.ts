import { Component, OnInit } from '@angular/core';
import {PetHouseService} from '../../service/pet-house.service'
import {Pet} from "../../model/pet";


@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.css']
})
export class PetHomeComponent implements OnInit {

  pets: Pet[];
  cols: any[];

  constructor(private petService:PetHouseService) { }

  ngOnInit() {
    this.petService.listPets().then(pets=>this.pets = pets);
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'bread', header: 'Bread' },
      { field: 'location', header: 'Location' },
      { field: 'lat', header: 'Latitude' },
      { field: 'lon', header: 'Longtitude' },
  ];
  }

}
