import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nous-discharge-summary',
  templateUrl: './discharge-summary.component.html',
  styleUrl: './discharge-summary.component.scss'
})
export class DischargeSummaryComponent {
  dischargeSummaryEntryForm : FormGroup;
  dischargeSummaryScannedForm : FormGroup;
  isEntryForm : boolean = true;
  categoryTypes : string[] = ["Online Entry" , "Upload Scanned Discharge Summary"]
  selectedCategory : string='Online Entry';
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.dischargeSummaryEntryForm = this.fb.group({
      DateOfAdmissionWithTime : ['', [Validators.required]],
      DateOfDischargeWithTime  : ['',[Validators.required]],
      PresentingComplaintsWithDuration  : ['',[Validators.required]],
      Diagnosis   : ['',[Validators.required]],
      ProceduresPerformed  : ['',[Validators.required]],
      TreatmentProvided  : ['',[Validators.required]],
      StatusAtTheTimeOfDischarge  : ['',[Validators.required]],
      AdviceOnDischarge  : ['',[Validators.required]],
      FollowUpDate  : ['',[Validators.required]],
    })

    this.dischargeSummaryScannedForm = this.fb.group({
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
