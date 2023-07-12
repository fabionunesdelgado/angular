import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroSeguradoComponent } from './seguro-segurado.component';

describe('SeguroSeguradoComponent', () => {
  let component: SeguroSeguradoComponent;
  let fixture: ComponentFixture<SeguroSeguradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguroSeguradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguroSeguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
