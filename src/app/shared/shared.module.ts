import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { PhonePipe } from './pipes/phone.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    PhonePipe,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    PhonePipe,
    SpinnerComponent,
    NgxPaginationModule,
  ]
})
export class SharedModule { }
