import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpConsultationComponent } from './op-consultation.component';

describe('OpConsultationComponent', () => {
  let component: OpConsultationComponent;
  let fixture: ComponentFixture<OpConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpConsultationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
