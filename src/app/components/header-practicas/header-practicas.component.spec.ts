import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPracticasComponent } from './header-practicas.component';

describe('HeaderPracticasComponent', () => {
  let component: HeaderPracticasComponent;
  let fixture: ComponentFixture<HeaderPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPracticasComponent]
    });
    fixture = TestBed.createComponent(HeaderPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
