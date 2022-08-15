import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  selectedCarWashType:any
  constructor(
    private fb: FormBuilder,

    private router: Router
  ) {
     this.selectedCarWashType = sessionStorage.getItem('selectedCarWash') ? JSON.parse(sessionStorage.getItem('selectedCarWash')) : null;
     this.loadUserForm();
     this.patchUserForm()
  }

  ngOnInit(): void {}


  loadUserForm(){
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
          EmailValidator('email')
        ],
      ],

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required , Validators.maxLength(10),Validators.minLength(10)]],
    });
  }

  patchUserForm(){
    let userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null;
    if(userInfo){
      this.userForm.patchValue({
        firstName : userInfo.firstName,
        lastName : userInfo.lastName,
        email : userInfo.email,
        confirmemail : userInfo.confirmemail,
        phone : userInfo.phone,
      })
    }
  }

  get f() {
    return this.userForm.controls;
  }
  
  // submiting user details
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    sessionStorage.setItem('userInfo' , JSON.stringify(this.userForm.value));
    this.router.navigateByUrl('/reservation/review/pay');
  }

}

// confirmEmail validation
export function EmailValidator(confirmEmailInput: string) {
  let confirmEmailControl: FormControl;
  let emailControl: FormControl;
  
  return (control: FormControl) => {
    if (!control.parent) {
      return null;
    }
  
    if (!confirmEmailControl) {
      confirmEmailControl = control;
      emailControl = control.parent.get(confirmEmailInput) as FormControl;
      emailControl.valueChanges.subscribe(() => {
        confirmEmailControl.updateValueAndValidity();
      });
    }

    if (emailControl.value.toLocaleLowerCase() !==
        confirmEmailControl.value.toLocaleLowerCase()
    ) {
      return { notMatch: true };
    }

    return null;
  };
}