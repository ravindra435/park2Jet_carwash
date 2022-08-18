import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  /**
  * Get Car Wash Types
  */
  public getCarwashTypes(): Observable<any> {
    try {
      return this.http
        .get(this.apiBaseUrl + "carwashtypes")
        .pipe(map((result) => result));
    } catch (error) {
      throw error;
    }
  }


  public bookReservation(data:any): Observable<any>  {
    try {
      return this.http.post(this.apiBaseUrl + 'expreseCarCare/reservation',data).pipe(map((result) => result));
    } catch (error) {
      throw error;

    }

  }

  public reservationEmail(data:any): Observable<any>  {
    try {
      return this.http.post(this.apiBaseUrl + 'carWashReservation/email',data).pipe(map((result) => result));
    } catch (error) {
      throw error;

    }

  }


  public contactUs(data:any): Observable<any>{
    try {
      return this.http.post(this.apiBaseUrl + 'contactus',data).pipe(map((result) => result));
    } catch (error) {
      throw error;

    }
  }


  stepper = new EventEmitter<any>();
  

}
