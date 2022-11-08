import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewBooksComponent } from './dataview-books.component';

describe('DataviewBooksComponent', () => {
  let component: DataviewBooksComponent;
  let fixture: ComponentFixture<DataviewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
