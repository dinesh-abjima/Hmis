import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'nous-screen-2',
  templateUrl: './screen-2.component.html',
  styleUrl: './screen-2.component.scss'
})
export class Screen2Component implements OnInit{
  id: string | null;
  secondForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.secondForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('[0-9]{6}')]]
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
 this.id = params.get('id');
    });
  }
  verifyOTP() {
    if (this.secondForm.valid && this.id !== null) {
      // To go to ThirdComponent
      
      this.router.navigate(['../screen-3', this.id], { relativeTo: this.route });
    }
  }
 }