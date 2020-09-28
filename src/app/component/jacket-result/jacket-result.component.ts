import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Pet } from 'src/app/model/pet';
import { SharingService } from 'src/app/service/sharing.service';

@Component({
  selector: 'app-jacket-result',
  templateUrl: './jacket-result.component.html',
  styleUrls: ['./jacket-result.component.css']
})
export class JacketResultComponent implements OnInit {

  constructor(private weatherService:WeatherService,private sharingService:SharingService) { }
  
  pet: Pet;
  message:string="";
  icon:string="";

  ngOnInit() {
    this.pet = this.sharingService.getPet();
    if(this.pet != null)
    {
    this.weatherService.findLocationKey(this.pet.lat,this.pet.lon).then(key=>
      {
        this.weatherService.findWeather(key).then(result=> console.log(result));
      });
    }
    else{
      this.message="Please Select a Pet";
    }
  }


}
