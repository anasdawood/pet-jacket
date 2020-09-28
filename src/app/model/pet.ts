export class Pet {

    id: string;
    name: string;
    bread: string;
    location: string;
    lat: string;
    lon: string;
    createdAt:string;
    updatedAt:string;
  
    constructor(body: {}) {
      if (body != null) {
        this.id= body['id']
        this.name= body['name']
        this.bread= body['bread']
        this.location= body['location']
        this.lat= body['lat']
        this.lon= body['lon']
        this.createdAt=body['createdAt']
        this.updatedAt=body['updatedAt']
      } 
    }
  }