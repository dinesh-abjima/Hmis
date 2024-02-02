import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'nous-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  patientsList : any = [
    {
      AppointmentId : 1,
      PatientId : 2,
      AppointmentDate : Date.now(),
      AppointmentStartTime : '02.30',
      AppointmentEndTime : '02.30',
      AppointmentDuration : '30 min',
      FirstName : 'Dinesh',
      MiddleName : '',
      LastName : 'Choudhary',
      Mrn : '124365',
      Gender : 'M',
      DateOfBirth : Date.now(),
      BloodGroup : 'A+',
      Phone1 : '8561985708',
      VisitType : 'In Patient',
      ConsultProvider : 'Dinesh Choudhary'
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
