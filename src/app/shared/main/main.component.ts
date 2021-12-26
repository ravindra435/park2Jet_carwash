import { Component, Inject, OnInit } from "@angular/core";
import { MapsAPILoader } from "@agm/core";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
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
        lat: 17.7153,
        lng: 83.3242,
      },
      // label: {
      //   color: "black",
      //   text: "Imaginnovate",
      // },
    });
  }
}
