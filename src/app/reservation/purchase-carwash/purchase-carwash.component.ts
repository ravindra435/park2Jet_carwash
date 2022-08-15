import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase-carwash',
  templateUrl: './purchase-carwash.component.html',
  styleUrls: ['./purchase-carwash.component.scss'],
})
export class PurchaseCarwashComponent implements OnInit {


  public carWashTypes$ = []
  public selectedCarWash: any

  constructor(
    private router: Router, 
    private apiService: ApiService,
    private spinner:NgxSpinnerService
    ) { }

  ngOnInit(): void {

    this.selectedCarWash = sessionStorage.getItem('selectedCarWash') ? JSON.parse(sessionStorage.getItem('selectedCarWash')) : null;
    this.fetchCarwashTypes();


  }
  // navigat to userDetails form
  navigateTouser() {
    if (this.selectedCarWash) {
      this.router.navigateByUrl('reservation/user/details');
    } else {
      Swal.fire({
        title: 'Please select carWash Type',
        text: '',
        confirmButtonColor:'red'
      })
    }
  }
  // fetch carWash types from api
  fetchCarwashTypes() {
    this.spinner.show();
    this.apiService.getCarwashTypes().subscribe(data => {
      this.spinner.hide();
      if (data.statusCode == 200) {
        this.carWashTypes$ = data.data.carWashTypes
        this.carWashTypes$.forEach(item => {
          if (this.selectedCarWash && this.selectedCarWash.washBookTypeId == item.washBookTypeId) {
            item.isChecked = true;
            item.noOfWashes = this.selectedCarWash.noOfWashes;
            
          } else {
            item.isChecked = null;
            item.noOfWashes = null;
          }

        })
      } else {
        this.carWashTypes$ = []
      }

    },(error) =>{
      this.spinner.hide();
    })
  }

  // selected washType save to local storge 
  selectCarWashType(carWash: any, noOfWashes: string, event: any) {

    this.carWashTypes$.forEach(item => {
      if (item.washBookTypeId == carWash.washBookTypeId) {
        this.selectedCarWash = carWash;
        item.isChecked = true;
        item.noOfWashes = noOfWashes;
        if (noOfWashes != 'monthly') {
          item.tax = (carWash.price * parseFloat(carWash.taxPercentage)) / 100;
          item.totalFee = carWash.price + item.tax;
        } else {
          item.tax = (carWash.monthlyPrice * parseFloat(carWash.taxPercentage)) / 100;
          item.totalFee = carWash.monthlyPrice + item.tax;
        }
        sessionStorage.setItem("selectedCarWash", JSON.stringify(item));
      } else {
        item.isChecked = null;
        item.noOfWashes = null;
      }
    })

  }
}
