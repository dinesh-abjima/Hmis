import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  
  private mobile: string;
  
  setmobileNumber(mobileNumber: string){
    this.mobile = mobileNumber;
  }
  getmobileNumber(){
    return this.mobile;
  }

}