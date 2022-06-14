import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map } from 'rxjs';

const endpoint = "http://localhost:8000/destination/";

export interface Destination{
  idDestination: number;
  destination_name: string;
  destination_description: string;
  destination_payes: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<any> {
    return this.http.get<Destination>(endpoint + 'destinations');
  }
  addDestination(destination:Destination): Observable<any> {
    return this.http.post(endpoint + 'destinations', destination);
  }
  updateDestination(destination:Destination): Observable<any> {
    return this.http.put<Destination>(endpoint + 'destinations/' + destination.idDestination, destination);
  }
}
