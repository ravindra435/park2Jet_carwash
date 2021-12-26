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

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
