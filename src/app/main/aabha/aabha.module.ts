import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AabhaRoutingModule } from './aabha-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes } from '@angular/router';
import { ComponentModule } from 'src/app/shared/component/component.module';
import {CalendarModule} from 'primeng/calendar';
import { AadhaarSignupComponent } from './aadhaar/aadhaar-signup/aadhaar-signup.component';
import { Screen1Component } from './aadhaar/aadhaar-signup/screen-1/screen-1.component';
import { Screen2Component } from './aadhaar/aadhaar-signup/screen-2/screen-2.component';
import { Screen3Component } from './aadhaar/aadhaar-signup/screen-3/screen-3.component';
import { Screen4Component } from './aadhaar/aadhaar-signup/screen-4/screen-4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

]

@NgModule({
  declarations: [
    AadhaarSignupComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component
  ],
  imports: [
    CommonModule,
    AabhaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  

    
  ],
  exports:[
  
  ]
})
export class AabhaModule { }
