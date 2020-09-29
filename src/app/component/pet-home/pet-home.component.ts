import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {PetHouseService} from '../../service/pet-house.service'
import {Pet} from "../../model/pet";
import { Router } from '@angular/router';
import { SharingService } from 'src/app/service/sharing.service';


@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.css']
})
export class PetHomeComponent implements OnInit {
  @Output() redirect:EventEmitter<any> = new EventEmitter();

  pets: Pet[];
  cols: any[];

  constructor(private petService:PetHouseService,private router:Router,private sharingService:SharingService) { }

  ngOnInit() {
    this.petService.listPets().then(pets=>this.pets = pets);
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'breed', header: 'Breed' },
      { field: 'location', header: 'Location' },
      { field: 'lat', header: 'Latitude' },
      { field: 'lon', header: 'Longtitude' },
  ];
  }

  checkIfNeedJacket(pet:Pet)
  {
    this.sharingService.setPet(pet);
    this.router.navigate(["/weather"])
    
  }

}
