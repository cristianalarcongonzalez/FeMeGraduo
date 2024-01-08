import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeescheduleComponent } from './seeschedule.component';

describe('SeescheduleComponent', () => {
  let component: SeescheduleComponent;
  let fixture: ComponentFixture<SeescheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeescheduleComponent]
    });
    fixture = TestBed.createComponent(SeescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
