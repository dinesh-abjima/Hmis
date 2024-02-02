import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '', pathMatch : 'full' , redirectTo : 'main/dashboard'
  },
  {
    path : 'main' , 
    loadChildren : () => import("./main/main.module").then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class AppRoutingModule { }
