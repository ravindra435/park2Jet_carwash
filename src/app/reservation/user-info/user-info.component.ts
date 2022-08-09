import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,

    private router: Router
  ) {
    this.userForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      confirmemail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],

      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.userForm.controls;
  }
  signup() {
    this.router.navigateByUrl('/session/signUp');
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
    this.router.navigateByUrl('/reservation/review/pay');
    console.log(obj, 'rk obj');
  }
}
