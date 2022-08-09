import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-carwash',
  templateUrl: './purchase-carwash.component.html',
  styleUrls: ['./purchase-carwash.component.scss'],
})
export class PurchaseCarwashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateTouser() {
    this.router.navigateByUrl('reservation/user/details');
  }
}
