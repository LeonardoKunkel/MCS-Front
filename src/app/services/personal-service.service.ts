import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonalServiceService {
  URI: string = "http://localhost:3000";

  constructor( 
    private httpClient : HttpClient
    ) { }

    getPersonal(){
      return this.httpClient.get(`${this.URI}/personal`)
    }
}
