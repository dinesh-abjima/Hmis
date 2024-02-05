import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
 
@Component({
  selector: 'nous-screen-2',
  templateUrl: './screen-2.component.html',
  styleUrls: ['./screen-2.component.scss']
})
export class Screen2Component {
  id: string | null;
  form: FormGroup;
  staticOtp: string = '';
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder
  ) {}
 
  ngOnInit(): void {

    // this.id = this.route.snapshot.params['id']; 
    this.id = this.route.snapshot.paramMap.get('id');
    this.form = this.fb.group({
      mobileNumber: ['', [Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]],
      otp: ['',[Validators.required, Validators.pattern('[0-9]{6}')]],
    });
  }
 

onVerify(): void {
  if (this.form.valid) {
    const enteredOtp = this.form.value.otp;
    this.dataService.addFormData({
      id: this.id,
      mobileNumber: this.form.value.mobileNumber,
      otp: enteredOtp,
    });
 
    this.router.navigate(['../screen-3', this.id], { relativeTo: this.route });
  }
  
}

  }
