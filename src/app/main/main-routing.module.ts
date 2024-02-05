import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCareContextComponent } from './add-care-context/add-care-context.component';
import { RequestConsentComponent } from './request-consent/request-consent.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DiagnosticReportComponent } from './patient-profile/diagnostic-report/diagnostic-report.component';
import { OpConsultationComponent } from './patient-profile/op-consultation/op-consultation.component';
import { DischargeSummaryComponent } from './patient-profile/discharge-summary/discharge-summary.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path : '', pathMatch : 'full' , redirectTo : "dashboard"
  },
  {
    path: 'main', component: LayoutComponent,children:[
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path : 'patient', component : PatientComponent
      },
      {
        path : 'appointment' , component : AppointmentComponent
      },
      {
        path : 'add-patient' , component : AddPatientComponent
      },
      {
        path : 'add-care-context' , component : AddCareContextComponent
      },
      {
        path : 'manage-consent' , component : RequestConsentComponent
      },
      {
        path : 'patient-detail' , component : PatientProfileComponent , 
        children : 
          [
              { 
                path : 'diagnostic-report' , component : DiagnosticReportComponent
              },
              {
                path : 'op-consultation', component : OpConsultationComponent
              },
              {
                path : 'discharge-summary', component : DischargeSummaryComponent
              }
          ]
      },
      {
        path : 'aabha' , 
        loadChildren : ()=> import("./aabha/aabha.module").then(m => m.AabhaModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
