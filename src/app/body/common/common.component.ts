import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  currentURL = '';

  constructor(private router: Router) {
    this.currentURL = this.router.url;
  }
  ngOnInit() {}
}
