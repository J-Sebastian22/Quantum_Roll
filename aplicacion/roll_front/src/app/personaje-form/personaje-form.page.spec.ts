import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeFormPage } from './personaje-form.page';

describe('PersonajeFormPage', () => {
  let component: PersonajeFormPage;
  let fixture: ComponentFixture<PersonajeFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
