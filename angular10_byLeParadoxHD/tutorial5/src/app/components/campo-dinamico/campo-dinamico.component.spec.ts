import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoDinamicoComponent } from './campo-dinamico.component';

describe('CampoDinamicoComponent', () => {
  let component: CampoDinamicoComponent;
  let fixture: ComponentFixture<CampoDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
