import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramapracticasComponent } from './cronogramapracticas.component';

describe('CronogramapracticasComponent', () => {
  let component: CronogramapracticasComponent;
  let fixture: ComponentFixture<CronogramapracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronogramapracticasComponent]
    });
    fixture = TestBed.createComponent(CronogramapracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
