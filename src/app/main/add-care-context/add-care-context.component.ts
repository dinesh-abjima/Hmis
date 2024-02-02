import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nous-add-care-context',
  templateUrl: './add-care-context.component.html',
  styleUrl: './add-care-context.component.scss'
})
export class AddCareContextComponent {
  patientId : number;
  healthId : string;
  careContextForm : FormGroup;
  careContextFetchModesForm : FormGroup;
  careContextVerifyOtpForm : FormGroup;
  careContextFormVisible : boolean = false;
  careContextFetchModesFormVisible : boolean = true;
  careContextVerifyOtpFormVisible : boolean = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.careContextForm = this.fb.group({
      ReferenceNumber: ['', Validators.required],
      Display: ['', Validators.required],
      CareContexts: this.fb.array([]),
    });
    this.addCareContext();

    this.careContextFetchModesForm = this.fb.group({
      HealthId: ['', [Validators.required]],
    });

    this.careContextVerifyOtpForm = this.fb.group({
      Otp: ['', [Validators.required]],
    });
  }
  get careContextsFormArray() {
    return this.careContextForm.get('CareContexts') as FormArray;
  }
  addCareContext() {
    const careContextGroup = this.fb.group({
      ReferenceNumber: ['', Validators.required],
      Display: ['', Validators.required],
    });
    this.careContextsFormArray.push(careContextGroup);
  }

  removeCareContext(index: number) {
    this.careContextsFormArray.removeAt(index);
  }

  showCareConextForm(){
    this.careContextFormVisible = true;
    this.careContextFetchModesFormVisible = true;
  }

  sendOtpFetchMode(){
    if(this.careContextFetchModesForm.valid){

      // call api

      this.careContextFetchModesFormVisible = false;
      this.careContextVerifyOtpFormVisible = true;

    }
    else{
      return;
    }
    this.careContextFetchModesForm.reset();
    
  }

  verifyCareConetextOtp(){
    if(this.careContextVerifyOtpForm.valid){
      this.careContextVerifyOtpFormVisible = false;
      this.careContextFormVisible = true;
    }
    else{
      return;
    }
    this.careContextVerifyOtpForm.reset();
  }

  postCareContext(){

    if(this.careContextForm.valid){
      this.careContextFormVisible = false;
    }
    else{
      return;
    }

  }

  closeCareContextDailoge(){
  }
}
