import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewLaptopsComponent } from './dataview-laptops.component';

describe('DataviewLaptopsComponent', () => {
  let component: DataviewLaptopsComponent;
  let fixture: ComponentFixture<DataviewLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewLaptopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
