import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Konzept } from './konzept';

describe('Konzept', () => {
  let component: Konzept;
  let fixture: ComponentFixture<Konzept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Konzept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Konzept);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
