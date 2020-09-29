import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PetHouseService } from '../../service/pet-house.service'
import { Pet } from "../../model/pet";
import { Router } from '@angular/router';
import { SharingService } from 'src/app/service/sharing.service';


@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.css']
})
export class PetHomeComponent implements OnInit, AfterViewInit {
  @Output() redirect: EventEmitter<any> = new EventEmitter();

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 50.447241;
  lng = -104.618141;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };
  geocoder = new google.maps.Geocoder();

  pets: Pet[];
  cols: any[];

  constructor(private petService: PetHouseService, private router: Router, private sharingService: SharingService) { }

  ngOnInit() {
    this.petService.listPets().then(pets =>{ 
      this.pets = pets;
      this.mapInitializer();
    });
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'breed', header: 'Breed' },
      { field: 'location', header: 'Location' },
      { field: 'lat', header: 'Latitude' },
      { field: 'lon', header: 'Longtitude' },
    ];
  }
  ngAfterViewInit() {
    
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.addMarkersForPets();
  }
  addMarkersForPets() {
    if (this.pets.length > 0) {
      this.pets.forEach(p => {
        const infowindow = new google.maps.InfoWindow({
          content: p.name + " - " + p.type + " - " + p.breed,
        });
        var latlong = new google.maps.LatLng(parseFloat(p.lat), parseFloat(p.lon));
        var marker = new google.maps.Marker({
          position: latlong,
          map: this.map,
        });
        marker.addListener("click", () => {
          infowindow.open(this.map, marker);
        });
        marker.setMap(this.map);
      });

    }
  }

  checkIfNeedJacket(pet: Pet) {
    this.sharingService.setPet(pet);
    this.router.navigate(["/weather"])

  }

}
