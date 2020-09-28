export class Pet {

    id: string;
    name: string;
    breed: string;
    type: string;
    location: string;
    lat: string;
    lon: string;
    createdAt:string;
    updatedAt:string;
  
    constructor(body: {}) {
      if (body != null) {
        this.id= body['id']
        this.name= body['name']
        this.breed= body['breed']
        this.type = body['type'];
        this.location= body['location']
        this.lat= body['lat']
        this.lon= body['lon']
        this.createdAt=body['createdAt']
        this.updatedAt=body['updatedAt']
      } 
    }
  }