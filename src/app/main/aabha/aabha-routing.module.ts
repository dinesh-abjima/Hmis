import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadhaarSignupComponent } from './aadhaar/aadhaar-signup/aadhaar-signup.component';
import { Screen1Component } from './aadhaar/aadhaar-signup/screen-1/screen-1.component';
import { Screen2Component } from './aadhaar/aadhaar-signup/screen-2/screen-2.component';
import { Screen3Component } from './aadhaar/aadhaar-signup/screen-3/screen-3.component';
import { Screen4Component } from './aadhaar/aadhaar-signup/screen-4/screen-4.component';
import { state } from '@angular/animations';


const routes: Routes = [
  {
    path: 'aadhaar-signup',
    component: AadhaarSignupComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'screen-1' },
      { path: 'screen-1', component: Screen1Component,  },
      { path: 'screen-2/:id', component: Screen2Component },
      { path: 'screen-2/screen-3/:id', component: Screen3Component },
      { path: 'screen-2/screen-3/screen-4/:id', component: Screen4Component },
    ]
  },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AabhaRoutingModule { }