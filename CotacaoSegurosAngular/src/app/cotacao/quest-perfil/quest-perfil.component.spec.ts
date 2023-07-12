import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPerfilComponent } from './quest-perfil.component';

describe('QuestPerfilComponent', () => {
  let component: QuestPerfilComponent;
  let fixture: ComponentFixture<QuestPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
