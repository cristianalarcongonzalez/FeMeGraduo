import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseinitialComponent } from './faseinitial.component';

describe('FaseinitialComponent', () => {
  let component: FaseinitialComponent;
  let fixture: ComponentFixture<FaseinitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaseinitialComponent]
    });
    fixture = TestBed.createComponent(FaseinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
