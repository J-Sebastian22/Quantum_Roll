import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMesaPage } from './new-mesa.page';

describe('NewMesaPage', () => {
  let component: NewMesaPage;
  let fixture: ComponentFixture<NewMesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
