import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nous-request-consent',
  templateUrl: './request-consent.component.html',
  styleUrl: './request-consent.component.scss'
})
export class RequestConsentComponent {
    ConsentForm : FormGroup;
    visible : boolean = false;
    patientConsentList : any[] = [
      {
        Name : "Dinesh Choudhary",
        AbhaAddress : "dinesh.choudhary@sbx",
        ConsentStatus : "Requested",
        ConsentCreatedOn : Date.now(),
        ConsentGrantedOn : Date.now(),
        ConsentExpiryOn : Date.now(),
        ConsentRevokedOn : Date.now()
      }
    ];
    items = [
      {
          label: 'View Consent',
          icon: 'pi pi-eye',
          // command: () => {
          //     this.delete();
          // }
      },
      {
          label: 'Delete Consent',
          icon: 'pi pi-times',
          // command: () => {
          //     this.delete();
          // }
      }
  ];
    HiTypesList : any[] = ["Prescription", "DiagnosticReport", "OP Consultation" , "Immunization Record", "Wellness Record" , "Health Document Record"]
    purposeList : any[] = ["Self Requested", "Care Management","Break the Glass","	Public Health","Healthcare Payment","	Disease Specific Healthcare Research"]
    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
      this.initForm();
    }

    initForm() {
      this.ConsentForm = this.fb.group({
        PatientId: ['', [Validators.required]],
        Name: ['', [Validators.required]],
        Purpose: ['', [Validators.required]],
        HiTypes : ['', [Validators.required]],
        From: ['', [Validators.required]],
        To: ['', [Validators.required]],
        DataEraseAt: ['', [Validators.required]],
      });
    }

    addConsent(){
      this.visible = true;
    }
}
