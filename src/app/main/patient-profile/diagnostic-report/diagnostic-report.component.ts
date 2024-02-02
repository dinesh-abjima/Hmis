import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'nous-diagnostic-report',
  templateUrl: './diagnostic-report.component.html',
  styleUrl: './diagnostic-report.component.scss'
})
export class DiagnosticReportComponent {
  DiagnosticReportForm : FormGroup;
  reportTypes : string[] = ["Lab","Imaging"]

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.DiagnosticReportForm = this.fb.group({
      ReportType : ['Lab', [Validators.required]],
      ReportCategory : ['',[Validators.required]],
      RadiologyTestName : [''],
      LaboratoryTestName : [''],
      ReportCreatedDate : ['',[Validators.required]],
      ReportConclusion : ['',[Validators.required]],
      File : ['',[Validators.required]],
    })
  }

  onBasicUploadAuto(event: UploadEvent){

  }
}
