import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCasaAzul } from './why-casa-azul';

describe('WhyCasaAzul', () => {
  let component: WhyCasaAzul;
  let fixture: ComponentFixture<WhyCasaAzul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyCasaAzul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyCasaAzul);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
