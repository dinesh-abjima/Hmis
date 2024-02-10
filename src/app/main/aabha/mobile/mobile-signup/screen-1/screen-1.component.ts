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
  id='1';
  firstForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,private route:ActivatedRoute,private mservice:DataService) {
    this.firstForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }
  ngOnInit(): void {}
  useAadhar(){}
  sendOTP() {
    if (this.firstForm.valid) {
      const mobileNumber = this.firstForm.value.mobileNumber;
      this.mservice.setmobileNumber(mobileNumber)
      const check=this.mservice.getmobileNumber();
      //console.log(check);
      // Navigate to SecondComponent with mobile number as parameter      
 this.router.navigate(['../screen-2', this.id], { relativeTo: this.route });
    }
  }
}
