import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Pet} from "../model/pet";

@Injectable({
  providedIn: 'root'
})
export class PetHouseService {

  baseUrl : String = "http://localhost:9000/"

  constructor(private httpClient: HttpClient) { }

  listPets() {
    const requestUrl = `pets`;
    const httpRequest = new HttpRequest('GET', this.baseUrl + requestUrl);
    return this.httpClient.request(httpRequest).toPromise()
    .then(res => {
      if(res instanceof HttpResponse)
      {        
        return <Pet[]> res.body['rows'];
      }
    })
    .then(data => { return data; });
  }

  savePet(pet:Pet) {
    const requestUrl = `pets`;
    const httpRequest = new HttpRequest('POST', this.baseUrl + requestUrl,pet);
    return this.httpClient.request(httpRequest).toPromise()
    .then(res => {
      if(res instanceof HttpResponse)
      {        
        return <any> res;
      }
    })
    .then(data => { return data; });
  }
}
