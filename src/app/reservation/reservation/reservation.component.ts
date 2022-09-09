import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  currentStepper :any;
  stepper:any;
  selectedCarWash :any;
  userInfo:any;
  reservationInfo:any;
  constructor(private router:Router , public apiSevice:ApiService) { 
    this.selectedCarWash = sessionStorage.getItem('selectedCarWash') ? JSON.parse(sessionStorage.getItem('selectedCarWash')) : null;
    this.userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null;
    this.reservationInfo = sessionStorage.getItem('reservationInfo') ? JSON.parse(sessionStorage.getItem('reservationInfo')) : null;
    this.currentStepper = sessionStorage.getItem("currentStepper");
    this.stepper = sessionStorage.getItem("stepper");

    this.apiSevice.stepper.subscribe(value  =>{
      
       if(value){
        this.currentStepper = value;
       }
    })

  }

  ngOnInit(): void {
  }

  navigate(pathStepper:string , path:any){
     
    if(pathStepper == "1"){
      this.currentStepper = pathStepper;
      this.router.navigateByUrl('/reservation/purchase');
     }
     if(pathStepper == "2" && this.selectedCarWash){
      this.currentStepper = pathStepper;
      this.router.navigateByUrl('/reservation/user/details');
     }
     if(pathStepper == "3" && this.selectedCarWash && this.userInfo){
      this.currentStepper = pathStepper;
      this.router.navigateByUrl('/reservation/review/pay');
     }
     
  }

}
