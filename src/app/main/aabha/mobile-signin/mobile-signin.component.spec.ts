import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSigninComponent } from './mobile-signin.component';

describe('MobileSigninComponent', () => {
  let component: MobileSigninComponent;
  let fixture: ComponentFixture<MobileSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
