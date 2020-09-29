import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl:String = "https://dataservice.accuweather.com/";
  private API_KEY = "accuWeather_API_KEY";

  constructor(private httpClient: HttpClient) { }

  findLocationKey(lat,lon)
  {
    const requestUrl = `locations/v1/cities/geoposition/search?apikey=${this.API_KEY}&q=${lat},${lon}`;
    const httpRequest = new HttpRequest('GET', this.baseUrl + requestUrl);
    return this.httpClient.request(httpRequest).toPromise().then(res=>res["body"]).then(data => { return data["Key"]; });
  }

  findWeather(locationKey)
  {
    const requestUrl = `forecasts/v1/daily/1day/${locationKey}?apikey=${this.API_KEY}`;
    const httpRequest = new HttpRequest('GET', this.baseUrl + requestUrl);
    return this.httpClient.request(httpRequest).toPromise().then(res=>res["body"]).then(data=>data["DailyForecasts"][0]);
  }
}
