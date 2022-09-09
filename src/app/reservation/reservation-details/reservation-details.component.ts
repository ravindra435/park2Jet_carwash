import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {
  
  reservationInfo:any
  baseurl =  environment.baseUrl;
  spinnerInfo : any
  qrCodeValue :any = '1234'
  constructor(
    private spinner: NgxSpinnerService,
    private apiService: ApiService
  ) { 
    this.reservationInfo = sessionStorage.getItem('reservationInfo') ? JSON.parse(sessionStorage.getItem('reservationInfo')) : null;
    console.log("reservationInfo" , this.reservationInfo);
    this.qrCodeValue = this.reservationInfo?.reservationCodes[0]?.code ?? '1234'
  }

  ngOnInit(): void {


  }

  downloadCarWashPass(code:any){
    this.spinnerInfo = "Downloading....";
    this.spinner.show();
    setTimeout(() => {
      saveAs.saveAs(`${this.baseurl}reservationdownload?code=${code}`, `${code}.pdf`);
      this.spinner.hide();
    }, 1000);
  }

  cancelReservation(){
    let code = this.reservationInfo?.reservationCodes[0]?.code
    const req = {
      code: code,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel the reservation",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#212529",
      confirmButtonText: "Yes, Cancel it!",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        this.spinnerInfo = "Please wait for Cancel Reservation confirmation...";
        this.spinner.show();
        this.apiService.cancelReservation(req).subscribe((data) => {
          this.spinner.hide();
          if (data.statusCode == 200) {
            //  this.reservationCancelEmail(code);
             this.getReservationInfo(code);
            Swal.fire("Cancelled SuccessFully");
          }
          if (data.statusCode == 406) {
            Swal.fire(data.message);
          }
          if (data.statusCode != 200 && data.statusCode != 406) {
            Swal.fire("Something went wrong please try again");
          }
        });
      }
    }); 

  }

  reservationCancelEmail(code:any){
    this.apiService.reservationCancelEmail({code:code}).subscribe((dataRes) => {
      console.log(dataRes);
    });
  }

  getReservationInfo(code:any){
    this.apiService.getReservationInfo({ code: code }).subscribe((resp) => {
      if (resp.statusCode == 200)
        this.reservationInfo = resp;  
        this.qrCodeValue = resp.reservationCodes[0].code
    });
  }

}
