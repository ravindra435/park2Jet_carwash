import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wash-club',
  templateUrl: './wash-club.component.html',
  styleUrls: ['./wash-club.component.scss']
})
export class WashClubComponent implements OnInit {

  constructor() {
    sessionStorage.clear();
   }

  ngOnInit(): void {
  }

}
