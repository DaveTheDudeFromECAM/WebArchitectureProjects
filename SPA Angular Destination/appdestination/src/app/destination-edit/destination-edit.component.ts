import { Component, OnInit } from '@angular/core';
import { RestService, Destination } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination-edit',
  templateUrl: './destination-edit.component.html',
  styleUrls: ['./destination-edit.component.css']
})
export class DestinationEditComponent implements OnInit {

  destination : Destination | undefined;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getDestination(this.route.snapshot.params['destination_id']).subscribe(
      (data)=> {
        console.log(data);
        this.destination = data;
      }
    )
  }

  updateDestination() {
    this.rest.updateDestination(this.destination!).subscribe(
      (result) =>{
        this.router.navigate(['/destinations']);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
