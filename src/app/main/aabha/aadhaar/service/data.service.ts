import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private formData: any[] = [];
  private mobile: string;

  addFormData(data: any) {
    this.formData.push(data);
  }

  getFormData() {
    return { ...this.formData };
  }
  getFormDataById(id: string): { [value: string]: any } | undefined {
    return this.formData.find((data) => data.id === id);
  }
  setmobileNumber(mobileNumber: string){
    this.mobile = mobileNumber;
  }
  getmobileNumber(){
    return this.mobile;
  }

}