import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination, RestService } from '../rest.service';

@Component({
  selector: 'app-destination-add',
  templateUrl: './destination-add.component.html',
  styleUrls: ['./destination-add.component.css']
})
export class DestinationAddComponent implements OnInit {

  //destinations: any[] = [];
  destination = {} as Destination;


  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit(): void {
  }

  addDestination(){

    this.rest.addDestination(this.destination).subscribe(
      (result) =>{
        this.router.navigate(['/destinations']);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
