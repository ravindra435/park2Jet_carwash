import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';
declare var stripe: any;

@Component({
  selector: 'app-review-pay',
  templateUrl: './review-pay.component.html',
  styleUrls: ['./review-pay.component.scss'],
})
export class ReviewPayComponent implements OnInit {
  cardDetailsForm: FormGroup;
  submitted = false;
  cardHandler = this.onChange.bind(this);
  cardError: string;
  card: any;
  bookReservationDisabled: boolean;
  selectedCarWashType : any;
  personalInfo:any;
  /* payment */
  @ViewChild('cardInfo') cardInfo: ElementRef;
  @ViewChild('cardNumber') cardNumber: ElementRef;
  @ViewChild('cardExpiry') cardExpiry: ElementRef;
  @ViewChild('cardCvc') cardCvc: ElementRef;
  @ViewChild('postalCode') postalCode: ElementRef;
  @ViewChild('cardName') cardName: ElementRef;
  @ViewChild('submitButton') submitButton: ElementRef;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private router: Router,
    private spinner: NgxSpinnerService,
    private apiService:ApiService,
    private renderer: Renderer2,
  ) {
    sessionStorage.setItem('currentStepper' , "3");

    this.selectedCarWashType = sessionStorage.getItem('selectedCarWash') ? JSON.parse(sessionStorage.getItem('selectedCarWash')) : null;
    this.personalInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null;
    this.cardDetailsForm = this.fb.group({
      nameOnCard: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  get f() {
    return this.cardDetailsForm.controls;
  }



  /* Payment Logic */

  ngOnDestroy() {
    if (this.card) {
      // We remove event listener here to keep memory clean
      this.card.removeEventListener('change', this.cardHandler);
      this.card.destroy();
    }
  }
  ngAfterViewInit() {
    this.initiateCardElement();
  }
  initiateCardElement() {


    var elements = stripe.elements();
    this.card = elements.create('cardNumber');
    this.card.mount('#card-number');
    this.card = elements.create('cardExpiry');
    this.card.mount('#card-expiry');
    this.card = elements.create('cardCvc');
    this.card.mount('#card-cvc');
    this.card = elements.create('postalCode');
    this.card.mount('#postalCode');
    this.card.addEventListener('change', this.cardHandler);
  }

  onChange({ error }) {
    if (error) {
      this.cardError = error.message;
    } else {
      this.cardError = null;
    }
    this.cd.detectChanges();
  }

  async createStripeToken() {
    this.submitButton.nativeElement.disabled = true;
    this.bookReservationDisabled = true;
    this.submitted = true;
    this.spinner.show();
    const { token, error } = await stripe.createToken(this.card);

    if (token) {
      this.spinner.show();
      this.onSuccess(token);
    } else {
      this.submitButton.nativeElement.disabled = false;
      this.bookReservationDisabled = false;
      this.spinner.hide();
      this.onError(error);
    }
  }
  onSuccess(token) {
    const req = {
      paymentToken: token.id,
      washType:this.selectedCarWashType.washType,
      numberOfWashes:this.selectedCarWashType.noOfWashes != 'monthly' ? this.selectedCarWashType.noOfWashes : null,
      package : this.selectedCarWashType.noOfWashes == 'monthly' ?  this.selectedCarWashType.noOfWashes  : null,
      firstName:this.personalInfo.firstName,
      lastName:this.personalInfo.lastName,
      email:this.personalInfo.email,
      phone : this.personalInfo.phone
    };
    this.apiService.bookReservation(req).subscribe((resp) => {
      this.spinner.hide();
      sessionStorage.setItem('stepper' ,  "3");

      if (resp.statusCode === 200) {
        this.spinner.hide();
        sessionStorage.removeItem('selectedCarWash');
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('reservationInfo' , JSON.stringify(resp));
        this.router.navigateByUrl("/reservation/confirm")
        // Reservation Email Trigger
        setTimeout(() => {
          this.apiService
          .reservationEmail({ code: resp.reservationCodes[0].code })
          .subscribe((res) => {});
        }, 10);
        
      } else {
        this.cardDetailsForm.reset();
        this.renderer.setProperty(
          this.cardNumber.nativeElement,
          'innerText',
          ''
        );

        this.renderer.setProperty(
          this.cardExpiry.nativeElement,
          'innerText',
          ''
        );
        this.renderer.setProperty(this.cardCvc.nativeElement, 'innerText', '');
        this.renderer.setProperty(
          this.postalCode.nativeElement,
          'innerText',
          ''
        );
        this.submitButton.nativeElement.disabled = false;
        this.bookReservationDisabled = false;
        this.initiateCardElement();
        Swal.fire({
          icon: 'error',
          title: 'Please try again later',
          text: `${resp.message}`,
        }).then((res) => {
          // this.router.navigateByUrl("")
        });
      }
    }, () =>{
      this.spinner.hide();
      this.submitButton.nativeElement.disabled = false;
      this.bookReservationDisabled = false;
    });
  }
  onError(error) {
    if (error.message.includes('postal')) {
      this.cardError = 'Your Zip code is incomplete.';
    } else {
      this.cardError = error.message;
    }
  }

}
