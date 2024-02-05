import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhaarSignupComponent } from './aadhaar-signup.component';

describe('AadhaarSignupComponent', () => {
  let component: AadhaarSignupComponent;
  let fixture: ComponentFixture<AadhaarSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadhaarSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AadhaarSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
