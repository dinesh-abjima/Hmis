import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCareContextComponent } from './add-care-context/add-care-context.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { RequestConsentComponent } from './request-consent/request-consent.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DiagnosticReportComponent } from './patient-profile/diagnostic-report/diagnostic-report.component';
import { DischargeSummaryComponent } from './patient-profile/discharge-summary/discharge-summary.component';
import { OpConsultationComponent } from './patient-profile/op-consultation/op-consultation.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    AddCareContextComponent,
    AddPatientComponent,
    RequestConsentComponent,
    PatientProfileComponent,
    DiagnosticReportComponent,
    DischargeSummaryComponent,
    OpConsultationComponent,
    PatientComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
