import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  text: string;
  constructor() {}

  // ngOnInit() {}
  @Input()
      center = {
        lat: 6.435838,
        lng: 3.451384,
      };
  @Input() zoom = 15;
  radiusCenter = {
    lat: 6.435838,
    lng: 3.451384,
  };

}
