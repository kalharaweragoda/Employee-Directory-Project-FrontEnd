import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployeeeComponent } from './view-all-employeee.component';

describe('ViewAllEmployeeeComponent', () => {
  let component: ViewAllEmployeeeComponent;
  let fixture: ComponentFixture<ViewAllEmployeeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllEmployeeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEmployeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
