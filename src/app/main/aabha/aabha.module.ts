import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AabhaRoutingModule } from './aabha-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileSignupComponent } from './mobile/mobile-signup/mobile-signup.component';
import { Screen1Component } from './mobile/mobile-signup/screen-1/screen-1.component';
import { Screen2Component } from './mobile/mobile-signup/screen-2/screen-2.component';
import { Screen3Component } from './mobile/mobile-signup/screen-3/screen-3.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   MobileSignupComponent,
   Screen1Component,
   Screen2Component,
   Screen3Component
  ],
  imports: [
    CommonModule,
    AabhaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class AabhaModule { }
