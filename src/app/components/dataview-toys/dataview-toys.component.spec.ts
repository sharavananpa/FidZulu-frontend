import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewToysComponent } from './dataview-toys.component';

describe('DataviewToysComponent', () => {
  let component: DataviewToysComponent;
  let fixture: ComponentFixture<DataviewToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
