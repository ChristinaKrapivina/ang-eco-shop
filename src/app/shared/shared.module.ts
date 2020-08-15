import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './pipes/phone.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    PhonePipe,
    SpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhonePipe,
    SpinnerComponent,
  ]
})
export class SharedModule { }
