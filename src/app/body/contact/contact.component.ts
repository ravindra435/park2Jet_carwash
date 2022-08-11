import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactusForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.contactusForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      name: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  ngOnInit() {}
  get f() {
    return this.contactusForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactusForm.invalid) {
      return;
    }
    let obj = {
      email: this.contactusForm.value.email,
      name: this.contactusForm.value.name,
      message: this.contactusForm.value.message,
    };

    // this.apiservice.Contactus(obj).subscribe((res: any) => {
    //   if (res.statusCode == 200) {
    //     this.submitted = false;
    //     this.contactusForm.reset();
    //     Swal.fire({
    //       icon: "success",
    //       title: "THANK YOU",
    //       text: "Thank You For Contacting With Us. We Will Get Back To You Soon.!",
    //     });
    //   } else {
    //     this.submitted = false;
    //     Swal.fire({
    //       icon: "error",
    //       title: "something went wrong please try again !",
    //     });
    //   }
    // });
  }
}
