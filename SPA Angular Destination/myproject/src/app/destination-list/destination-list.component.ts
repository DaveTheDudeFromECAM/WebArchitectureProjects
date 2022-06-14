import { Component } from '@angular/core';

import { destinations } from '../destinations';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent {
  destinations = destinations;

  share() {
    window.alert('VALIDE!');
  }
}