import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

 
@Component({
  selector: 'nous-screen-4',
  templateUrl: './screen-4.component.html',
  styleUrl: './screen-4.component.scss'
  
})
export class Screen4Component {
 
  formData: any;
  form: FormGroup;
  addList : string[] = ["Address 1","Address 2"]

 
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private fb: FormBuilder
  ) {}
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.formData = this.dataService.getFormDataById(id);
    this.initForm();


  }
 
  initForm(): void {
      this.form = this.fb.group({
      addList : ['',[Validators.required]],
    });
  }
 
  verify(): void {
    const formData = this.getDataFromService();
    console.log('Aadhar Number:', formData?.aadharNumber);
    console.log('Mobile Number:', formData?.mobileNumber);
    console.log('Selected Option:', this.form.value.addList);
    console.log(formData)
  }
 
  getDataFromService(): any {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    const formData = this.dataService.getFormDataById(id);
    return formData;
  }
}
