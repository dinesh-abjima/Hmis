import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class DataService {

  private formData: any[] = [];
 

addFormData(data: any){
  this.formData.push(data);

}
    
 
  getFormDataById(id: string): { [value: string]: any } | undefined {
    return this.formData.find((data) => data.id === id);
  }
  
}