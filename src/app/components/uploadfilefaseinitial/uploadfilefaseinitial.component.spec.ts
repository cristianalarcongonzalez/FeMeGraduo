import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfilefaseinitialComponent } from './uploadfilefaseinitial.component';

describe('UploadfilefaseinitialComponent', () => {
  let component: UploadfilefaseinitialComponent;
  let fixture: ComponentFixture<UploadfilefaseinitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadfilefaseinitialComponent]
    });
    fixture = TestBed.createComponent(UploadfilefaseinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
