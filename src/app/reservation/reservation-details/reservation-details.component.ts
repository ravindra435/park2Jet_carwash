import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {
  
  reservationInfo:any

  constructor() { 
    this.reservationInfo = sessionStorage.getItem('reservationInfo') ? JSON.parse(sessionStorage.getItem('reservationInfo')) : null;

  }

  ngOnInit(): void {


  }


  cancelReservation(){
    
  }

}
