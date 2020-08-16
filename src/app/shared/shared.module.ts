import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { PhonePipe } from './pipes/phone.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AuthGuard } from './guards/auth.guard';



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
  ],
  providers: [
    AuthGuard,
  ]
})
export class SharedModule { }
