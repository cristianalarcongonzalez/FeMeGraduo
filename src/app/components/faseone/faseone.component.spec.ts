import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseoneComponent } from './faseone.component';

describe('FaseoneComponent', () => {
  let component: FaseoneComponent;
  let fixture: ComponentFixture<FaseoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaseoneComponent]
    });
    fixture = TestBed.createComponent(FaseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
