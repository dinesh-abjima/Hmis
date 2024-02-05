import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'nous-screen-3',
  templateUrl: './screen-3.component.html',
  styleUrl: './screen-3.component.scss'
})
export class Screen3Component {
  form: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}
 
  ngOnInit(): void {
   
    this.initForm();
      const id = this.route.snapshot.params['id']!; 
      const formData = this.dataService.getFormDataById(id);
      this.form.patchValue(formData ?? {});
  }
 
  initForm(): void {
this.form = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
    });
  }
 
  verify(event: Event): void {
    event.preventDefault(); 
    if (this.form.valid) {
      const enteredOTP = this.form.value.otp;
      const id = this.route.snapshot.paramMap.get('id') ?? '';
        // this.router.navigate(['/screen-4', id]);
        this.router.navigate(['../screen-4', id], { relativeTo: this.route });
 
    }
  }

}
