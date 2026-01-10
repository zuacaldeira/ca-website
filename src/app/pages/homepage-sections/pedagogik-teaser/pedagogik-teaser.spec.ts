import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogikTeaser } from './pedagogik-teaser';

describe('PedagogikTeaser', () => {
  let component: PedagogikTeaser;
  let fixture: ComponentFixture<PedagogikTeaser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedagogikTeaser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedagogikTeaser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
