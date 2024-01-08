import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishagreementsComponent } from './establishagreements.component';

describe('EstablishagreementsComponent', () => {
  let component: EstablishagreementsComponent;
  let fixture: ComponentFixture<EstablishagreementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstablishagreementsComponent]
    });
    fixture = TestBed.createComponent(EstablishagreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
