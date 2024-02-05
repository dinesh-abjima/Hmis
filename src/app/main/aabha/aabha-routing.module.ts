import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileSignupComponent } from './mobile/mobile-signup/mobile-signup.component';
import { Screen1Component } from './mobile/mobile-signup/screen-1/screen-1.component';
import { Screen2Component } from './mobile/mobile-signup/screen-2/screen-2.component';
import { Screen3Component } from './mobile/mobile-signup/screen-3/screen-3.component';

const routes: Routes = [
{
  path:'',pathMatch:'full' , redirectTo:"mobile-signup"
},

{
  path: 'mobile-signup', 
  component: MobileSignupComponent,
  children:[
    { path: '', pathMatch: 'full', redirectTo: 'screen-1' },
    { path: 'screen-1', component: Screen1Component},
    { path: 'screen-2/:id', component: Screen2Component },
    { path: 'screen-2/screen-3/:id', component: Screen3Component },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AabhaRoutingModule { }




   
      
     
