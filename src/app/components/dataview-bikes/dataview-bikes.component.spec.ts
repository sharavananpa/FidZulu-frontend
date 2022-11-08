import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewBikesComponent } from './dataview-bikes.component';

describe('DataviewBikesComponent', () => {
  let component: DataviewBikesComponent;
  let fixture: ComponentFixture<DataviewBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewBikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
