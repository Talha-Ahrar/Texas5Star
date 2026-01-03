import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Investors } from './investors';

describe('Investors', () => {
  let component: Investors;
  let fixture: ComponentFixture<Investors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Investors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Investors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
