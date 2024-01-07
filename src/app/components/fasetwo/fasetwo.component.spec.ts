import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasetwoComponent } from './fasetwo.component';

describe('FasetwoComponent', () => {
  let component: FasetwoComponent;
  let fixture: ComponentFixture<FasetwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FasetwoComponent]
    });
    fixture = TestBed.createComponent(FasetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
