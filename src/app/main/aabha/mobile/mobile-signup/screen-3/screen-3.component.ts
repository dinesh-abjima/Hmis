import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nous-screen-3',
  templateUrl: './screen-3.component.html',
  styleUrl: './screen-3.component.scss'
})
export class Screen3Component {
  myForm: FormGroup;
  healthId : string[] = ["Health ID 1","Health ID 2","Health ID 3"];
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      healthid: ['', Validators.required],
      
      gender: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Display form data in console
    } else {
      alert('Please fill out all fields.');
    }
  }
}

