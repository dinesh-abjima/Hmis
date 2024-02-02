import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'nous-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent {
  patientForm : FormGroup;
  healthIdForm: FormGroup;
  healthIdOtpForm: FormGroup;
  HealthIdList : any[] = [
    {
      key : "1",
      Value : "dinesh.choudahry@sbx"
    },
    {
      Key : "2",
      Value : "salik.khan@sbx"
    },
    {
      Key : "3",
      Value : "kavita.jangir@sbx"
    },
    {
      Key : "4",
      Value : "dinesh.jat@sbx"
    }
  ];
  sendOtpVisible : boolean = false;
  verifyOtpVisible : boolean = false;
  filteredHealthIds: any[]
  visitTypeValue = ["one", "two", "three", "four"];
  genderList : string[] = ["Male","Female"]
  visitTypesList : string[] = ["Male","Female"]

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.healthIdForm = this.fb.group({
      HealthId: ['', [Validators.required]],
    });

    this.healthIdOtpForm = this.fb.group({
      TxnId : ['',[Validators.required]],
      Otp: ['', [Validators.required]]
    });

    this.patientForm = this.fb.group({
      PatientId : ['', [Validators.required]],
      FirstName : ['',[Validators.required]],
      MiddleName : [''],
      LastName : ['',[Validators.required]],
      DateOfBirth : ['',[Validators.required]],
      Gender : ['',[Validators.required]],
      VisitType : ['',[Validators.required]],
      RegistrationDate : [''],
      Country : [''],
      State : [''],
      County : [''],
      City : [''],
      Zip : [''],
      Address1 : [''],
      Address2 : [''],
      Tel1 : [''],
      Tel2 : [''],
      Ext1 : [''],
      Fax : [''],
      Email : [''],
      HealthId : ['',[Validators.required]],
      VisitId : [''],
    })
  }

  filterHealthId(event: AutoCompleteCompleteEvent){
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < (this.HealthIdList as any[]).length; i++) {
        let country = (this.HealthIdList as any[])[i];
        if (country.Value.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    if(filtered.length == 0 && query != ""){
      this.sendOtpVisible = true;
    }
    else{
      this.sendOtpVisible = false;
    }
    this.filteredHealthIds = filtered;
  }

  sendOtp(){
    if(this.healthIdForm.valid){
      // call api 

      this.healthIdOtpForm.get('TxnId')?.setValue("someid");
      this.healthIdForm.reset();
      this.sendOtpVisible = false;
      this.verifyOtpVisible = true;
    }
    else{
      return;
    }
  }

  VerifyOtp(){
    if(this.healthIdOtpForm.valid){
      this.verifyOtpVisible = false
      console.log(this.healthIdOtpForm.value);
    }
    else{
      return;
    }
  }
}
