import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MapComponent],
  exports: [HeaderComponent, FooterComponent, MapComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiTuyfeiLXpcg4s4vlscRanQ47uIHGuFk',
    }),
  ],
})
export class SharedModule {}
