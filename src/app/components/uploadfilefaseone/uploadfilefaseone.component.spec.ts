import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfilefaseoneComponent } from './uploadfilefaseone.component';

describe('UploadfilefaseoneComponent', () => {
  let component: UploadfilefaseoneComponent;
  let fixture: ComponentFixture<UploadfilefaseoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadfilefaseoneComponent]
    });
    fixture = TestBed.createComponent(UploadfilefaseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
