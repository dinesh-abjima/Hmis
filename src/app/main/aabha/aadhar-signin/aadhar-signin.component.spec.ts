import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharSigninComponent } from './aadhar-signin.component';

describe('AadharSigninComponent', () => {
  let component: AadharSigninComponent;
  let fixture: ComponentFixture<AadharSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadharSigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AadharSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
