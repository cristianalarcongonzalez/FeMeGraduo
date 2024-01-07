import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosvigentesComponent } from './conveniosvigentes.component';

describe('ConveniosvigentesComponent', () => {
  let component: ConveniosvigentesComponent;
  let fixture: ComponentFixture<ConveniosvigentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConveniosvigentesComponent]
    });
    fixture = TestBed.createComponent(ConveniosvigentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
