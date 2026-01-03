import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAlert } from './news-alert';

describe('NewsAlert', () => {
  let component: NewsAlert;
  let fixture: ComponentFixture<NewsAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
