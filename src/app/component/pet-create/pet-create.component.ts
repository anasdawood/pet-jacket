import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PetBreedsService } from '../../service/pet-breads.service';
import { PetHouseService } from '../../service/pet-house.service';
import { Pet } from 'src/app/model/pet';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit, AfterViewInit {

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
  marker = new google.maps.Marker();

  breeds: any[];
  types: any[];

  pet: Pet;
  loading: boolean = false;
  saveResult: any;

  constructor(private petBreedsService: PetBreedsService, private petService: PetHouseService) {
  }

  ngOnInit() {
    this.pet = new Pet(null);
    this.types = this.petBreedsService.returnAllTypes();
  }
  ngAfterViewInit() {
    this.mapInitializer();
  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);

    this.map.addListener("click", (event) => {
      this.marker.setMap(null);
      this.placeMarkerAndPanTo(event.latLng, this.map);
    });
  }

  placeMarkerAndPanTo(latLng, map) {
    this.loading = true;
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    this.marker = marker;
    marker.setMap(map);
    this.pet.lat = latLng.lat();
    this.pet.lon = latLng.lng();
    this.getCityName(latLng.lat(), latLng.lng());
  }

  getCityName(mapLat, mapLng) {
    const latlng = {
      lat: parseFloat(mapLat),
      lng: parseFloat(mapLng),
    };
    this.geocoder.geocode(
      { location: latlng },
      (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        this.loading = false;
        if (status === "OK") {
          if (results[0]) {
            const arrayResult = results[0].formatted_address.split(",")
            this.pet.location = arrayResult[1].trim() + "," + arrayResult[2].substr(0, 3);

          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

  public savePet(event) {
    this.loading = true;
    if (this.pet.breed == null || this.pet.name == null || this.pet.lat == null || this.pet.lon == null || this.pet.location == null) {
      alert("Please fill all fields");
      this.loading = false;
      return;
    }
    this.loading = false;
    this.petService.savePet(this.pet).then(res => {
      this.saveResult = res;
      if (this.saveResult instanceof HttpResponse) {
        if (this.saveResult.status == 201) {
          alert("Pet Was added");
        }
        else {
          alert(this.saveResult.statusText);
        }
      }
    }, errorEvent => {
      if (errorEvent instanceof HttpErrorResponse) {
        var message = "";
        if(errorEvent.error.code == 11000)
        {
          message = "Duplicate Entry. Pet is already in our records.";
        }
        alert("Something Went Wrong ! " + message);
      }
    });

  }

  getBreeds(petType)
  {
    if(petType==="Dog")
    {
      this.breeds = this.petBreedsService.returnAllDogBreeds();
    }
    if(petType==="Cat")
    {
      this.breeds = this.petBreedsService.returnAllCatBreeds();
    }
  }

  get isLoading() {
    return this.loading;
  }
}
