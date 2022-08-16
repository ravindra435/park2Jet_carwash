import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {

  reservationInfo : any;

  constructor(private router: Router) {

    this.reservationInfo = sessionStorage.getItem('reservationInfo') ? JSON.parse(sessionStorage.getItem('reservationInfo')) : null;
    sessionStorage.setItem('currentStepper' , "4");

  }

  ngOnInit(): void {}
  viewDetails() {
    this.router.navigateByUrl('/reservation/reservation-details');
  }
}
