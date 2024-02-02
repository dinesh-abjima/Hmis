import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharSignupComponent } from './aadhar-signup.component';

describe('AadharSignupComponent', () => {
  let component: AadharSignupComponent;
  let fixture: ComponentFixture<AadharSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadharSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AadharSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
