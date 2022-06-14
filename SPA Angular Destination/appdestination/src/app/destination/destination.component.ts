import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RestService,Destination } from '../rest.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destinations : Destination[] = [];
  
  destination : Destination | undefined;

  constructor(public rest: RestService,private route: ActivatedRoute ,private router: Router) { }
  ngOnInit() {
    this.getDestinations();
    this.getDestination();
  }

  getDestinations(){
    this.rest.getDestinations().subscribe(
      resp => (
        //console.log(resp);
        this.destinations = resp
    )
    );
  }
  getDestination(){
    this.rest.getDestination(this.route.snapshot.params['destination_id']).subscribe(data => {
        console.log(data);
        this.destination = data;
      }
    )
  }
    
  add(){
    this.router.navigate(['/destination-add']);
  }

  deleteDestination(id: number){
    this.rest.deleteDestination(id).subscribe();
    this.router.navigate(['/destinations']);
  }

}
