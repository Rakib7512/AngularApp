import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateemployee } from './updateemployee';

describe('Updateemployee', () => {
  let component: Updateemployee;
  let fixture: ComponentFixture<Updateemployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updateemployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateemployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
