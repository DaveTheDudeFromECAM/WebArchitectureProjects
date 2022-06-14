import { Component, OnInit } from '@angular/core';
import { RestService,Destination } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destinations : Destination[] = [];

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getDestinations();
  }

  getDestinations(){
    this.rest.getDestinations().subscribe(
      (resp) => {
        console.log(resp);
        this.destinations = resp;
      }
    )
  }
  add(){
    this.router.navigate(['/destination-add']);
  }
}
