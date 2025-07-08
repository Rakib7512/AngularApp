import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpolicestation } from './addpolice-station';

describe('AddpoliceStation', () => {
  let component: Addpolicestation;
  let fixture: ComponentFixture<Addpolicestation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addpolicestation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addpolicestation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
