import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'nous-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.scss'
})
export class PatientProfileComponent {
  patient : any = {
    Name : "Dinesh Choudhary",
    HealthId : "dinesh.chouhdary@sbx",
    DateOfBirth : Date.now(),
    Gender : "Male",
    VisitType : "Online",
    Mobile : "8561985708",
    RegistrationDateandTime : Date.now(),
  };
  genderList : string[] = ["Male","Female"]
  visitTypesList : string[] = ["Male","Female"]
  constructor(private fb: FormBuilder, private router : Router) {}
  ngOnInit(): void {
  }

  addDiagnositReport(){
    this.router.navigate(['main/patient-detail/diagnostic-report'])
  }

  addOpConsultation(){
    this.router.navigate(['main/patient-detail/op-consultation'])
  }

  addDischargeSummary(){
    this.router.navigate(['main/patient-detail/discharge-summary'])
  }
}
