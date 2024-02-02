import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharSigninComponent } from './aadhar-signin/aadhar-signin.component';
import { AadharSignupComponent } from './aadhar-signup/aadhar-signup.component';
import { MobileSigninComponent } from './mobile-signin/mobile-signin.component';
import { MobileSignupComponent } from './mobile-signup/mobile-signup.component';

const routes: Routes = [
  {
    path : '', pathMatch : 'full' , redirectTo : "aadhaar-signin"
  },
  {
    path : 'aadhaar-signin', component : AadharSigninComponent
  },
  {
    path : 'aadhaar-signup', component : AadharSignupComponent
  },
  {
    path : 'mobile-signin', component : MobileSigninComponent
  },
  {
    path : 'mobile-signup', component : MobileSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AabhaRoutingModule { }
