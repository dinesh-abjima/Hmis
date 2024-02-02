import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AabhaRoutingModule } from './aabha-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AabhaRoutingModule,
    SharedModule
  ]
})
export class AabhaModule { }
