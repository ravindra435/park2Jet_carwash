import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public markers: any[];
  public lat: number;
  public lng: number;
  public zoom: number;

  constructor() {
    this.lat = 0;
    this.lng = 0;
    this.zoom = 2;
    this.markers = [];
  }

  ngOnInit() {
    this.markers.push({
      position: {
        lat: 39.8441261,
        lng: -104.905484,
      },
      // label: {
      //   color: "black",
      //   text: "Imaginnovate",
      // },
    });
  }
}
