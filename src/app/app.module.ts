import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { BodyModule } from './body/body.module';
import { SharedModule } from './shared/shared.module';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BodyModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiTuyfeiLXpcg4s4vlscRanQ47uIHGuFk',
    }),
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
