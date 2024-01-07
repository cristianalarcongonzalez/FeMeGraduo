import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecerconveniosComponent } from './establecerconvenios.component';

describe('EstablecerconveniosComponent', () => {
  let component: EstablecerconveniosComponent;
  let fixture: ComponentFixture<EstablecerconveniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstablecerconveniosComponent]
    });
    fixture = TestBed.createComponent(EstablecerconveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
