import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewDvdsComponent } from './dataview-dvds.component';

describe('DataviewDvdsComponent', () => {
  let component: DataviewDvdsComponent;
  let fixture: ComponentFixture<DataviewDvdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewDvdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewDvdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
