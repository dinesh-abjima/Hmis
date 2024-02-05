import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhaarSigninComponent } from './aadhaar-signin.component';

describe('AadhaarSigninComponent', () => {
  let component: AadhaarSigninComponent;
  let fixture: ComponentFixture<AadhaarSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadhaarSigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AadhaarSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
