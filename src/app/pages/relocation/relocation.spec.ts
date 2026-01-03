import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relocation } from './relocation';

describe('Relocation', () => {
  let component: Relocation;
  let fixture: ComponentFixture<Relocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
