import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSignupComponent } from './mobile-signup.component';

describe('MobileSignupComponent', () => {
  let component: MobileSignupComponent;
  let fixture: ComponentFixture<MobileSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
