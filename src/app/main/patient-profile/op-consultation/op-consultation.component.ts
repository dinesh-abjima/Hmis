import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RadioButtonClickEvent } from 'primeng/radiobutton';

@Component({
  selector: 'nous-op-consultation',
  templateUrl: './op-consultation.component.html',
  styleUrl: './op-consultation.component.scss'
})
export class OpConsultationComponent {
  opConsultationEntryForm : FormGroup;
  opConsultationScannedForm : FormGroup;
  isEntryForm : boolean = true;
  categoryTypes : string[] = ["Online Entry" , "Upload scanned OP Consultation Note"]
  selectedCategory : string='Online Entry';
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.opConsultationEntryForm = this.fb.group({
      Allergy : ['', [Validators.required]],
      History  : ['',[Validators.required]],
      Symptoms  : ['',[Validators.required]],
      Observations  : ['',[Validators.required]],
      Diagnosis  : ['',[Validators.required]],
      TreatmentPlan : ['',[Validators.required]],
      Prescription  : ['',[Validators.required]],
      FollowUpDate  : ['',[Validators.required]],
    })

    this.opConsultationScannedForm = this.fb.group({
      Notes  : ['', [Validators.required]],
      File  : ['',[Validators.required]],
    })
  }
  
  onRadioClick(value : any){
    if(value === "Online Entry"){
      this.isEntryForm = true;
    }
    else{
      this.isEntryForm = false;
    }
    console.log(value);
  }
}
