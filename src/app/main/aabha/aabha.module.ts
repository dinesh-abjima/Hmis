import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AabhaRoutingModule } from './aabha-routing.module';
import { MobileSignupComponent } from './mobile-signup/mobile-signup.component';
import { MobileSigninComponent } from './mobile-signin/mobile-signin.component';
import { AadharSignupComponent } from './aadhar-signup/aadhar-signup.component';
import { AadharSigninComponent } from './aadhar-signin/aadhar-signin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MobileSignupComponent,
    MobileSigninComponent,
    AadharSignupComponent,
    AadharSigninComponent
  ],
  imports: [
    CommonModule,
    AabhaRoutingModule,
    SharedModule
  ]
})
export class AabhaModule { }
