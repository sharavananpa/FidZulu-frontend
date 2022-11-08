import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewFoodComponent } from './dataview-food.component';

describe('DataviewFoodComponent', () => {
  let component: DataviewFoodComponent;
  let fixture: ComponentFixture<DataviewFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
