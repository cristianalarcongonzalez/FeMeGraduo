import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfilefasetwoComponent } from './uploadfilefasetwo.component';

describe('UploadfilefasetwoComponent', () => {
  let component: UploadfilefasetwoComponent;
  let fixture: ComponentFixture<UploadfilefasetwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadfilefasetwoComponent]
    });
    fixture = TestBed.createComponent(UploadfilefasetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
