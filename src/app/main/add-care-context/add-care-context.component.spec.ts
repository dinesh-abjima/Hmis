import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCareContextComponent } from './add-care-context.component';

describe('AddCareContextComponent', () => {
  let component: AddCareContextComponent;
  let fixture: ComponentFixture<AddCareContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCareContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCareContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
