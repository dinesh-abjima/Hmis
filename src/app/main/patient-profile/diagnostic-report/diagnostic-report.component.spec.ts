import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticReportComponent } from './diagnostic-report.component';

describe('DiagnosticReportComponent', () => {
  let component: DiagnosticReportComponent;
  let fixture: ComponentFixture<DiagnosticReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosticReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
