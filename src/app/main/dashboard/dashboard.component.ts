import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'nous-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  patientsList : any = [
    {
      FirstName : "Dinesh",
      Age : 25,
      Gender : "M",
      RegistrationDate : new Date(),
      VisitType : "Online",
      Mobile : "8561985708",
      HealthId : "dinesh.choudhary@sbx",
      VisitId : "1234"
    }
  ];
  items = [
    {
      label: 'View Care Context',
      icon: 'pi pi-eye',
      command: () => {
        this.addCareContext();
      }
    },
    {
      label: 'View Consent',
      icon: 'pi pi-eye',
      command: () => {
        this.manageConsent();
      }
    },
    {
        label: 'Manage',
       // icon: 'pi pi-eye',
        command: () => {
            this.viewPatient();
        }
    }
];
  constructor(private fb: FormBuilder, private router : Router) {}
  ngOnInit(): void {
  }

  addPatient(){
      this.router.navigate(["main/add-patient"]);
  }

  addCareContext(){
    this.router.navigate(["main/add-care-context"])
  }

  manageConsent(){
    this.router.navigate(["main/manage-consent"])
  }

  viewPatient(){
    this.router.navigate(["main/patient-detail"])
  }
}
