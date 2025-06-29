import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShipment } from './book-shipment';

describe('BookShipment', () => {
  let component: BookShipment;
  let fixture: ComponentFixture<BookShipment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookShipment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookShipment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
