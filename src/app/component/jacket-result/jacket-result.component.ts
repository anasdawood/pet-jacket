import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Pet } from 'src/app/model/pet';
import { SharingService } from 'src/app/service/sharing.service';
import { Weather } from 'src/app/model/weather';

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
  weatherList= new Weather();
  forecastDay:string;
  forecastNight:string;

  ngOnInit() {
    this.pet = this.sharingService.getPet();
    if(this.pet != null)
    {
    this.weatherService.findLocationKey(this.pet.lat,this.pet.lon).then(key=>
      {
        this.weatherService.findWeather(key).then(result=> {
          if(this.needJacket(result)) {
            this.message = "No need to wear a Jacket (Phewo!)";
            this.icon = "../../../assets/pet_noJacket.png";
          }
          else{
            this.message = "Better wear a jacket, they look so cute with a jacket";
            this.icon = "../../../assets/pet_withJacket.png";
          }          
        });
      });
    }
    else{
      this.message="Please Select a Pet";
    }
  }

  needJacket(forecast):boolean
  {
    this.forecastDay = forecast["Day"]["IconPhrase"];
    this.forecastNight = forecast["Night"]["IconPhrase"];
    
    return this.weatherList.needJacketWeatherLowerCase.indexOf(this.forecastDay.toLowerCase()) == -1
    && this.weatherList.needJacketWeatherLowerCase.indexOf(this.forecastNight.toLowerCase()) == -1;
  }
}
