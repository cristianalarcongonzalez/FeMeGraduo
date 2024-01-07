import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatesComponent } from './card-states.component';

describe('CardStatesComponent', () => {
  let component: CardStatesComponent;
  let fixture: ComponentFixture<CardStatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStatesComponent]
    });
    fixture = TestBed.createComponent(CardStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
