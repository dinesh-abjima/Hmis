import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSignInComponent } from './mobile-sign-in.component';

describe('MobileSignInComponent', () => {
  let component: MobileSignInComponent;
  let fixture: ComponentFixture<MobileSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
