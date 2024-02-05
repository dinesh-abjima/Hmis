import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'nous-screen-1',
  templateUrl: './screen-1.component.html',
  styleUrl: './screen-1.component.scss'
})
export class Screen1Component {
  aadharForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    this.aadharForm = this.formBuilder.group({
      aadharNumber: ['', [Validators.required, Validators.maxLength(12)]],
    });
  }
 
  sendOTP(): void {
    if (this.aadharForm.valid) {
      const aadharNumber = this.aadharForm.value.aadharNumber;
      const formData = { id: '1', aadharNumber, otp: '', mobileNumber: '' };
      this.dataService.addFormData(formData);
      this.router.navigate(['../screen-2', formData.id], { relativeTo: this.route });
    }
    }
  }


