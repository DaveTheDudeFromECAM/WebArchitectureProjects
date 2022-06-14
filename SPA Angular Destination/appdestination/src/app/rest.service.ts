import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map } from 'rxjs';

const endpoint = "http://localhost:8000/";

export interface Destination{
  destination_id: number;
  name: string;
  description: string;
  payes: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(endpoint + 'destination');
  }
  addDestination(destination:Destination): Observable<any> {
    console.log(destination);
    return this.http.post<Destination>('http://localhost:8000/destination', destination);
  }
  updateDestination(destination:Destination): Observable<any> {
    return this.http.put<Destination>(endpoint + 'destination/' + destination.destination_id, destination);
  }
  getDestination(id: number): Observable<any> {
    return this.http.get<Destination>(endpoint + "destination/find/"+ id);
  }
  deleteDestination(id: number): Observable<any> {
    return this.http.delete<Destination>(endpoint + 'destination/' + id);
  }
}
