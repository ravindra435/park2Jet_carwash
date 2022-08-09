import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-pay',
  templateUrl: './review-pay.component.html',
  styleUrls: ['./review-pay.component.scss'],
})
export class ReviewPayComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,

    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      cardNumber: ['', Validators.required],
      zip: ['', Validators.required],
      Date: ['', Validators.required],
      cvcNo: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    let obj = {
      email: this.userForm.value?.email,
      password: this.userForm.value.password,
    };

    this.router.navigateByUrl('/reservation/confirm');
    console.log(obj, 'rk obj');
  }
}
